<script lang="ts">
  import { paginate, PaginationNav } from 'svelte-paginate';
  import BlogItem from './BlogItem/BlogItem.svelte';
  export let list: any = [];
  $: items =
    list.length > 0
      ? list
      : [
          {
            image: 'images/blog/blog-1.jpg',
            title: '6 ways to prepare breakfast for 30',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/1'
          },
          {
            image: 'images/blog/blog-2.jpg',
            title: 'Visit the clean farm in the US',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/2'
          },
          {
            image: 'images/blog/blog-3.jpg',
            title: 'Cooking tips make cooking simple',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/3'
          },
          {
            image: 'images/blog/blog-4.jpg',
            title: 'The Moment You Need To Remove Garlic From The Menu',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/4'
          },
          {
            image: 'images/blog/blog-5.jpg',
            title: 'Cooking tips make cooking simple',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/5'
          },
          {
            image: 'images/blog/blog-6.jpg',
            title: 'Visit the clean farm in the US',
            date: 'May 4,2019',
            commentQuantity: 5,
            content:
              'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
            href: '/blog/6'
          }
        ];

  let currentPage = 1;
  let pageSize = 4;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="row">
  {#each paginatedItems as blog (blog?.title)}
    <div class="col-lg-6 col-md-6 col-sm-6">
      <BlogItem {...blog} />
    </div>
  {/each}
  <!-- showStepOptions="{true}" -->
  {#if pageSize >= 4}
    <div class="col-lg-12">
      <div class="product__pagination blog__pagination">
        <PaginationNav
          totalItems="{items.length}"
          pageSize="{pageSize}"
          currentPage="{currentPage}"
          limit="{1}"
          on:setPage="{(e) => (currentPage = e.detail.page)}"
        />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .blog__pagination {
    padding-top: 10px;

    padding-top: 5px;
    position: relative;

    &:before {
      position: absolute;
      left: 0;
      top: -29px;
      height: 1px;
      width: 100%;
      background: $black-color;
      opacity: 0.1;
      content: '';
    }
    :global(.option) {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #b2b2b2;
      font-size: 14px;
      color: #b2b2b2;
      font-weight: 700;
      line-height: 28px;
      text-align: center;
      margin-right: 16px;
      @include transition(all, 0.3s);

      &:hover {
        background: $primary-color;
        border-color: $primary-color;
        color: $white-color;
      }

      &:last-child {
        margin-right: 0;
      }
    }
    :global(.active) {
      background: $primary-color;
      border-color: $primary-color;
      color: $white-color;
    }
  }
</style>
