<script>
  export let itemData;
  // export let addToCart;
  export let wishlist;
  const { image, title, price, id } = itemData;

  function handleAddToCart(id) {
    const foundIdx = wishlist.findIndex(w => w.title === title)
    if (foundIdx > -1) {
      wishlist[foundIdx].quantity++
    } else {
      wishlist.push({
        id,
        quantity: 1,
      })
    }
    wishlist = wishlist;
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }
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
      <li 
        
      >
        <a href="/" on:click={() => handleAddToCart(title)}><i class="fa fa-shopping-cart"></i></a>
    </li>
    </ul>
  </div>
  <div class="featured__item__text">
    <h6><a href={"/product-detail/" + id}>{title}</a></h6>
    <h5>${price}</h5>
  </div>
</div>

<style lang="scss">
  .featured__item {
    margin-bottom: 50px;

    &:hover {
      .featured__item__pic {
        .featured__item__pic__hover {
          bottom: 20px;
        }
      }
    }
  }

  .featured__item__pic {
    height: 270px;
    position: relative;
    overflow: hidden;
    background-position: center center;
  }

  .featured__item__pic__hover {
    position: absolute;
    left: 0;
    bottom: -50px;
    width: 100%;
    text-align: center;
    @include transition(all, 0.5s);
    li {
      list-style: none;
      display: inline-block;
      margin-right: 6px;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        a {
          background: $primary-color;
          border-color: $primary-color;

          i {
            color: $white-color;
            transform: rotate(360deg);
          }
        }
      }

      a {
        font-size: 16px;
        color: $normal-color;
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid $border;
        background: $white-color;
        display: block;
        border-radius: 50%;
        @include transition(all, 0.5s);

        i {
          position: relative;
          transform: rotate(0);
          @include transition(all, 0.3s);
        }
      }
    }
  }

  .featured__item__text {
    text-align: center;
    padding-top: 15px;

    h6 {
      margin-bottom: 10px;

      a {
        color: $heading-color-2;
      }
    }

    h5 {
      color: $heading-color-2;
      font-weight: 700;
    }
  }
</style>
