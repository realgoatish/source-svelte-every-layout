
<script>

	/** 
   * optional class name to enable scoped styling of each component instance
   * @type {string} 
  */
	export let wrapperClass

  /** 
   * A CSS max-width value
   * @type {string} 
  */
  export let max = "var(--measure)"

  /** 
   * Center align the text too (text-align: center)
   * @type {!boolean} 
  */
  export let andText = false

  /** 
   * the minimum space on either side of the content
   * @type {string} 
  */
  export let gutters = ''

  /** 
   * center child elements based on their content width
   * @type {!boolean} 
  */
  export let intrinsic = false

</script>

<!--
  @component
  Center content with a maximum width
  ```typescript
  // optional class name to enable scoped styling of each component instance
  wrapperClass: string
  // A CSS max-width value
  max: string
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
	/* 
    Exposed as CSS variables:
      --measure
  */

  .center {
    box-sizing: content-box;
    margin-inline: auto;
  }

</style>
