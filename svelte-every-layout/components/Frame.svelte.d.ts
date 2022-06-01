import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Set to 'true' for image lazyloading */ lazy?: boolean;
        /** The desired aspect ratio */ ratio?: string;
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
 *   wrapperClass?: string = null;
 *   lazy?: boolean = false;
 *   ratio?: string = '1:1';
 * }
 * ```
 */
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
}
export {};
