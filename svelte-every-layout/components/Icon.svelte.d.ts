import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Optional class name to enable scoped styling of each component instance */ wrapperClass?: string;
        /** A CSS `id` selector for the icon you want to pull from the sprite */ iconId: string;
        /** Including this prop will represent the enclosing span as an image with role="img" and aria-label={label}. This prop is used when there is no accompanying visible label text slotted into the component, in order to ensure that it has an accessible name. */ ariaLabel?: string;
        /** For decorative SVGs that don't convey information to the user, use this attribute to make the SVG invisible to screen readers */ ariaHidden?: boolean;
        /** The space between the text and the icon. If null, natural word spacing is preserved */ space?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
/**
 * SVG icons with a text label or an aria-label
 * ```typescript
 * props: {
 *   wrapperClass?: string = null;
 *   iconId: string;
 *   ariaLabel?: string = null;
 *   ariaHidden?: boolean = false;
 *   space?: string = null;
 * }
 * ```
 */
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
