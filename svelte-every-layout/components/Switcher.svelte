

<script>/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** Choose the parent element for this component's slot contents:
 *  - ul
 *  - ol
 *  - dl
 *  - div
 */
export let wrapperElement;
/** A CSS `width` value (representing the `container breakpoint`) */
export let threshold;
/** A CSS `margin` value */
export let space = null;
/** A number representing the maximum number of items permitted for a horizontal layout */
export let limit = 4;
</script>

<!-- 
  @component
  Switch between horizontal & vertical layout at a given, container-based breakpoint
  ```typescript
  props: {
    wrapperClass?: string = null;
    wrapperElement: string;
    threshold: string;
    space?: string = null;
    limit?: number = 4
  }
  ``` 
-->


{#if wrapperElement === 'ul'}
	<ul class={wrapperClass ? `switcher ${wrapperClass}` : 'switcher'}
    style:--threshold={threshold}
    style:--space={space ? space : null}
  >
  {@html `<style>
    .switcher > :nth-last-child(n+ ${limit + 1}) {
      flex-basis: 100%;
    }
    </style>`}
		<slot />
	</ul>
{:else if wrapperElement === 'ol'}
	<ol class={wrapperClass ? `switcher ${wrapperClass}` : 'switcher'}
    style:--threshold={threshold}
    style:--space={space ? space : null}
  >
  {@html `<style>
    .switcher > :nth-last-child(n+ ${limit + 1}) {
      flex-basis: 100%;
    }
    </style>`}
		<slot />
	</ol>
{:else if wrapperElement === 'dl'}
	<dl class={wrapperClass ? `switcher ${wrapperClass}` : 'switcher'}
    style:--threshold={threshold}
    style:--space={space ? space : null}
  >
  {@html `<style>
    .switcher > :nth-last-child(n+ ${limit + 1}) {
      flex-basis: 100%;
    }
    </style>`}
		<slot />
	</dl>
{:else if wrapperElement === 'div'}
	<!-- each slotted child element for the Switcher requires a <div> wrapper -->
	<div class={wrapperClass ? `switcher ${wrapperClass}` : 'switcher'}
    style:--threshold={threshold}
    style:--space={space ? space : null}
  >
  {@html `<style>
    .switcher > :nth-last-child(n+${limit + 1}) {
      flex-basis: 100%;
    }
    </style>`}
		<slot />
	</div>
{/if}

<style>
	/* Exposed as CSS variables:
      --space
      --threshold => the container width at which the component switches between a 
          horizontal & vertical layout
  */

	.switcher {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space, 1rem);
	}

	.switcher > :global(*) {
		flex-grow: 1;
		flex-basis: calc((var(--threshold, 30rem) - 100%) * 999);
	}

	ul,
	ol,
	dl {
		list-style: none;
	}
</style>
