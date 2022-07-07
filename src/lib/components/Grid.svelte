
<script lang='ts'>

	/** Optional class name to enable scoped styling of each component instance */
	export let wrapperClass: string = null

	/** Choose the parent element for this component's slot contents:
	 *  - ul
	 *  - ol
	 *  - dl
	 *  - div
	 */
	export let wrapperElement: string

  /** A CSS length value representing `x` in `minmax(min(x, 100%), 1fr) */
  export let min: string = "250px"

  /** The space between grid cells */
  export let space: string = null

</script>

<!-- 
  @component
  Grid layout for e.g. cards
  ```typescript
  props: {
    wrapperClass?: string = null;
    wrapperElement: string;
    min?: string = "250px";
    space?: string = null;
  }
  ``` 
-->

<svelte:element this={wrapperElement} class={wrapperClass ? `grid ${wrapperClass}` : 'grid'}
  style:--space={space ? space : null}
  style:--min={min}
>
  <slot />
</svelte:element>

<!-- {#if wrapperElement === 'ul'}
	<ul class={wrapperClass ? `grid ${wrapperClass}` : 'grid'}
    style:--space={space ? space : null}
    style:--min={min}
  >
		<slot />
	</ul>
{:else if wrapperElement === 'ol'}
	<ol class={wrapperClass ? `grid ${wrapperClass}` : 'grid'}
    style:--space={space ? space : null}
    style:--min={min}
  >
		<slot />
	</ol>
{:else if wrapperElement === 'dl'}
	<dl class={wrapperClass ? `grid ${wrapperClass}` : 'grid'}
    style:--space={space ? space : null}
    style:--min={min}
  >
		<slot />
	</dl>
{:else if wrapperElement === 'div'}
	<div class={wrapperClass ? `grid ${wrapperClass}` : 'grid'}
    style:--space={space ? space : null}
    style:--min={min}
  >
		<slot />
	</div>
{/if} -->

<style>

  /* 
    Exposed as CSS variables:
      --space
      --min
  */
	.grid {
		display: grid;
		grid-gap: var(--space, 1rem);
	}

  /* TODO - :global these */
	ul,
	ol,
	dl {
		list-style: none;
	}

	@supports (width: min(var(--min), 100%)) {
		.grid {
			grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
		}
	}
</style>
