<script>
  import GroupProducts from '../lib/Home/GroupProducts/GroupProducts.svelte';
  import FeaturedProducts from '../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import Categories from '../lib/Home/Categories/Categories.svelte';
  import Banner from '../lib/Banner.svelte';
  import FlashSale from '../lib/Home/FlashSale/FlashSale.svelte';
  export let data;
</script>

<Banner />

<h1>Main content</h1>
<p>name: {data.name}</p>
<p>email: {data.email}</p>
<FlashSale countdown="{10}" callback="{() => console.log('done 1')}" />
<FlashSale countdown="{100}" callback="{() => console.log('done 2')}" />
<FlashSale countdown="{1000}" callback="{() => console.log('done 3')}" />
<FlashSale countdown="{10000}" callback="{() => console.log('done 4')}" />
<FeaturedProducts />
<GroupProducts />

<style lang="scss">
  h1 {
    color: $white;
  }
</style>
