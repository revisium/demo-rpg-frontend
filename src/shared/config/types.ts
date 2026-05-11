// MVVM contract every page ViewModel implements.
//
// Lifecycle (driven by useViewModel hook):
//   setup(...args)  — synchronously prepare model state from route params
//   mount(...args)  — async side effects (fetches, subscriptions)
//   unmount()       — dispose subscriptions, abort in-flight work
export interface IViewModel {
  setup: (...args: unknown[]) => void | Promise<void>;
  mount: (...args: unknown[]) => void | Promise<void>;
  unmount: () => void;
}
