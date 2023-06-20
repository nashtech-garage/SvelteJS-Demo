<script>
  // your script goes here
  import Header from '../lib/Header.svelte';
  import Banner from '../lib/Banner.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

<Header />
<Banner />
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
