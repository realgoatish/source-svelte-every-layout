

<script lang='ts'>
	/** Optional class name to enable scoped styling of each component instance */
	export let wrapperClass: string = null
  
	/** Which element to treat as the sidebar (all values but "left" are considered "right") */
	export let side: string = "left"

  /** Represents the width of the sidebar when adjacent. If not set (null), it defaults to the sidebar's content width */
  export let sideWidth: string = null

  /** A CSS percentage value. The minimum width of the content element in the horizontal configuration */
  export let contentMin: string = "50%"

  /** A CSS margin value representing the spacing between the two elements */
  export let space: string = null

</script>


<!-- 
  @component
  A sidebar & main content area, which stack on smaller screens
  ```typescript
  props: {
    wrapperClass?: string = null;
    side?: string = "left"
    sideWidth?: string = null;
    contentMin?: string = "50%";
    space?: string = null;

  }
  ``` 
-->

<div class={wrapperClass ? `with-sidebar ${wrapperClass}` : `with-sidebar`}
  style:--space={space ? space : null}
>
	<div
    style:flex-grow={side === `left` ? `1` : `999`}
    style:flex-basis={side === `left` ? sideWidth : `0`}
    style:min-inline-size={side === `left` ? null : contentMin}
  >
		<slot name="first-child" />
	</div>
	<div
    style:flex-grow={side !== `left` ? `1` : `999`}
    style:flex-basis={side !== `left` ? sideWidth : `0`}
    style:min-inline-size={side !== `left` ? null : contentMin}
  >
		<slot name="last-child" />
	</div>
</div>

<style>
	/* Properties exposed as CSS variables:
      --space
  */

  .with-sidebar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, 1rem);
  }

</style>
