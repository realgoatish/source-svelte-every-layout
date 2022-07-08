import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string | undefined;
        /** The desired aspect ratio e.g. '1:1', '16:9', etc. */ ratio?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FrameProps = typeof __propDef.props;
export declare type FrameEvents = typeof __propDef.events;
export declare type FrameSlots = typeof __propDef.slots;
/**
 * Frame for cropping images to a desired aspect ratio
 * ```typescript
 * props: {
 *   wrapperClass: string|undefined = undefined;
 *   ratio?: string = '1:1';
 * }
 * ```
 */
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
}
export {};
