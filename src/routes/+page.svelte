<script>
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  export let data;
</script>

<h1>Main content</h1>
<p>name: {data.name}</p>
<p>email: {data.email}</p>
<FeaturedProducts />

<style lang="scss">
  h1 {
    color: $red;
  }
</style>
