<script lang="ts">
  import ProductOrder from '../../../lib/Components/ProductOrder/ProductOrder.svelte';
  import { GroupLatestProducts } from '../../../constants/home';
  import { GroupProductValues, type TGroupProductItem } from '../../../types/home';
  export let lastedProduct: any[] = [];
  export let topRateProduct: any[] = [];
  export let reviewedProduct: any[] = [];

  const lastedProductList = (title: string): TGroupProductItem[] => {
    switch (title) {
      case GroupProductValues.LATEST_PRODUCTS:
        return buildListItem(lastedProduct)
      case GroupProductValues.TOP_RATED_PRODUCTS:
        return buildListItem(topRateProduct)
      default:
        return buildListItem(reviewedProduct)
    }
    
  };

  const buildListItem = (list: any) => list.map((item: any) => ({
    image: item.list_img[0].url,
    title: item.name,
    price: item.price,
  }));
  
  const groupItemList = GroupLatestProducts.map((item) => {
    return {
      title: item,
      productList: lastedProductList(item)
    };
  });
</script>

<section class="latest-product spad">
  <div class="container">
    <div class="row">
      {#each groupItemList as item (item.title)}
        <div class="col-lg-4 col-md-6">
          <ProductOrder title="{item.title}" productList={item.productList} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .latest-product {
    padding-top: 80px;
    padding-bottom: 0;
  }
</style>
