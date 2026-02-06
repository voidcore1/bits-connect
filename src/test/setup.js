import "@testing-library/jest-dom";

class IntersectionObserverMock {
  observe = () => null;
  disconnect = () => null;
  unobserve = () => null;
}
window.IntersectionObserver = IntersectionObserverMock;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
