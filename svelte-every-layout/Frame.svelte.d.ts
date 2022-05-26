/** @typedef {typeof __propDef.props}  FrameProps */
/** @typedef {typeof __propDef.events}  FrameEvents */
/** @typedef {typeof __propDef.slots}  FrameSlots */
/** Frame for cropping images to a desired aspect ratio */
export default class Frame extends SvelteComponentTyped<{
    ratio?: string;
    lazy?: boolean;
    wrapperClass?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FrameProps = typeof __propDef.props;
export type FrameEvents = typeof __propDef.events;
export type FrameSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ratio?: string;
        lazy?: boolean;
        wrapperClass?: string | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
