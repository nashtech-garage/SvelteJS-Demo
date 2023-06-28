<script lang="ts">
  import GroupProducts from '../../lib/Home/GroupProducts/GroupProducts.svelte';
  import FeaturedProducts from '../../lib/Home/FeaturedProducts/FeaturedProducts.svelte';
  import HomeBanner from '../../lib/Home/Banner/Banner.svelte';
  import FlashSale from '../../lib/Home/FlashSale/FlashSale.svelte';
  export let featuredProductList: any[] = [];
  export let lastedProduct: any[] = [];
  export let topRateProduct: any[] = [];
  export let reviewedProduct: any[] = [];

</script>

<FlashSale countdown="{5}" callback="{() => {}}" />
<!-- <FlashSale countdown="{10}" callback="{() => console.log('done 2')}" />
<FlashSale countdown="{15}" callback="{() => console.log('done 3')}" />
<FlashSale countdown="{1000}" callback="{() => console.log('done 4')}" />
<FlashSale countdown="{10000}" callback="{() => console.log('done 5')}" /> -->
<FeaturedProducts featuredProductList={featuredProductList} />
<HomeBanner />
<GroupProducts lastedProduct={lastedProduct} topRateProduct={topRateProduct} reviewedProduct={reviewedProduct}/>

<style lang="scss">
</style>
