/** @typedef {typeof __propDef.props}  ReelProps */
/** @typedef {typeof __propDef.events}  ReelEvents */
/** @typedef {typeof __propDef.slots}  ReelSlots */
/** A section of horizontally-scrollable content */
export default class Reel extends SvelteComponentTyped<{
    wrapperClass?: string;
    space?: string;
    visualInstructions?: boolean;
    itemWidth?: string;
    height?: string;
    thumbColor?: string;
    trackColor?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ReelProps = typeof __propDef.props;
export type ReelEvents = typeof __propDef.events;
export type ReelSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null;
        space?: string | null;
        visualInstructions?: boolean;
        itemWidth?: string;
        height?: string;
        thumbColor?: string | null;
        trackColor?: string | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
