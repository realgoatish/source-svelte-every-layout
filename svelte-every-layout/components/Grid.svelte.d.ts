/** @typedef {typeof __propDef.props}  GridProps */
/** @typedef {typeof __propDef.events}  GridEvents */
/** @typedef {typeof __propDef.slots}  GridSlots */
/** Grid layout for e.g. cards */
export default class Grid extends SvelteComponentTyped<{
    wrapperElement: string;
    wrapperClass?: string;
    space?: string;
    min?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperElement: string;
        wrapperClass?: string | null;
        space?: string | null;
        min?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
