<script lang="ts">
  /** @type {import('./$types').LayoutData} */
  import '../legend/sass/style.css';
  import '../legend/css/bootstrap.min.css';
  import '../legend/css/font-awesome.min.css';
  import '../legend/css/elegant-icons.css';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Sidebar from '../lib/Components/Sidebar/Sidebar.svelte';
  import SearchBox from '../lib/Components/SearchBox/SearchBox.svelte';
  import Herobanner from '../lib/Components/Herobanner/Herobanner.svelte';
  export let data: any = [];
</script>

<Header />
<section class="hero">
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <Sidebar listItem="{data.categoryList}" />
      </div>
      <div class="col-lg-9">
        <div class="hero__search">
          <SearchBox />
          <Herobanner />
        </div>
      </div>
    </div>
  </div>
</section>
<div class="container">
  <slot />
</div>
<Footer />

<style lang="scss">
  .container {
    margin-bottom: 50px;
  }
  /* your styles go here */
</style>
