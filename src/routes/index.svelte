<script>
  import { Center } from '$prod/index'

  import Box from '$lib/components/Box.svelte'
</script>

<Center wrapperClass={1} andText={true}>
  <Box colorLight={1}>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  </Box>

</Center>

<style>
  :global(.center) {
    --measure: 25ch;
  }
</style>