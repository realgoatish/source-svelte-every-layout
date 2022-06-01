import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Choose the parent element for this component's slot contents:
             *  - ul
             *  - ol
             *  - dl
             *  - div
             */ wrapperElement: string;
        /** A CSS length value representing `x` in `minmax(min(x, 100%), 1fr) */ min?: string;
        /** The space between grid cells */ space?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type GridProps = typeof __propDef.props;
export declare type GridEvents = typeof __propDef.events;
export declare type GridSlots = typeof __propDef.slots;
/**
 * Grid layout for e.g. cards
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   wrapperElement: string;
 *   min?: string = "250px";
 *   space?: string = null;
 * }
 * ```
 */
export default class Grid extends SvelteComponentTyped<GridProps, GridEvents, GridSlots> {
}
export {};
