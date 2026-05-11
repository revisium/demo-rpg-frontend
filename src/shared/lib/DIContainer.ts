// Minimal dependency-injection container with three scopes:
//   - singleton: one instance per container lifetime
//   - session:   one instance per `startSession() … stopSession()` window
//   - transient: a fresh instance on every `get()`
//
// ViewModels register as `transient` so each page mount gets a clean store.
// Long-lived services (ApiService, EnvironmentService) register as `singleton`.

type Scope = 'singleton' | 'session' | 'transient';

type Factory<T> = () => T;

interface Registration<T> {
  factory: Factory<T>;
  scope: Scope;
  singletonInstance?: T;
  sessionInstance?: T;
}

export type Token<T> = new (...args: never[]) => T;

class DIContainer {
  private readonly registrations = new Map<Token<unknown>, Registration<unknown>>();
  private sessionActive = false;

  public register<T>(token: Token<T>, factory: Factory<T>, options: { scope: Scope }): void {
    this.registrations.set(token, {
      factory,
      scope: options.scope,
    });
  }

  public get<T>(token: Token<T>): T {
    const registration = this.registrations.get(token) as Registration<T> | undefined;
    if (!registration) {
      throw new Error(`DIContainer: token "${token.name}" is not registered`);
    }

    if (registration.scope === 'singleton') {
      registration.singletonInstance ??= registration.factory();
      return registration.singletonInstance;
    }

    if (registration.scope === 'session') {
      if (!this.sessionActive) {
        throw new Error(
          `DIContainer: token "${token.name}" is session-scoped but no session is active`,
        );
      }
      registration.sessionInstance ??= registration.factory();
      return registration.sessionInstance;
    }

    return registration.factory();
  }

  public startSession(): void {
    this.sessionActive = true;
  }

  public stopSession(): void {
    this.sessionActive = false;
    for (const registration of this.registrations.values()) {
      if (registration.scope === 'session') {
        registration.sessionInstance = undefined;
      }
    }
  }
}

export const container = new DIContainer();
