<script>
  import Center from '$lib/components/Center.svelte'
  import Box from '$lib/components/Box.svelte'
</script>

<Center andText={true}>
  <Box colorLight="pink">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  </Box>

</Center>

<style>
  :global(.center) {
    --measure: 25ch;
  }
</style>