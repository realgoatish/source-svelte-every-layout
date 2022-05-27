/** @typedef {typeof __propDef.props}  FrameProps */
/** @typedef {typeof __propDef.events}  FrameEvents */
/** @typedef {typeof __propDef.slots}  FrameSlots */
/** Frame for cropping images to a desired aspect ratio */
export default class Frame extends SvelteComponentTyped<{
    wrapperClass?: string;
    lazy?: boolean;
    ratio?: string;
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
        wrapperClass?: string | null;
        lazy?: boolean;
        ratio?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
