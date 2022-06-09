import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Choose the parent element for this component's slot contents:
             *  - ul
             *  - ol
             *  - dl
             *  - div (requires each slotted child element to be wrapped in a `<div>` also)
             */ wrapperElement: string;
        /** A CSS `width` value (representing the `container breakpoint`) */ threshold: string;
        /** A CSS `margin` value */ space?: string;
        /** A number representing the maximum number of items permitted for a horizontal layout */ limit?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SwitcherProps = typeof __propDef.props;
export declare type SwitcherEvents = typeof __propDef.events;
export declare type SwitcherSlots = typeof __propDef.slots;
/**
 * Switch between horizontal & vertical layout at a given, container-based breakpoint
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   wrapperElement: string;
 *   threshold: string;
 *   space?: string = null;
 *   limit?: number = 4
 * }
 * ```
 */
export default class Switcher extends SvelteComponentTyped<SwitcherProps, SwitcherEvents, SwitcherSlots> {
}
export {};
