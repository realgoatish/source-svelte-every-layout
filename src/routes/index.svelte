<script lang='ts'>
  import Center from '$prod/components/Center.svelte'
  import Sidebar from '$prod/components/Sidebar.svelte'
  import Box from '$prod/components/Box.svelte'
</script>

<Center wrapperClass={"yes"} andText={true} >
  <Box colorLight={1} invert>
    <Sidebar sideWidth={undefined}>
      <h1>Welcome to SvelteKit</h1>
      <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </Sidebar>

  </Box>

</Center>

<style>
  :global(.center) {
    --measure: 25ch;
  }
</style>