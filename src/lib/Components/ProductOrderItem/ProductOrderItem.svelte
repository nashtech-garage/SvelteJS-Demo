<script lang="ts">
  import type { TGroupProductItem } from '../../../types/home';

  type $$Props = {
    itemData: TGroupProductItem;
  };
  export let itemData: TGroupProductItem;
</script>

<a href="#" class="latest-product__item">
  <div class="latest-product__item__pic">
    <img src="{itemData.image}" alt="" />
  </div>
  <div class="latest-product__item__text">
    <h6>{itemData.title}</h6>
    <span>${itemData.price.toFixed(2)}</span>
  </div>
</a>

<style lang="scss">
  a {
    text-decoration: none;
  }
  .latest-product__item {
    margin-bottom: 20px;
    overflow: hidden;
    display: block;
  }

  .latest-product__item__pic {
    float: left;
    margin-right: 26px;

    img {
      height: 110px;
      width: 110px;
    }
  }

  .latest-product__item__text {
    overflow: hidden;
    padding-top: 10px;

    h6 {
      color: $heading-color-2;
      margin-bottom: 8px;
      font-weight: 400;
    }

    span {
      font-size: 18px;
      display: block;
      color: $heading-color-2;
      font-weight: 700;
    }
  }
</style>
