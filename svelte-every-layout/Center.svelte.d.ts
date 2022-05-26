/** @typedef {typeof __propDef.props}  CenterProps */
/** @typedef {typeof __propDef.events}  CenterEvents */
/** @typedef {typeof __propDef.slots}  CenterSlots */
/**
 * Center content with a maximum width
 * Props:
 */
export class Center extends SvelteComponentTyped<{
    max?: string;
    wrapperClass?: string;
    andText?: boolean;
    gutters?: string;
    intrinsic?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CenterProps = typeof __propDef.props;
export type CenterEvents = typeof __propDef.events;
export type CenterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        max?: string;
        wrapperClass?: string;
        andText?: boolean;
        gutters?: string | null;
        intrinsic?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
