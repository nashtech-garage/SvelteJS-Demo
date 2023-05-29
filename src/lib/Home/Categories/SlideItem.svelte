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
