<script>
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import Categories from '../lib/Home/Categories/Categories.svelte';
  export let data;
</script>

<h1>Main content</h1>
<p>name: {data.name}</p>
<p>email: {data.email}</p>
<Categories />
<FeaturedProducts />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
