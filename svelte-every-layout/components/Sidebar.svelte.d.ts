/** @typedef {typeof __propDef.props}  SidebarProps */
/** @typedef {typeof __propDef.events}  SidebarEvents */
/** @typedef {typeof __propDef.slots}  SidebarSlots */
/** A sidebar & main content area, which stack on smaller screens */
export default class Sidebar extends SvelteComponentTyped<{
    wrapperClass?: string;
    space?: string;
    side?: string;
    sideWidth?: string;
    contentMin?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    'first-child': {};
    'last-child': {};
}> {
}
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null;
        space?: string | null;
        side?: string;
        sideWidth?: string | null;
        contentMin?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'first-child': {};
        'last-child': {};
    };
};
export {};
