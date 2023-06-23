<script lang="ts">
  export let data: any = {};
  
  // product detail api return array.
  let { description, description_short, name, price, reviews, weight, infomation, list_img }: any =
    data.product[0];

  let count: number = 1;

  function increment(): void {
    count += 1;
  }
  function decrement(): void {
    count -= 1;
  }
</script>

<section class="product-details spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="product__details__pic">
          <div class="product__details__pic__item">
            <img class="product__details__pic__item--large" src="{list_img[0].url}" alt="" />
          </div>
          <div class="product__details__pic__slider owl-carousel">
            {#each list_img as img}
              <img src={img.url} alt="">
            {/each}
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="product__details__text">
          <h3>{name}</h3>
          <div class="product__details__rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <span>({reviews})</span>
          </div>
          <div class="product__details__price">${price}</div>
          <p>{description_short}</p>
          <div class="product__details__quantity">
            <div class="quantity">
              <div class="pro-qty">
                  <button class="inc qtybtn" on:click={decrement}>-</button>
                  <input type="text" bind:value={count} readonly/>
                  <button class="inc qtybtn" on:click={increment}>+</button>
              </div>
            </div>
          </div>
          <a href="#" class="primary-btn">ADD TO CARD</a>
          <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
          <ul>
            <li><b>Availability</b> <span>In Stock</span></li>
            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
            <li><b>Weight</b> <span>{weight ?? 0.5} kg</span></li>
            <li>
              <b>Share on</b>
              <div class="share">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="product__details__tab">
          <!-- Bootstrap Dynamic Tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#tabs-1"
                role="tab"
                aria-selected="true">Description</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false"
                >Information</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false"
                >Reviews <span>(1)</span></a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="tabs-1" role="tabpanel">
              <div class="product__details__tab__desc">
                <h6>Products Infomation</h6>
                <p>{description}</p>
              </div>
            </div>
            <div class="tab-pane" id="tabs-2" role="tabpanel">
              <div class="product__details__tab__desc">
                <h6>Products Infomation</h6>
                <p>{infomation}</p>
              </div>
            </div>
            <div class="tab-pane" id="tabs-3" role="tabpanel">
              <div class="product__details__tab__desc">
                <h6>Products Infomation</h6>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque
                  in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor
                  eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum
                  sed sit amet dui. Donec rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .product__details__pic__slider img{
    width: 120px;
    height: 120px;
  }
</style>
