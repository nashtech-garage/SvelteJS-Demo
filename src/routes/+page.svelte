<script>
  import Banner from '../lib/Banner.svelte';
  import Home from './home/+page.svelte';
  export let data;
</script>

<Home />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
