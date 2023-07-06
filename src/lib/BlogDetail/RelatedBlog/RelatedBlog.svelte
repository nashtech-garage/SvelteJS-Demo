<script lang="ts">
  import BlogItem from '../../Blogs/Content/BlogItem/BlogItem.svelte';
  const items = [
    {
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F07%2F20%2Fbest-farms-in-america-soul-fire-farm-FT-BLOG0720-2.jpg',
      title: '6 ways to prepare breakfast for 30',
      date: 'May 4,2019',
      commentQuantity: 5,
      content:
        'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
      href: '#'
    },
    {
      image: 'https://vaya.in/wp-content/uploads/2021/08/10-Tips-To-Make-Everyday-Cooking-Easy.jpg',
      title: 'Visit the clean farm in the US',
      date: 'May 4,2019',
      commentQuantity: 5,
      content:
        'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
      href: '#'
    },
    {
      image: 'https://wallpaperaccess.com/full/1462852.jpg',
      title: 'Cooking tips make cooking simple',
      date: 'May 4,2019',
      commentQuantity: 5,
      content:
        'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
      href: '#'
    }
  ];
</script>

<!-- Related Blog Section -->
<section class="related-blog spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title related-blog-title">
          <h2>Post You May Like</h2>
        </div>
      </div>
    </div>
    <div class="row">
      {#each items as item}
        <div class="col-lg-4 col-md-4 col-sm-6">
          <BlogItem {...item} />
        </div>
      {/each}
    </div>
  </div>
</section>
