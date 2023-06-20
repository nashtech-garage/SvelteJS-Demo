<script>
  import Home from './home/+page.svelte';
  export let data;
</script>

<Home featuredProductList={data.featuredProductList}/>

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
