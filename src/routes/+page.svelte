<script>
  import GroupProducts from '../lib/Home/GroupProducts/GroupProducts.svelte';
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import Categories from '../lib/Home/Categories/Categories.svelte';
  import Banner from "../lib/Banner.svelte";

  export let data;
</script>

<Banner/>
<Categories />
<FeaturedProducts />
<GroupProducts />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
