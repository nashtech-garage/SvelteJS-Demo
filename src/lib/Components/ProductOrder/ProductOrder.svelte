<script lang="ts">
  import ProductOrderItem from '../../../lib/Components/ProductOrderItem/ProductOrderItem.svelte';
  import type { TGroupProductItem } from '../../../types/home';
  import { sliceIntoChunks } from '../../../utils';
  import Carousel from '../../Components/Carousel/Carousel.svelte';
  import type Siema from 'siema';
  type $$Props = {
    chunkSize?: number;
    title: string;
    productList: TGroupProductItem[];
  };
  let controller: Siema;
  export let title: string = '';
  export let chunkSize: number = 3;
  export let productList: TGroupProductItem[] = [];
  $: chunkedList = sliceIntoChunks(productList, chunkSize);
  const handleGetController = (event: CustomEvent) => {
    controller = event.detail.controller;
  };

  const left = (): void => {
    controller.prev();
  };

  const right = (): void => {
    controller.next();
  };
</script>

<div class="latest-product__text">
  <!-- Latest Products -->
  <div class="latest-header">
    <h4>{title}</h4>
    <div>
      <button class="left" on:click="{left}" aria-label="left">
        <i class="fa fa-angle-left"></i>
      </button>
      <button class="right" on:click="{right}" aria-label="right">
        <i class="fa fa-angle-right"></i>
      </button>
    </div>
  </div>
  <Carousel
    on:useController="{handleGetController}"
    autoplay="{5000}"
    perPage="{1}"
    controls="{false}"
  >
    {#each chunkedList as chunkedItem}
      <div class="latest-product__slider__item">
        {#each chunkedItem as item}
          <ProductOrderItem itemData="{item}" />
        {/each}
      </div>
    {/each}
  </Carousel>
</div>

<style lang="scss">
  .latest-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
    margin-bottom: 45px;
    h4 {
      color: #1c1c1c;
      font-weight: 700;
      font-family: Cairo, sans-serif;
    }
    button {
      height: 30px;
      width: 30px;
      background: #f3f6fa;
      border: 1px solid #e6e6e6;
      font-size: 14px;
      color: #636363;
      margin-right: 10px;
      line-height: 30px;
      text-align: center;
    }
  }
  .latest-product__slider {
    button {
      height: 30px;
      width: 30px;
      background: #f3f6fa;
      border: 1px solid #e6e6e6;
      font-size: 14px;
      color: #636363;
      margin-right: 10px;
      line-height: 30px;
      text-align: center;

      span {
        font-weight: 700;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
