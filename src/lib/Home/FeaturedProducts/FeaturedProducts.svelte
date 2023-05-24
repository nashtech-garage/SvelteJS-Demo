<script lang="ts">
  import { browser } from '$app/environment';
  import { afterUpdate, onMount } from 'svelte';
  import FeaturedProductItem from './ProductItem.svelte';
  import {
    type TFeaturedProductItem,
    ControlKeys,
    FeaturedControls,
    MixedTypesValues
  } from '../../../types/featuredProduct';

  const itemGenerator = (number: number = 0): TFeaturedProductItem[] => {
    const newArray = new Array(number);
    return [...newArray].map((_, index) => {
      const order = index + 1;
      return {
        image: `./images/FeaturedProducts/feature-${order}.jpg`,
        title: `${order}`,
        price: 30
      };
    });
  };

  /**
   * Constants
   */
  const featuredControls = [
    { key: ControlKeys.ALL, value: FeaturedControls[ControlKeys.ALL] },
    { key: ControlKeys.ORANGES, value: FeaturedControls[ControlKeys.ORANGES] },
    { key: ControlKeys.FRESH_MEAT, value: FeaturedControls[ControlKeys.FRESH_MEAT] },
    { key: ControlKeys.VEGETABLES, value: FeaturedControls[ControlKeys.VEGETABLES] },
    { key: ControlKeys.FAST_FOOD, value: FeaturedControls[ControlKeys.FAST_FOOD] }
  ];
  const mixedTypes = [
    MixedTypesValues.ORANGES_MIX_FRESH_MEAT,
    MixedTypesValues.VEGETABLES_MIX_FAST_FOOD,
    MixedTypesValues.VEGETABLES_MIX_FRESH_MEAT,
    MixedTypesValues.FAST_FOOD_MIX_ORANGES,
    MixedTypesValues.FRESH_MEAT_MIX_VEGETABLES,
    MixedTypesValues.ORANGES_MIX_FAST_FOOD,
    MixedTypesValues.FRESH_MEAT_MIX_VEGETABLES,
    MixedTypesValues.FAST_FOOD_MIX_VEGETABLES
  ];

  /**
   * Variables
   */
  let mixer: any;
  let tab = ControlKeys.ALL;
  let featuredProductList: TFeaturedProductItem[] = itemGenerator(8);

  const handleChangeTab = (selectedTab = ControlKeys.ALL): void => {
    tab = selectedTab;
  };

  /**
   * Lifecycle
   */
  onMount(() => {
    if (browser) {
      mixer = window.mixitup('.featured__filter');
    }
  });

  afterUpdate(() => {
    const dataFilter = `${tab !== '*' ? '.' : ''}${tab}`;
    mixer.filter(dataFilter);
  });
</script>

<section class="featured spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>Featured Products</h2>
        </div>
        <div class="featured__controls">
          <ul>
            {#each featuredControls as { key, value }}
              {#if key === tab}
                <li class="active mixitup-control-active" data-filter="{key}">{value}</li>
              {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li data-filter=".{key}" class="" on:click="{() => handleChangeTab(key)}">
                  {value}
                </li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div class="row featured__filter" id="MixItUp" style="">
      <!-- 8 items/products -->
      {#each mixedTypes as item, index}
        <div class="col-lg-3 col-md-4 col-sm-6 {item}" style="">
          <FeaturedProductItem itemData="{featuredProductList[index]}" />
        </div>
      {/each}
    </div>
  </div>
</section>
