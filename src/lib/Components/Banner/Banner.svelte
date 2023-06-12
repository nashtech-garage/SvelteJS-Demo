<script lang="ts">
  type $$Props = {
    href: string;
    iconName: string;
    className?: string;
    background: string;
  };
  export let className = '';
  export let href = '#';
  export let iconName = '';
  export let numberOfNoti = 0;
</script>

<div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
  <div class="hero__text">
    <span>FRESH FRUIT</span>
    <h2>Vegetable <br />100% Organic</h2>
    <p>Free Pickup and Delivery Available</p>
    <a href="#" class="primary-btn">SHOP NOW</a>
  </div>
</div>

<style lang="scss">
  .hero__item {
    background-image: url('../legend/img/hero/banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
