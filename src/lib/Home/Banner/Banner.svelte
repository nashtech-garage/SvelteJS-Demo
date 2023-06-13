<script lang="ts">
  import BannerItem from '../../Components/Banner/Banner.svelte';
  const bannerList = [
    {
      href: '#',
      heading: 'Summer Fruit',
      content: '100% Pure Natural Fruit Juice',
      background: 'images/Banner/banner1.jpg'
    },
    {
      href: '#',
      heading: 'Dried & Drink Fruits',
      content: 'With 25% Off All Teas',
      background: 'images/Banner/banner2.jpg'
    }
  ];
</script>

<section class="container">
  <div class="wrapper">
    {#each bannerList as banner}
      <BannerItem {...banner} />
    {/each}
  </div>
</section>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
  }
  @media (min-width: 479px) {
    .wrapper {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 767px) {
    .wrapper {
      display: flex;
      flex-direction: row;
    }
  }
</style>
