<script lang="ts">
  import Sidebar from '../../lib/Blogs/Sidebar/BlogSidebar.svelte';
  export let data;
</script>

<section class="blog">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <Sidebar categories="{data.blogCategories}" />
      </div>
      <div class="col-lg-8 col-md-7">
        <slot />
      </div>
    </div>
  </div>
</section>
