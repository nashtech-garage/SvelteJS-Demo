<script lang="ts">
  import FeaturedProductItem from './ProductItem/ProductItem.svelte';
  import { flip } from 'svelte/animate';
  import { fade, scale } from 'svelte/transition';
  import { type TFeaturedProductItem, ControlKeys } from '../../../types/home';
  import { featuredControls, mixedTypes } from '../../../constants/home';
  export let featuredProductList: any[] = [];
  
  const itemGenerator = (): TFeaturedProductItem[] => (
    featuredProductList.map((item: any) => (
       {
        image: item.list_img[0].url,
        title: item.name,
        price: item.price,
        mixedTypes: item && item .category ? item.category.name : mixedTypes[0]
      })
    ));
  let tab = ControlKeys.ALL;
  let filterState = itemGenerator();
  const handleChangeTab = (selectedTab = ControlKeys.ALL): void => {
    tab = selectedTab;
  };

  $: {
    if (tab === ControlKeys.ALL) {
      filterState = itemGenerator();
    } else {
      filterState = itemGenerator().filter((item) => item.mixedTypes.indexOf(tab) > -1);
    }
  }

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
                <li class="active">{value}</li>
              {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click="{() => handleChangeTab(key)}">
                  {value}
                </li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div class="row featured__filter">
      {#each filterState as item (item.title)}
        <div
          in:scale
          out:fade
          animate:flip="{{ duration: 500 }}"
          class="col-lg-3 col-md-4 col-sm-6"
        >
          <FeaturedProductItem itemData="{item}" />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .featured {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  .featured__controls {
    text-align: center;
    margin-bottom: 50px;

    ul {
      li {
        list-style: none;
        font-size: 18px;
        color: $normal-color;
        display: inline-block;
        margin-right: 25px;
        position: relative;
        cursor: pointer;

        &.active {
          &:after {
            opacity: 1;
          }
        }

        // Horizontal line
        &:after {
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: $primary-color;
          content: '';
          opacity: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
