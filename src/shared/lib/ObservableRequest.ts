import { makeAutoObservable, runInAction } from 'mobx';

// Either-like result so callers can pattern-match without `try/catch`.
export type Either<E, T> = { ok: true; value: T } | { ok: false; error: E };

export const ok = <T>(value: T): Either<never, T> => ({ ok: true, value });
export const err = <E>(error: E): Either<E, never> => ({ ok: false, error });

// MobX-friendly wrapper around an async fetcher.
//
// Lifecycle:
//   - call `fetch(...args)` to run the underlying request
//   - observe `data`, `error`, `isLoading`, `isLoaded` from a React view
//   - call `reset()` to clear state and abort an in-flight request
//
// Cancellation: every `fetch()` allocates a new AbortController and passes
// its signal to the fetcher. A subsequent `fetch()` or `reset()` aborts
// the previous controller, so the underlying network request is actually
// cancelled (not just stale-shadowed) when the consumer moves on.
//
// Stale-response guard: even with abort wired up, races can still race —
// each call also increments a token; only the latest call commits its
// result. Together this prevents older in-flight requests from
// overwriting a newer one and stops orphaned requests from doing
// backend/network work that the UI cannot use.
export class ObservableRequest<T, Args extends unknown[] = []> {
  private _data: T | null = null;
  private _error: unknown = null;
  private _isLoading = false;
  private _isLoaded = false;
  private _callToken = 0;
  private _abortController: AbortController | null = null;

  private constructor(
    private readonly fetcher: (signal: AbortSignal, ...args: Args) => Promise<T>,
  ) {
    makeAutoObservable<this, 'fetcher' | '_callToken' | '_abortController'>(this, {
      fetcher: false,
      _callToken: false,
      _abortController: false,
    });
  }

  public static of<T, Args extends unknown[]>(
    fetcher: (signal: AbortSignal, ...args: Args) => Promise<T>,
  ): ObservableRequest<T, Args> {
    return new ObservableRequest(fetcher);
  }

  public get data(): T | null {
    return this._data;
  }

  public get error(): unknown {
    return this._error;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public get isLoaded(): boolean {
    return this._isLoaded;
  }

  public async fetch(...args: Args): Promise<Either<unknown, T>> {
    this._callToken += 1;
    const token = this._callToken;
    this._abortController?.abort();
    const controller = new AbortController();
    this._abortController = controller;
    this._isLoading = true;
    this._error = null;

    try {
      const value = await this.fetcher(controller.signal, ...args);
      if (token !== this._callToken) {
        return ok(value);
      }
      runInAction(() => {
        this._data = value;
        this._isLoading = false;
        this._isLoaded = true;
      });
      return ok(value);
    } catch (error) {
      if (token === this._callToken) {
        runInAction(() => {
          this._error = error;
          this._isLoading = false;
        });
      }
      return err(error);
    }
  }

  public reset(): void {
    this._callToken += 1;
    this._abortController?.abort();
    this._abortController = null;
    this._data = null;
    this._error = null;
    this._isLoading = false;
    this._isLoaded = false;
  }
}
