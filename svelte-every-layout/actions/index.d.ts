/**
 * If user is using a touch interface, add a 'touch' class to the body tag
 * @param {HTMLElement} node
 */
export function detectTouch(node: HTMLElement): void;
/**
 * @param {HTMLElement} node
 * @typedef {Object} IntersectionObserverOptions - Options to pass to the IntersectionObserver API
 * @property {HTMLElement} [root]
 * @property {string} [rootMargin]
 * @property {number} [threshold]
 * @param {{ once?: boolean, cooldown?: number, options?: IntersectionObserverOptions, delay?: number, update?: *} | null } [config]
 */
export function intersectionObserver(node: HTMLElement, config?: {
    once?: boolean;
    cooldown?: number;
    options?: IntersectionObserverOptions;
    delay?: number;
    update?: any;
} | null): {
    update: (update: any) => void;
    destroy: () => any;
};
/**
 * - Options to pass to the IntersectionObserver API
 */
export type IntersectionObserverOptions = {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
};
