<script lang='ts'>
  // import Center from '$prod/components/Center.svelte'
  // import Cluster from '$prod/components/Cluster.svelte'
  // import Box from '$prod/components/Box.svelte'
  import Center from '$lib/components/Center.svelte'
  import Grid from '$lib/components/Grid.svelte'
  import Box from '$lib/components/Box.svelte'
  import Frame from '$lib/components/Frame.svelte'

</script>

<Frame ratio={'16:9'} wrapperClass="yes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
</Frame>

<!-- <Center max="20rem" intrinsic> -->
  <div>
    <Grid wrapperElement="ul" min="650px">
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
      <Box colorLight={"pink"}>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
      </Box>
    </Grid>

  </div>


<!-- </Center> -->

<style>
  div {
    width: 100%;
  }
</style>