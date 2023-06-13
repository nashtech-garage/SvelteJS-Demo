<script lang="ts">
  type $$Props = {
    className?: string;
    href?: string;
    heading: string;
    content: string;
    background?: string;
  };
  export let className = '';
  export let href = '#';
  export let heading = '';
  export let content = '';
  export let background = 'images/Banner/banner2.jpg';
</script>

<div
  class="hero__item set-bg {className}"
  data-setbg="{background}"
  style="background-image: url({background});"
>
  <div class="hero__text">
    <h3>{heading}</h3>
    <p>{content}</p>
    <a href="{href}" class="primary-btn shop">SHOP NOW</a>
  </div>
</div>

<style lang="scss">
  .hero__item {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 265px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 25px;
    margin-bottom: 25px;
    .hero__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .shop {
    background-color: #d3232a;
  }
</style>
