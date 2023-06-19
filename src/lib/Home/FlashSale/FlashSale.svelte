<script lang="ts">
  import Timer from '../../Components/Timer/Timer.svelte';
  import Categories from '../Categories/Categories.svelte';
  type $$Props = {
    countdown: number;
    callback?: any;
  };
  export let countdown: number = 10;
  export let callback = () => null;
</script>

<section class="flashSale">
  <Timer countdown="{countdown}" callback="{callback}">
    <Categories />
  </Timer>
</section>

<style lang="scss">
  .flashSale {
    margin-bottom: 15px;
  }
</style>
