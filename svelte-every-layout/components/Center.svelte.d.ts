import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** A CSS max-width value */ max: string;
        /** Center align the text too (text-align: center) */ andText?: boolean;
        /** The minimum space on either side of the content */ gutters?: string;
        /** Center child elements based on their content width */ intrinsic?: boolean;
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
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   max: string;
 *   andText?: boolean = false;
 *   gutters?: string = null;
 *   intrinsic?: boolean = false;
 * }
 * ```
 */
export default class Center extends SvelteComponentTyped<CenterProps, CenterEvents, CenterSlots> {
}
export {};
