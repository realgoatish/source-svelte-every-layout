import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Allow horizontal scrolling within the modal. Use this with the `margin` prop */ contain?: boolean;
        /** Whether to position the element relative to the viewport */ fixed?: boolean;
        /** Minimum space between the element and the inside edges of the positioning container over which it is placed. Use this with the `contain` prop.  */ margin?: string;
        /** Due to a11y requirements for DOM manipulation, we have to expose a reference to the Imposter's wrapper div so it can be manipulated from parent components */ imposterWrapperDiv: HTMLDivElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ImposterProps = typeof __propDef.props;
export declare type ImposterEvents = typeof __propDef.events;
export declare type ImposterSlots = typeof __propDef.slots;
/**
 * Needs to be wrapped in a `position: relative` parent
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   contain?: boolean = false;
 *   fixed?: boolean = false;
 *   margin?: string = "0";
 *   imposterWrapperDiv: HTMLDivElement;
 * }
 * ```
 */
export default class Imposter extends SvelteComponentTyped<ImposterProps, ImposterEvents, ImposterSlots> {
}
export {};
