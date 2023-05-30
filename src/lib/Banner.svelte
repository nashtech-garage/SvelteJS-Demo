<script>
  import '../legend/sass/style.css';
  import '../legend/css/bootstrap.min.css';
  import '../legend/css/font-awesome.min.css';
  import '../legend/css/elegant-icons.css';
  import { fly } from 'svelte/transition';

  let isOpen = false;

  function toggleSlide() {
    isOpen = !isOpen;
  }
</script>

<section class="hero">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="hero__categories">
          <div class="hero__categories__all {isOpen ? 'slide-open' : ''}" on:click="{toggleSlide}">
            <i class="fa fa-bars"></i>
            <span>All Departments</span>
          </div>
          {#if isOpen}
            <ul transition:fly="{{ y: -30, duration: 100 }}">
              <li><a href="#">Fresh Meat</a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">Fruit & Nut Gifts</a></li>
              <li><a href="#">Fresh Berries</a></li>
              <li><a href="#">Ocean Foods</a></li>
              <li><a href="#">Butter & Eggs</a></li>
              <li><a href="#">Fastfood</a></li>
              <li><a href="#">Fresh Onion</a></li>
              <li><a href="#">Papayaya & Crisps</a></li>
              <li><a href="#">Oatmeal</a></li>
              <li><a href="#">Fresh Bananas</a></li>
            </ul>
          {/if}
        </div>
      </div>
      <div class="col-lg-9">
        <div class="hero__search">
          <div class="hero__search__form">
            <form action="#">
              <div class="hero__search__categories">
                All Categories
                <span class="arrow_carrot-down"></span>
              </div>
              <input type="text" placeholder="What are you looking for?" />
              <button type="submit" class="site-btn">SEARCH</button>
            </form>
          </div>
          <div class="hero__search__phone">
            <div class="hero__search__phone__icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="hero__search__phone__text">
              <h5>704-768-7449</h5>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
          <div class="hero__text">
            <span>FRESH FRUIT</span>
            <h2>Vegetable <br />100% Organic</h2>
            <p>Free Pickup and Delivery Available</p>
            <a href="#" class="primary-btn">SHOP NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<slot />

<style>
  .hero__item {
    background-image: url('../legend/img/hero/banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero__categories__all {
    z-index: 2;
  }
</style>
