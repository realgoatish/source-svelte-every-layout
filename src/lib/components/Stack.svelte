

<script lang='ts'>

	/** Optional class name to enable scoped styling of each component instance */
  export let wrapperClass: string = null

  /** A CSS `margin` value. */
  export let space: string = null

</script>

<!-- 
  @component
  Evenly-spaced child elements stacked vertically
  ```typescript
  props: {
    wrapperClass?: string = null;
    space?: string = null;
  }
  ``` 
-->

<div class={wrapperClass 
  ? `stack ${wrapperClass}` 
  : 'stack'} 
  style:--space={space ? space : null}
>
  <slot />
</div>

<style>
	/* 
    Exposed as CSS variables:
      --space
  */

  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start
  }

  .stack > :global(*) {
    margin-block: 0;
  }

  .stack > :global(* + *) {
    margin-block-start: var(--space, 1rem);
  }

</style>
