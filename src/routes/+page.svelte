<script>
  import GroupProducts from '../lib/Home/GroupProducts/GroupProducts.svelte';
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import Categories from '../lib/Home/Categories/Categories.svelte';
  export let data;
</script>

<h1>Main content</h1>
<p>name: {data.name}</p>
<p>email: {data.email}</p>
<Categories />
<FeaturedProducts />
<GroupProducts />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
