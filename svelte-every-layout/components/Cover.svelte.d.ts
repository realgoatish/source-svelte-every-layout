import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** The minimum spacing between & around all of the child elements */ space?: string;
        /** The minimum height of the Cover, before it grows to the height of its content */ minHeight?: string;
        /** Whether child elements should have padding */ noPad?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        featured: {};
        footer: {};
    };
};
export declare type CoverProps = typeof __propDef.props;
export declare type CoverEvents = typeof __propDef.events;
export declare type CoverSlots = typeof __propDef.slots;
/**
 * Cover can have 3 direct children:
 * 1. `slot="header"` - content pinned to the top of Cover
 * 2. `slot="featured"` - vertically-centered content
 * 3. `slot="footer"` - content pinned to the bottom of Cover
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   space?: string = null;
 *   minHeight?: string = '100vh';
 *   noPad?: boolean = false;
 * }
 * ```
 */
export default class Cover extends SvelteComponentTyped<CoverProps, CoverEvents, CoverSlots> {
}
export {};
