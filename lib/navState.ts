/**
 * Tiny pub/sub for navigation loading state.
 * Shared between NavLink (writer) and NavigationProgress (reader)
 * without a React Context provider to avoid re-renders.
 */

type Listener = (loading: boolean) => void;

let _loading = false;
const _listeners = new Set<Listener>();

export function setNavigating(v: boolean) {
  if (_loading === v) return;
  _loading = v;
  _listeners.forEach((fn) => fn(v));
}

export function getNavigating() {
  return _loading;
}

export function subscribeNavigating(fn: Listener) {
  _listeners.add(fn);
  return () => _listeners.delete(fn);
}
