import '@testing-library/jest-dom/vitest'

if (typeof window !== 'undefined' && !window.matchMedia) {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => false,
		}),
	})
}

if (typeof window !== 'undefined' && !window.ResizeObserver) {
	class ResizeObserverMock {
		observe() {}
		unobserve() {}
		disconnect() {}
	}

	Object.defineProperty(window, 'ResizeObserver', {
		writable: true,
		value: ResizeObserverMock,
	})
}

if (typeof window !== 'undefined' && !window.IntersectionObserver) {
	class IntersectionObserverMock {
		root = null
		rootMargin = '0px'
		thresholds = [0]
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords() {
			return []
		}
	}

	Object.defineProperty(window, 'IntersectionObserver', {
		writable: true,
		value: IntersectionObserverMock,
	})
}

if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView) {
	Element.prototype.scrollIntoView = () => {}
}
