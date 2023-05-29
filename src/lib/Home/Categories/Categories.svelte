<script lang="ts">
  import Carousel from 'svelte-carousel';
  import { CategoryTypes } from '../../../types/categories';
  import SlideItem from './SlideItem.svelte';
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
          <!-- 4x3 -->
          <Carousel
            let:showPrevPage
            let:showNextPage
            swiping="{true}"
            infinite="{true}"
            particlesToShow="{4}"
            particlesToScroll="{1}"
            dots="{false}"
            pauseOnFocus="{true}"
          >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div slot="prev" on:click="{showPrevPage}" class="custom-arrow custom-arrow-prev">
              <button type="button" class="carousel-prev"
                ><span class="fa fa-angle-left"><span></span></span></button
              >
            </div>
            {#each categoryList as data}
              <div class="col-lg-3 slide-item">
                <SlideItem itemData="{data}" />
              </div>
            {/each}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div slot="next" on:click="{showNextPage}" class="custom-arrow custom-arrow-next">
              <button type="button" class="carousel-next"
                ><span class="fa fa-angle-right"><span></span></span></button
              >
            </div>
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
