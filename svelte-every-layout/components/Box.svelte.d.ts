/** @typedef {typeof __propDef.props}  BoxProps */
/** @typedef {typeof __propDef.events}  BoxEvents */
/** @typedef {typeof __propDef.slots}  BoxSlots */
/** Create basic, two-tone boxes */
export default class Box extends SvelteComponentTyped<{
    wrapperClass?: string;
    colorLight?: string;
    colorDark?: string;
    padding?: string;
    borderWidth?: string | number;
    invert?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | null;
        colorLight?: string | null;
        colorDark?: string | null;
        padding?: string | null;
        borderWidth?: (string | number) | null;
        invert?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
