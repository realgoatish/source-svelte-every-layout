import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Light color for the Box's CSS 'background-color' property. Becomes its CSS 'color' property if the 'invert' prop is set to true */ colorLight?: string;
        /** Dark color for the Box's CSS 'color' property. Becomes its CSS 'background-color' property if the 'invert' prop is set to true */ colorDark?: string;
        /** A CSS padding value */ padding?: string;
        /** A CSS border-width value */ borderWidth?: string;
        /** Inverts the Box's CSS 'color' & 'background-color' properties */ invert?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BoxProps = typeof __propDef.props;
export declare type BoxEvents = typeof __propDef.events;
export declare type BoxSlots = typeof __propDef.slots;
/**
 * Create basic, two-tone boxes
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   colorLight?: string = null;
 *   colorDark?: string = null;
 *   padding?: string = null;
 *   borderWidth?: string = null;
 *   invert?: boolean = false
 * }
 * ```
 */
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
}
export {};
