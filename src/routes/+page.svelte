<script>
  import Home from './home/+page.svelte';
  export let data;
</script>

<Home featuredProductList={data.featuredProductList} lastedProduct={data.lastedProduct} topRateProduct={data.topRateProduct} reviewedProduct={data.reviewedProduct}/>

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
