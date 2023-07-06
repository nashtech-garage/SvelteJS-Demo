<script lang="ts">
  export let categories: any = [];
  const categoryList =
    categories.length > 0
      ? categories
      : [
          { title: 'All', number_post: null, href: '#' },
          { title: 'Beauty', number_post: 20, href: '#' },
          { title: 'Food', number_post: 5, href: '#' },
          { title: 'Life Style', number_post: 9, href: '#' },
          { title: 'Travel', number_post: 10, href: '#' }
        ];
  const recentNews = [
    {
      href: '/blog/1',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F07%2F20%2Fbest-farms-in-america-soul-fire-farm-FT-BLOG0720-2.jpg',
      title: '09 Kinds Of Vegetables Protect The Liver',
      date: 'MAR 05, 2019'
    },
    {
      href: '/blog/2',
      image: 'https://vaya.in/wp-content/uploads/2021/08/10-Tips-To-Make-Everyday-Cooking-Easy.jpg',
      title: 'Tips You To Balance Nutrition Meal Day<',
      date: 'MAR 05, 2019'
    },
    {
      href: '/blog/3',
      image: 'https://wallpaperaccess.com/full/1462852.jpg',
      title: '04 Principles Help You Lose Weight With Vegetables',
      date: 'MAR 05, 2019'
    }
  ];
  const tagList = [
    { href: '#', title: 'Apple' },
    { href: '#', title: 'Beauty' },
    { href: '#', title: 'Vegetables' },
    { href: '#', title: 'Fruit' },
    { href: '#', title: 'Healthy Food' },
    { href: '#', title: 'Lifestyle' }
  ];
</script>

<div class="blog__sidebar">
  <div class="blog__sidebar__search">
    <form action="#">
      <input type="text" placeholder="Search..." />
      <button type="submit"><span class="icon_search"></span></button>
    </form>
  </div>
  <div class="blog__sidebar__item">
    <h4>Categories</h4>
    <ul>
      {#each categoryList as { href, title, number_post } (title)}
        {#if title === 'All'}
          <li><a href="{href}">{title}</a></li>
        {:else}
          <li><a href="{href}">{title} ({number_post})</a></li>
        {/if}
      {/each}
    </ul>
  </div>
  <div class="blog__sidebar__item">
    <h4>Recent News</h4>
    <div class="blog__sidebar__recent">
      {#each recentNews as { href, image, title, date } (title)}
        <a href="{href}" class="blog__sidebar__recent__item">
          <div class="blog__sidebar__recent__item__pic">
            <img src="{image}" alt="{title}" />
          </div>
          <div class="blog__sidebar__recent__item__text">
            <h6>{title}</h6>
            <span>{date}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
  <div class="blog__sidebar__item">
    <h4>Search By</h4>
    <div class="blog__sidebar__item__tags">
      {#each tagList as { href, title } (title)}
        <a href="{href}">{title}</a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  /* Blog Sidebar */
  .blog__sidebar {
    padding-top: 50px;
  }

  .blog__sidebar__item {
    margin-bottom: 50px;

    h4 {
      color: $normal-color;
      font-weight: 700;
      margin-bottom: 25px;
    }

    ul {
      li {
        list-style: none;

        a {
          font-size: 16px;
          color: #666666;
          line-height: 48px;
          @include transition(all, 0.3s);

          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }

  .blog__sidebar__search {
    margin-bottom: 50px;

    form {
      position: relative;

      input {
        width: 100%;
        height: 46px;
        font-size: 16px;
        color: $para-color;
        padding-left: 15px;
        border: 1px solid #e1e1e1;
        border-radius: 20px;

        &::placeholder {
          color: $para-color;
        }
      }

      button {
        font-size: 16px;
        color: $para-color;
        background: transparent;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        padding: 0px 18px;
      }
    }
  }

  .blog__sidebar__recent {
    .blog__sidebar__recent__item {
      display: block;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .blog__sidebar__recent__item {
    overflow: hidden;
    margin-bottom: 20px;
  }

  .blog__sidebar__recent__item__pic {
    float: left;
    margin-right: 20px;
    width: 70px;
    height: 70px;
  }

  .blog__sidebar__recent__item__text {
    overflow: hidden;

    h6 {
      font-weight: 700;
      color: #333333;
      line-height: 20px;
      margin-bottom: 5px;
    }

    span {
      font-size: 12px;
      color: #999999;
      text-transform: uppercase;
    }
  }

  .blog__sidebar__item__tags {
    a {
      font-size: 16px;
      color: $para-color;
      background: $background;
      display: inline-block;
      padding: 7px 26px 5px;
      margin-right: 6px;
      margin-bottom: 10px;
    }
  }
</style>
