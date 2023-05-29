<script lang="ts">
  export let itemData;
  let { image, title } = itemData;
</script>

<div
  class="categories__item set-bg"
  data-setbg="{image}"
  style="background-image: url(&quot;{image}&quot;);"
>
  <h5><a href="/">{title}</a></h5>
</div>

<style lang="scss">
  :global(.categories__item) {
    height: 270px;
    position: relative;

    h5 {
      position: absolute;
      left: 0;
      width: 100%;
      padding: 0 20px;
      bottom: 20px;
      text-align: center;

      a {
        font-size: 18px;
        color: $normal-color;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 12px 0 10px;
        background: $white-color;
        display: block;
      }
    }
  }
</style>
