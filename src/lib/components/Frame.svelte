

<script lang='ts'>

	/** Optional class name to enable scoped styling of each component instance */
	export let wrapperClass: string = null

  /** The desired aspect ratio */
  export let ratio = `1:1`

</script>

<!-- 
  @component
  Frame for cropping images to a desired aspect ratio
  ```typescript
  props: {
    wrapperClass?: string = null;
    ratio?: string = '1:1';
  }
  ``` 
-->

<div
	class={wrapperClass ? `frame ${wrapperClass}` : 'frame'}
  style:--numerator={ratio.split(`:`)[0]}
  style:--denominator={ratio.split(`:`)[1]}
>
  <slot />
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
