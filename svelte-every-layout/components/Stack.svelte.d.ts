import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** A CSS `margin` value. */ space?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type StackProps = typeof __propDef.props;
export declare type StackEvents = typeof __propDef.events;
export declare type StackSlots = typeof __propDef.slots;
/**
 * Evenly-spaced child elements stacked vertically
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   space?: string = null;
 * }
 * ```
 */
export default class Stack extends SvelteComponentTyped<StackProps, StackEvents, StackSlots> {
}
export {};
