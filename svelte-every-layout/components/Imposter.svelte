
<script>/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** Allow horizontal scrolling within the modal. Use this with the `margin` prop */
export let contain = false;
/** Whether to position the element relative to the viewport */
export let fixed = false;
/** Minimum space between the element and the inside edges of the positioning container over which it is placed. Use this with the `contain` prop.  */
export let margin = "0";
// TODO explain this better
/** Due to a11y requirements for DOM manipulation, we have to expose a reference to the Imposter's wrapper div so it can be manipulated from parent components */
export let imposterWrapperDiv;
</script>

<!-- 
  @component
  Needs to be wrapped in a `position: relative` parent
  ```typescript
  props: {
    wrapperClass?: string = null;
    contain?: boolean = false;
    fixed?: boolean = false;
    margin?: string = "0";
    imposterWrapperDiv: HTMLDivElement;
  }
  ``` 
-->

<div
	bind:this={imposterWrapperDiv}
	class={wrapperClass ? `imposter ${wrapperClass}` : 'imposter'}
  style:--margin={margin}
	class:contain
	class:fixed
>
	<slot />
</div>

<style>

	.imposter {
		position: absolute;
		inset-block-start: 50%;
		inset-inline-start: 50%;
		transform: translate(-50%, -50%);
	}

	.fixed {
		position: fixed;
	}

	.contain {
		overflow: auto;
		max-inline-size: calc(100% - (var(--margin) * 2));
		max-block-size: calc(100% - (var(--margin) * 2));
	}
</style>
