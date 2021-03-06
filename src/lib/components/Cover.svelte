

<script lang='ts'>

	/** Optional class name to enable scoped styling of each component instance */
	export let wrapperClass: string = null

  /** The minimum spacing between & around all of the child elements */
  export let space: string = "var(--s1)"

  /** The minimum height of the Cover, before it grows to the height of its content */
  export let minHeight: string = "100vh"

  /** Whether the spacing is also applied as padding to the container element */
  export let noPad: boolean = false
</script>

<!-- 
  @component
  Cover can have 3 direct children:
  1. `slot="header"` - content pinned to the top of Cover
  2. `slot="featured"` - vertically-centered content
  3. `slot="footer"` - content pinned to the bottom of Cover
  ```typescript
  props: {
    wrapperClass?: string = null;
    space?: string = "var(--s1)";
    minHeight?: string = '100vh';
    noPad?: boolean = false;
  }
  ``` 
-->

<div class={wrapperClass ? `cover ${wrapperClass}` : 'cover'}
  style:--space={space ? space : null}
  style:padding={noPad ? null : space}
  style:min-block-size={minHeight}
>
  {#if $$slots.header}
    <div class="header">
      <slot name="header" />
    </div>
  {/if}
  {#if $$slots.featured}
    <div class="featured">
      <slot name="featured" />
    </div>
  {/if}
  {#if $$slots.footer}
    <div class="footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style>
	/* Exposed CSS variables:
      --space
  */

  .cover {
    display: flex;
    flex-direction: column;
  }

  .cover > :global(*) {
    margin-block: var(--space, 1rem);
  }

  .cover > :first-child:not(.featured) {
    margin-block-start: 0;
  }

  .cover > :last-child:not(.featured) {
    margin-block-end: 0;
  }

  .cover > .featured {
    margin-block: auto;
  }
</style>
