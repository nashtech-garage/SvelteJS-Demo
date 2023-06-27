<script>
   import { onMount } from 'svelte';
  import { getWishlist } from "../utils";

  import CartIcon from './Components/CartIcon/CartIcon.svelte';
  $: Icons = [
    {
      href: '/shopping-cart/',
      iconName: 'fa fa-heart',
      itemQuantity: 0,
    },
    {
      href: '/shopping-cart/',
      iconName: 'fa fa-shopping-bag',
      itemQuantity: 0
    }
  ];

  // $: itemQuantity = 0;

  onMount(() => {
    const wishlist = getWishlist();
    Icons[0].itemQuantity = wishlist && wishlist.length ? wishlist.length : 0;
    Icons[1].itemQuantity = wishlist && wishlist.length ? wishlist.length : 0;

    Icons = Icons;
  });
</script>

<header class="header">
  <div class="header__top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <!-- Left side of header -->
          <div class="header__top__left">
            <ul>
              <li><i class="fa fa-envelope"></i> info@ogani.com</li>
              <li>Free shipping for all orders over $50</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <!-- Right side of header -->
          <div class="header__top__right">
            <div class="header__top__right__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-pinterest-p"></i></a>
            </div>
            <div class="header__top__right__language">
              <img src="src/legend/img/language.png" alt="" />
              <div>English</div>
              <span class="arrow_carrot-down"></span>
              <ul>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </div>
            <div class="header__top__right__auth">
              <a href="#"><i class="fa fa-user"></i> Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Navigation -->
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="header__logo">
          <a href="/"><img src="src/legend/img/logo.png" alt="" /></a>
        </div>
      </div>
      <div class="col-lg-6">
        <nav class="header__menu">
          <ul>
            <li class="active"><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li>
              <a href="/">Pages</a>
              <ul class="header__menu__dropdown">
                <li><a href="/shop-details">Shop Details</a></li>
                <li><a href="/shopping-cart">Shoping Cart</a></li>
                <li><a href="/checkout">Check Out</a></li>
                <li><a href="/blog-details">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-3">
        <div class="header__cart">
          <ul>
            {#each Icons as icon}
              <li><CartIcon {...icon} /></li>
            {/each}
          </ul>
          <div class="header__cart__price"><span>$10.00</span></div>
        </div>
      </div>
    </div>
    <div class="hamburger__open">
      <i class="fa fa-bars"></i>
    </div>
  </div>
</header>

<style lang="scss">
  .header .container {
    position: relative;
  }
  .header__top {
    background: #f5f5f5;
  }
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1170px;
    }
  }
  .header__top__left {
    padding: 10px 0 13px;
  }

  .header__top__left ul li {
    font-size: 14px;
    color: $eerie-black;
    display: inline-block;
    margin-right: 45px;
    position: relative;
  }

  .header__top__left ul li:after {
    position: absolute;
    right: -25px;
    top: 1px;
    height: 20px;
    width: 1px;
    background: $black;
    opacity: 0.1;
    content: '';
  }

  .header__top__left ul li:last-child {
    margin-right: 0;
  }

  .header__top__left ul li:last-child:after {
    display: none;
  }

  .header__top__left ul li i {
    color: #252525;
    margin-right: 5px;
  }

  /* Right side of header */
  .header__top__right {
    text-align: right;
    padding: 10px 0 13px;
  }

  .header__top__right__social {
    position: relative;
    display: inline-block;
    margin-right: 35px;
  }

  .header__top__right__social:after {
    position: absolute;
    right: -20px;
    top: 1px;
    height: 20px;
    width: 1px;
    background: $black;
    opacity: 0.1;
    content: '';
  }

  .header__top__right__social a {
    font-size: 14px;
    display: inline-block;
    color: $eerie-black;
    margin-right: 20px;
  }

  .header__top__right__social a:last-child {
    margin-right: 0;
  }

  .header__top__right__language {
    position: relative;
    display: inline-block;
    margin-right: 40px;
    cursor: pointer;
  }

  .header__top__right__language:hover ul {
    top: 23px;
    opacity: 1;
    visibility: visible;
  }

  .header__top__right__language:after {
    position: absolute;
    right: -21px;
    top: 1px;
    height: 20px;
    width: 1px;
    background: $black;
    opacity: 0.1;
    content: '';
  }

  .header__top__right__language img {
    margin-right: 6px;
  }

  .header__top__right__language div {
    font-size: 14px;
    color: $eerie-black;
    display: inline-block;
    margin-right: 4px;
  }

  .header__top__right__language span {
    font-size: 14px;
    color: $eerie-black;
    position: relative;
    top: 2px;
  }

  .header__top__right__language ul {
    background: #222222;
    width: 100px;
    text-align: left;
    padding: 5px 0;
    position: absolute;
    left: 0;
    top: 43px;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .header__top__right__language ul li {
    list-style: none;
  }

  .header__top__right__language ul li a {
    font-size: 14px;
    color: #ffffff;
    padding: 5px 10px;
  }

  .header__top__right__auth {
    display: inline-block;
  }

  .header__top__right__auth a {
    display: block;
    font-size: 14px;
    color: $eerie-black;
  }

  .header__top__right__auth a i {
    margin-right: 6px;
  }
  .header__logo {
    padding: 15px 0;
  }

  .header__logo a {
    display: inline-block;
  }

  .header__menu {
    padding: 24px 0;
  }

  .header__menu ul li {
    list-style: none;
    display: inline-block;
    margin-right: 50px;
    position: relative;
  }

  .header__menu ul li .header__menu__dropdown {
    position: absolute;
    left: 0;
    top: 50px;
    background: #222222;
    width: 180px;
    z-index: 9;
    padding: 5px 0;
    -webkit-transition: all, 0.3s;
    transition: all, 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  .header__menu ul li .header__menu__dropdown li {
    margin-right: 0;
    display: block;
  }

  .header__menu ul li .header__menu__dropdown li:hover > a {
    color: #833030;
  }

  .header__menu ul li .header__menu__dropdown li a {
    text-transform: capitalize;
    color: #ffffff;
    font-weight: 400;
    padding: 5px 15px;
  }

  .header__menu ul li.active a {
    color: #833030;
  }

  .header__menu ul li:hover .header__menu__dropdown {
    top: 30px;
    opacity: 1;
    visibility: visible;
  }

  .header__menu ul li:hover > a {
    color: #833030;
  }

  .header__menu ul li:last-child {
    margin-right: 0;
  }

  .header__menu ul li a {
    font-size: 14px;
    color: #252525;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    -webkit-transition: all, 0.3s;
    transition: all, 0.3s;
    padding: 5px 0;
    display: block;
    text-decoration: none;
  }

  .header__cart {
    text-align: right;
    padding: 24px 0;
  }

  .header__cart ul {
    display: inline-block;
    margin-right: 25px;
  }

  .header__cart ul li {
    list-style: none;
    display: inline-block;
    margin-right: 15px;
  }

  .header__cart ul li:last-child {
    margin-right: 0;
  }

  .header__cart ul li a {
    position: relative;
  }

  .header__cart ul li a i {
    font-size: 18px;
    color: $eerie-black;
  }

  .header__cart ul li a span {
    height: 13px;
    width: 13px;
    background: #833030;
    font-size: 10px;
    color: #ffffff;
    line-height: 13px;
    text-align: center;
    font-weight: 700;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -12px;
  }

  .header__cart .header__cart__price {
    font-size: 14px;
    color: #6f6f6f;
    display: inline-block;
  }

  .header__cart .header__cart__price span {
    color: #252525;
    font-weight: 700;
  }
  .hamburger__menu__wrapper {
    display: none;
  }

  .hamburger__open {
    display: none;
  }
</style>
