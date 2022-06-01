import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** Which element to treat as the sidebar (all values but "left" are considered "right") */ side?: string;
        /** Represents the width of the sidebar when adjacent. If not set (null), it defaults to the sidebar's content width */ sideWidth?: string;
        /** A CSS percentage value. The minimum width of the content element in the horizontal configuration */ contentMin?: string;
        /** A CSS margin value representing the spacing between the two elements */ space?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'first-child': {};
        'last-child': {};
    };
};
export declare type SidebarProps = typeof __propDef.props;
export declare type SidebarEvents = typeof __propDef.events;
export declare type SidebarSlots = typeof __propDef.slots;
/**
 * A sidebar & main content area, which stack on smaller screens
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   side?: string = "left"
 *   sideWidth?: string = null;
 *   contentMin?: string = "50%";
 *   space?: string = null;
 *
 * }
 * ```
 */
export default class Sidebar extends SvelteComponentTyped<SidebarProps, SidebarEvents, SidebarSlots> {
}
export {};
