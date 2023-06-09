<script>
  import GroupProducts from '../lib/Home/GroupProducts/GroupProducts.svelte';
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import Categories from '../lib/Home/Categories/Categories.svelte';
  import Timer from '../lib/Components/Timer/Timer.svelte';
  export let data;
</script>

<h1>Main content</h1>
<p>name: {data.name}</p>
<p>email: {data.email}</p>
<Timer />
<Categories />
<FeaturedProducts />
<GroupProducts />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
