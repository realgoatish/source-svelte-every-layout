/** @typedef {typeof __propDef.props}  CenterProps */
/** @typedef {typeof __propDef.events}  CenterEvents */
/** @typedef {typeof __propDef.slots}  CenterSlots */
/**
 * Center content with a maximum width
 * Props:
 * ```typescript
 * THIS COMMENT CAME FROM THE COMPONENT
 * ```
 */
export default class Center extends SvelteComponentTyped<{
    wrapperClass: string;
    max?: string | undefined;
    andText?: boolean | undefined;
    gutters?: string | null | undefined;
    intrinsic?: boolean | undefined;
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
        wrapperClass: string;
        max?: string | undefined;
        andText?: boolean | undefined;
        gutters?: string | null | undefined;
        intrinsic?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};