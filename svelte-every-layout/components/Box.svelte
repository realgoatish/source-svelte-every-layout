

<script>/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** Light color for the Box's CSS 'background-color' property. Becomes its CSS 'color' property if the 'invert' prop is set to true */
export let colorLight = null;
/** Dark color for the Box's CSS 'color' property. Becomes its CSS 'background-color' property if the 'invert' prop is set to true */
export let colorDark = null;
/** A CSS padding value */
export let padding = null;
/** A CSS border-width value */
export let borderWidth = null;
/** Inverts the Box's CSS 'color' & 'background-color' properties */
export let invert = false;
</script>

<!-- 
  @component
  Create basic, two-tone boxes
  ```typescript
  props: {
    wrapperClass?: string = null;
    colorLight?: string = null;
    colorDark?: string = null;
    padding?: string = null;
    borderWidth?: string = null;
    invert?: boolean = false
  }
  ``` 
-->

<div
	class={wrapperClass ? `box ${wrapperClass}` : 'box'}
  style:--padding={padding ? padding : '0'}
  style:--border-thin={borderWidth ? borderWidth : null}
  style:--color-light={colorLight ? colorLight : null}
  style:--color-dark={colorDark ? colorDark : null}
  style:border={borderWidth ? `${borderWidth} solid` : 'none'}
  style:outline={borderWidth ? null : `var(--border-thin, var(--s-4)) solid transparent`}
  style:outline-offset={borderWidth ? null : `calc(var(--border-thin, var(--s-4)) * -1)`}
	class:invert
>
	<slot />
</div>

<style>

  .box {
    padding: var(--padding);
    color: var(--color-dark, #000);
    background-color: var(--color-light, #fff);
  }

  .box * {
    color: inherit;
  }

  .box.invert {
    color: var(--color-light, #fff);
    background-color: var(--color-dark, #000);
  }

</style>
