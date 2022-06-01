import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** `div#instructions` will always be present for screen readers via `div#reel`'s `aria-describedby="instructions"` attribute. Set this prop to `true` if you want to display those instructions as a visual aid for users on hover, on focus, and for touch users */ visualInstructions?: boolean;
        /** The width of each item (child element) in the Reel */ itemWidth?: string;
        /** The space between Reel items (child elements) */ space?: string;
        /** The height of the Reel itself */ height?: string;
        /** A CSS color value for the scrollbar */ thumbColor?: string;
        /** A CSS color value for the scroll track */ trackColor?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ReelProps = typeof __propDef.props;
export declare type ReelEvents = typeof __propDef.events;
export declare type ReelSlots = typeof __propDef.slots;
/**
 * A section of horizontally-scrollable content
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   visualInstructions?: boolean = false;
 *   itemWidth?: string = `auto`;
 *   space?: string = null;
 *   height?: string = `auto`;
 *   thumbColor?: string = null;
 *   trackColor?: string = null;
 * }
 * ```
 */
export default class Reel extends SvelteComponentTyped<ReelProps, ReelEvents, ReelSlots> {
}
export {};
