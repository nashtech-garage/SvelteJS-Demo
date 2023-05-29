<script lang="ts">
  // import Carousel from 'svelte-carousel';
  import Carousel from '../../Components/Carousel/Carousel.svelte';

  import { CategoryTypes } from '../../../types/categories';
  import SlideItem from './SlideItem/SlideItem.svelte';
  import { browser } from '$app/environment';
  const imageGenerator = (number: number = 0) => {
    const newArray = new Array(number);
    return [...newArray].map((_, index) => {
      const order = index + 1;
      return {
        image: `./images/Categories/cat-${order}.jpg`
      };
    });
  };
  const categoryImages = imageGenerator(5);
  const categoryList = [
    CategoryTypes.FRESH_FRUIT,
    CategoryTypes.DRIED_FRUIT,
    CategoryTypes.VEGETABLES,
    CategoryTypes.FRUIT_DRINK,
    CategoryTypes.FRESH_MEAT
  ].map((item, index) => {
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
          <Carousel autoplay="2000">
            {#each categoryList as data}
              <div class="col-lg-3 slide-item">
                <SlideItem itemData="{data}" />
              </div>
            {/each}
            <span slot="left-control">Left</span>
            <span slot="right-control">Right</span>
          </Carousel>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  /* .slide-item {
    min-width: 292.5px;
    max-width: 292.5px;
  } */
  .categories__slider button {
    font-size: 18px;
    color: #1c1c1c;
    height: 70px;
    width: 30px;
    line-height: 70px;
    text-align: center;
    border: 1px solid #ebebeb;
    position: absolute;
    left: -35px;
    top: 50%;
    transform: translateY(-35px);
    background: #ffffff;
  }
  .categories__slider .carousel-prev {
    font-size: 18px;
  }
  .categories__slider .carousel-next {
    left: auto;
    right: -35px;
  }
</style>
