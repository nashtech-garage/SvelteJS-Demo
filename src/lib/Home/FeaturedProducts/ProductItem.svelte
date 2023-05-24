<script>
  export let itemData;
  let { image, title, price } = itemData;
</script>

<div class="featured__item">
  <div
    class="featured__item__pic set-bg"
    data-setbg="{image}"
    style="background-image: url(&quot;{image}&quot;);"
  >
    <ul class="featured__item__pic__hover">
      <li><a href="/"><i class="fa fa-heart"></i></a></li>
      <li><a href="/"><i class="fa fa-retweet"></i></a></li>
      <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
    </ul>
  </div>
  <div class="featured__item__text">
    <h6><a href="/">{title}</a></h6>
    <h5>${price}</h5>
  </div>
</div>
