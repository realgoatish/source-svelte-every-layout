

<script>/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** choose the parent element for this component's slot contents:
 *  - ul
 *  - ol
 *  - dl
 *  - div
 */
export let wrapperElement;
/** A CSS `justify-content` value */
export let justify = `flex-start`;
// TODO change default value to `center`
/** A CSS `align-items` value */
export let align = `flex-start`;
/** A CSS `gap` value. The minimum space between the clustered child elements. */
export let space = null;
</script>

<!-- 
  @component
    A cluster of elements with equal spacing. Good for navigation links, social media icons, etc.
  ```typescript
  props: {
    wrapperClass?: string = null;
    wrapperElement?: string;
    justify?: string = 'flex-start';
    align?: string = 'flex-start';
    space?: string = null;
  }
  ``` 
-->

<svelte:element this={wrapperElement} class={wrapperClass ? `cluster ${wrapperClass}` : 'cluster'}
  style:--space={space ? space : null}
  style:--justify={justify}
  style:--align={align}
>
  <slot />
</svelte:element>

<style>
	/* 
    Exposed as CSS variables:
      --space
  */

	.cluster {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space, 1rem);
		justify-content: var(--justify);
		align-items: var(--align);
	}

	.cluster :global(ul),
	.cluster :global(ol),
	.cluster :global(dl) {
		list-style: none;
	}
</style>
