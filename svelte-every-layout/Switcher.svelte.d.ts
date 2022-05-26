/** @typedef {typeof __propDef.props}  SwitcherProps */
/** @typedef {typeof __propDef.events}  SwitcherEvents */
/** @typedef {typeof __propDef.slots}  SwitcherSlots */
/** Switch between horizontal & vertical layout at a given, container-based breakpoint */
export default class Switcher extends SvelteComponentTyped<{
    wrapperElement: string;
    threshold?: string;
    wrapperClass?: string;
    space?: string;
    limit?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SwitcherProps = typeof __propDef.props;
export type SwitcherEvents = typeof __propDef.events;
export type SwitcherSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperElement: string;
        threshold?: string;
        wrapperClass?: string | null;
        space?: string | null;
        limit?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
