/** @typedef {typeof __propDef.props}  ImposterProps */
/** @typedef {typeof __propDef.events}  ImposterEvents */
/** @typedef {typeof __propDef.slots}  ImposterSlots */
/** Needs to be wrapped in a `position: relative` parent */
export default class Imposter extends SvelteComponentTyped<{
    imposterWrapperDiv: HTMLElement;
    fixed?: boolean;
    contain?: boolean;
    margin?: string;
    wrapperClass?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ImposterProps = typeof __propDef.props;
export type ImposterEvents = typeof __propDef.events;
export type ImposterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        imposterWrapperDiv: HTMLElement;
        fixed?: boolean;
        contain?: boolean;
        margin?: string;
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
