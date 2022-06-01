

<script lang='ts'>

	/** Optional class name to enable scoped styling of each component instance */
	export let wrapperClass: string = null

	/** choose the parent element for this component's slot contents:
	 *  - ul
	 *  - ol
	 *  - dl
	 *  - div
	 */
	export let wrapperElement: string

  /** A CSS `justify-content` value */
  export let justify: string = `flex-start`

  /** A CSS `align-items` value */
  export let align: string = `flex-start`

  /** A CSS `gap` value. The minimum space between the clustered child elements. */
  export let space: string = null

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

{#if wrapperElement === 'ul'}
	<ul class={wrapperClass ? `cluster ${wrapperClass}` : 'cluster'}
    style:--space={space ? space : null}
    style:--justify={justify}
    style:--align={align}
  >
		<slot />
	</ul>
{:else if wrapperElement === 'ol'}
	<ol class={wrapperClass ? `cluster ${wrapperClass}` : 'cluster'}
    style:--space={space ? space : null}
    style:--justify={justify}
    style:--align={align}
  >
		<slot />
	</ol>
{:else if wrapperElement === 'dl'}
	<dl class={wrapperClass ? `cluster ${wrapperClass}` : 'cluster'}
    style:--space={space ? space : null}
    style:--justify={justify}
    style:--align={align}
  >
		<slot />
	</dl>
{:else if wrapperElement === 'div'}
	<div class={wrapperClass ? `cluster ${wrapperClass}` : 'cluster'}
    style:--space={space ? space : null}
    style:--justify={justify}
    style:--align={align}
  >
		<slot />
	</div>
{/if}

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

	ul,
	ol,
	dl {
		list-style: none;
	}
</style>
