import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** THIS IS A TEST COMMENT f */ wrapperClass?: string;
        max?: string;
        andText?: boolean;
        gutters?: string;
        intrinsic?: boolean;
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
 */
export default class Center extends SvelteComponentTyped<CenterProps, CenterEvents, CenterSlots> {
}
export {};
