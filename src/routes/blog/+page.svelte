<script lang="ts">
  import Content from '../../lib/Blogs/Content/BlogContent.svelte';
  export let data;
</script>

<Content list="{data.blogList}" />
