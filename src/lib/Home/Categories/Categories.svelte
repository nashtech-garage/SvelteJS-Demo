<script lang="ts">
  import Carousel from '../../Components/Carousel/Carousel.svelte';
  import {
    CategoryTypes,
    type TCategoryItem,
    type TCategoryTitle
  } from '../../../types/categories';
  import SlideItem from './SlideItem/SlideItem.svelte';
  import { browser } from '$app/environment';

  const imageGenerator = (number: number = 0): { [x: string]: string }[] => {
    const newArray = new Array(number);
    return [...newArray].map((_, index) => {
      const order = index + 1;
      return {
        image: `./images/Categories/cat-${order}.jpg`
      };
    });
  };

  const categoryImages = imageGenerator(5);
  const categoryList: TCategoryItem[] = [
    CategoryTypes.FRESH_FRUIT,
    CategoryTypes.DRIED_FRUIT,
    CategoryTypes.VEGETABLES,
    CategoryTypes.FRUIT_DRINK,
    CategoryTypes.FRESH_MEAT
  ].map((item: TCategoryTitle, index: number) => {
    return {
      title: item,
      image: categoryImages[index].image
    };
  });
</script>

<section class="categories">
  {#if browser}
    <div class="container">
      <div class="row">
        <div class="categories__slider">
          <Carousel autoplay="{5000}" perPage="{4}">
            {#each categoryList as data}
              <div class="col-lg-3 slide-item">
                <SlideItem itemData="{data}" />
              </div>
            {/each}
          </Carousel>
        </div>
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
  .categories__slider {
    padding: 0px;
    .slide-item {
      max-width: 100%;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
</style>
