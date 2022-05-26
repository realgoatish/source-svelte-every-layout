import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        wrapperClass?: string | undefined;
        max?: string | undefined;
        andText?: boolean | undefined;
        gutters?: string | undefined;
        intrinsic?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CenterProps = typeof __propDef.props;
export declare type CenterEvents = typeof __propDef.events;
export declare type CenterSlots = typeof __propDef.slots;
/**
 * Center content with a maximum width
 * Props:
 * ```typescript
 * let yew
 * ```
 */
export default class Center extends SvelteComponentTyped<CenterProps, CenterEvents, CenterSlots> {
}
export {};
