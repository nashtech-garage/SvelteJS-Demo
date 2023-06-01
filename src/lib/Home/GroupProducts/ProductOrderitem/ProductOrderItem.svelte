<div class="latest-product__text">
  <!-- Latest Products -->
  <h4>Latest Products</h4>
  <div class="latest-product__slider owl-carousel">
    <div class="latest-product__slider__item">
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/25-Most-Beautiful-Blue-Flowers.jpg"
            alt=""
          />
        </div>
        <div class="latest-product__item__text">
          <h6>1</h6>
          <span>$30.00</span>
        </div>
      </a>
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img src="img/latest-product/lp-2.jpg" alt="" />
        </div>
        <div class="latest-product__item__text">
          <h6>2</h6>
          <span>$30.00</span>
        </div>
      </a>
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img src="img/latest-product/lp-3.jpg" alt="" />
        </div>
        <div class="latest-product__item__text">
          <h6>3</h6>
          <span>$30.00</span>
        </div>
      </a>
    </div>
    <div class="latest-prdouct__slider__item">
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img src="img/latest-product/lp-1.jpg" alt="" />
        </div>
        <div class="latest-product__item__text">
          <h6>4</h6>
          <span>$30.00</span>
        </div>
      </a>
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img src="img/latest-product/lp-2.jpg" alt="" />
        </div>
        <div class="latest-product__item__text">
          <h6>5</h6>
          <span>$30.00</span>
        </div>
      </a>
      <a href="#" class="latest-product__item">
        <div class="latest-product__item__pic">
          <img src="img/latest-product/lp-3.jpg" alt="" />
        </div>
        <div class="latest-product__item__text">
          <h6>6</h6>
          <span>$30.00</span>
        </div>
      </a>
    </div>
  </div>
</div>

<style lang="scss" global>
  .latest-product__text {
    h4 {
      font-weight: 700;
      color: $normal-color;
      margin-bottom: 45px;
    }
  }
  .latest-product__slider {
    // position: absolute;
    // right: 20px;
    // top: -75px;
    button {
      height: 30px;
      width: 30px;
      background: #f3f6fa;
      border: 1px solid #e6e6e6;
      font-size: 14px;
      color: #636363;
      margin-right: 10px;
      line-height: 30px;
      text-align: center;

      span {
        font-weight: 700;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
  :global(.latest-product__item) {
    margin-bottom: 20px;
    overflow: hidden;
    display: block;
  }

  :global(.latest-product__item__pic) {
    float: left;
    margin-right: 26px;

    img {
      height: 110px;
      width: 110px;
    }
  }

  :global(.latest-product__item__text) {
    overflow: hidden;
    padding-top: 10px;

    h6 {
      color: $heading-color-2;
      margin-bottom: 8px;
    }

    span {
      font-size: 18px;
      display: block;
      color: $heading-color-2;
      font-weight: 700;
    }
  }
</style>
