
<script>/** Optional class name to enable scoped styling of each component instance */
export let wrapperClass = null;
/** A CSS max-width value */
export let max;
/** Center align the text too (text-align: center) */
export let andText = false;
/** The minimum space on either side of the content */
export let gutters = null;
/** Center child elements based on their content width */
export let intrinsic = false;
</script>

<!-- 
  @component
  Center content with a maximum width
  ```typescript
  props: {
    wrapperClass?: string = null;
    max: string;
    andText?: boolean = false;
    gutters?: string = null;
    intrinsic?: boolean = false;
  }
  ``` 
-->


<div class={wrapperClass ? `center ${wrapperClass}` : 'center'} 
  style:max-inline-size={max} 
  style:text-align={andText ? 'center' : null}
  style:padding-inline-start={gutters ? gutters : null}
  style:padding-inline-end={gutters ? gutters : null}
  style:display={intrinsic ? 'flex' : null}
  style:flex-direction={intrinsic ? 'column' : null}
  style:align-items={intrinsic ? 'center' : null}
>
	<slot />
</div>

<style>

  .center {
    box-sizing: content-box;
    margin-inline: auto;
  }

</style>
