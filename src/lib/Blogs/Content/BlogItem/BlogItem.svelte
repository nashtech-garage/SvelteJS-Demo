<script lang="ts">
  type $$Props = {
    image: string;
    title: string;
    date: string;
    commentQuantity: number;
    content: string;
    href: string;
  };
  export let image: string = '';
  export let title: string = '';
  export let date: string = '';
  export let commentQuantity: number = 0;
  export let content: string = '';
  export let href: string = '#';
</script>

<div class="blog__item">
  <div class="blog__item__pic">
    <img src="{image}" alt="{title}" />
  </div>
  <div class="blog__item__text">
    <ul>
      <li><i class="fa fa-calendar-o"></i> {date}</li>
      <li><i class="fa fa-comment-o"></i> {commentQuantity}</li>
    </ul>
    <h5><a href="{href}">{title}</a></h5>
    <p>{content}</p>
    <a href="{href}" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
  </div>
</div>

<style lang="scss">
  /* Blog */
  .blog__item {
    margin-bottom: 60px;
  }

  .blog__item__pic {
    img {
      min-width: 100%;
    }
  }

  .blog__item__text {
    padding-top: 25px;

    ul {
      margin-bottom: 15px;

      li {
        font-size: 16px;
        color: #b2b2b2;
        list-style: none;
        display: inline-block;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    h5 {
      margin-bottom: 12px;

      a {
        font-size: 20px;
        color: $normal-color;
        font-weight: 700;
      }
    }

    p {
      margin-bottom: 25px;
    }

    .blog__btn {
      display: inline-block;
      font-size: 14px;
      color: $normal-color;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid #b2b2b2;
      padding: 14px 20px 12px;
      border-radius: 25px;

      span {
        position: relative;
        top: 1px;
        margin-left: 5px;
      }
    }
  }
</style>
