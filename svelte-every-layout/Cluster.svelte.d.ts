/** @typedef {typeof __propDef.props}  ClusterProps */
/** @typedef {typeof __propDef.events}  ClusterEvents */
/** @typedef {typeof __propDef.slots}  ClusterSlots */
/** A cluster of elements with equal spacing. Good for navigation links, social media icons, etc. */
export default class Cluster extends SvelteComponentTyped<{
    wrapperElement: string;
    wrapperClass?: string;
    justify?: string;
    align?: string;
    space?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ClusterProps = typeof __propDef.props;
export type ClusterEvents = typeof __propDef.events;
export type ClusterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperElement: string;
        wrapperClass?: string | null;
        justify?: string;
        align?: string;
        space?: string | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
