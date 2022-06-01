

<script>import { intersectionObserver } from '../actions/index.js';
/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** Set to 'true' for image lazyloading */
export let lazy = false;
/** The desired aspect ratio */
export let ratio = `1:1`;
let intersecting = false;
const setIntersecting = () => {
    intersecting = true;
};
</script>

<!-- 
  @component
  Frame for cropping images to a desired aspect ratio
  ```typescript
  props: {
    wrapperClass?: string = null;
    lazy?: boolean = false;
    ratio?: string = '1:1';
  }
  ``` 
-->

<div
	use:intersectionObserver={{ once: true, options: { rootMargin: '0px' } }}
	on:intersection={setIntersecting}
	class={wrapperClass ? `frame ${wrapperClass}` : 'frame'}
  style:--numerator={ratio.split(`:`)[0]}
  style:--denominator={ratio.split(`:`)[1]}
>
	<noscript>
		<slot />
	</noscript>
	{#if lazy && intersecting}
		<slot />
	{:else if !lazy}
		<slot />
	{/if}
</div>

<style>
	/* 
    Exposed as CSS variables:
      --numerator
      --denominator
  */

	.frame {
		padding-bottom: calc(var(--numerator, 1) / var(--denominator, 1) * 100%);
		position: relative;
	}

	/* 
  for cropping non - <img> or <video> direct children 
  */
	.frame > :global(*) {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.frame > :global(noscript) {
		overflow: visible;
	}

	/* 
  for cropping <img> or <video> children of .frame
  */
	.frame > :global(img),
	.frame > :global(noscript > img),
	.frame > :global(video),
	.frame > :global(noscript > video) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
