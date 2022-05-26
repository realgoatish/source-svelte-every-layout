<script lang='ts'>
  import Center from '$lib/Center.svelte'
</script>

<Center wrapperClass="yes">
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Center>

<style>
  :global(.center) {
    --measure: 25ch;
  }
</style>