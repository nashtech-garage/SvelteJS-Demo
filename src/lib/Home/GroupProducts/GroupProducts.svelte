<script lang="ts">
  import ProductOrder from '../../../lib/Components/ProductOrder/ProductOrder.svelte';
  import { GroupLatestProducts } from '../../../constants/home';
  import type { TGroupProductItem } from '../../../types/home';
  const itemGenerator = (): TGroupProductItem[] => {
    const newArray = [1, 2, 3, 1, 2, 3];
    return [...newArray].map((number, index) => {
      const order = index + 1;
      return {
        image: `./images/LatestProducts/lp-${number}.jpg`,
        title: `${order}`,
        price: 30
      };
    });
  };
  const LatestList = GroupLatestProducts.map((item) => {
    return {
      title: item,
      productList: itemGenerator()
    };
  });
</script>

<section class="latest-product spad">
  <div class="container">
    <div class="row">
      {#each LatestList as item (item.title)}
        <div class="col-lg-4 col-md-6">
          <ProductOrder title="{item.title}" productList="{item.productList}" />
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
