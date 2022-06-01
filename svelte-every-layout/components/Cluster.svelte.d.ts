import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** choose the parent element for this component's slot contents:
             *  - ul
             *  - ol
             *  - dl
             *  - div
             */ wrapperElement: string;
        /** A CSS `justify-content` value */ justify?: string;
        /** A CSS `align-items` value */ align?: string;
        /** A CSS `gap` value. The minimum space between the clustered child elements. */ space?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ClusterProps = typeof __propDef.props;
export declare type ClusterEvents = typeof __propDef.events;
export declare type ClusterSlots = typeof __propDef.slots;
/**
 * A cluster of elements with equal spacing. Good for navigation links, social media icons, etc.
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   wrapperElement?: string;
 *   justify?: string = 'flex-start';
 *   align?: string = 'flex-start';
 *   space?: string = null;
 * }
 * ```
 */
export default class Cluster extends SvelteComponentTyped<ClusterProps, ClusterEvents, ClusterSlots> {
}
export {};
