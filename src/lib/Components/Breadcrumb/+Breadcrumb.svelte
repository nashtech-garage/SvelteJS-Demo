<script lang="ts">
  type $$Props = {
    title?: string;
    href?: string;
    option?: string;
  };
  export let title: string = '';
  export const href: string = '/';
  export const option: string = 'Home';
  let showBrand = ['Shop'];
  $: isShow = showBrand.includes(title) ? 'Organi' : '';
</script>

<div class="wrapper">
  <div class="layer"></div>

  <section
    class="breadcrumb-section set-bg"
    data-setbg="https://wallpaperaccess.com/full/1462852.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>{isShow} {title || ''}</h2>
            <div class="breadcrumb__option">
              <a href="{href}">{option} </a>
              <span>{title || ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  .breadcrumb-section {
    display: flex;
    align-items: center;
    padding: 45px 0 40px;
    background-image: url('https://wallpaperaccess.com/full/1462852.jpg');
  }

  .breadcrumb__text {
    h2 {
      font-size: 46px;
      color: $white-color;
      font-weight: 700;
    }
  }

  .breadcrumb__option {
    a {
      display: inline-block;
      font-size: 16px;
      color: $white-color;
      font-weight: 700;
      margin-right: 20px;
      position: relative;

      &:after {
        position: absolute;
        right: -12px;
        top: 13px;
        height: 1px;
        width: 10px;
        background: $white-color;
        content: '';
      }
    }

    span {
      display: inline-block;
      font-size: 16px;
      color: $white-color;
    }
  }
</style>
