<script>
  export let data;
  $: detail = data.blogDetail || {};
  $: tagList =
    data.blogDetail.tags.length > 0
      ? data.blogDetail.tags
      : ['All', 'Trending', 'Cooking', 'Healthy Food', 'Life Style'];
</script>

<div class="container">
  <div class="blog__details__text">
    <img src="{detail.image}" alt="{detail.title}" />
    <p>{detail.content}</p>
  </div>
  <div class="blog__details__content">
    <div class="row">
      <div class="col-lg-6">
        <div class="blog__details__author">
          <div class="blog__details__author__pic">
            <img src="/images/details/details-author.jpg" alt="" />
          </div>
          <div class="blog__details__author__text">
            <h6>Michael Scofield</h6>
            <span>Admin</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="blog__details__widget">
          <ul>
            <li><span>Categories:</span> Food</li>
            <li>
              <span>Tags:</span>
              {#each tagList as tag}
                {tag}, {' '}
              {/each}
            </li>
          </ul>
          <div class="blog__details__social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Blog Details Section END -->
<!-- <RelatedBlog /> -->

<style lang="scss">
  .blog-details-hero {
    height: 350px;
    display: flex;
    align-items: center;
  }

  .blog__details__hero__text {
    text-align: center;

    h2 {
      font-size: 46px;
      color: $white-color;
      font-weight: 700;
      margin-bottom: 10px;
    }

    ul {
      li {
        font-size: 16px;
        color: $white-color;
        list-style: none;
        display: inline-block;
        margin-right: 45px;
        position: relative;

        &:after {
          position: absolute;
          right: -26px;
          top: 0;
          content: '|';
        }

        &:last-child {
          margin-right: 0;

          &:after {
            display: none;
          }
        }
      }
    }
  }

  /* Blog Details */
  .related-blog {
    padding-top: 70px;
    padding-bottom: 10px;
  }

  .related-blog-title {
    margin-bottom: 70px;
  }

  .blog-details {
    padding-bottom: 75px;
    border-bottom: 1px solid #e1e1e1;
  }

  .blog__details__text {
    margin-bottom: 45px;

    img {
      margin-bottom: 30px;
    }

    p {
      font-size: 18px;
      line-height: 30px;
    }

    h3 {
      color: #333333;
      font-weight: 700;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }

  .blog__details__author__pic {
    float: left;
    margin-right: 15px;

    img {
      height: 92px;
      width: 92px;
      border-radius: 50%;
    }
  }

  .blog__details__author__text {
    overflow: hidden;
    padding-top: 30px;

    h6 {
      color: $normal-color;
      font-weight: 700;
    }

    span {
      font-size: 16px;
      color: $para-color;
    }
  }

  .blog__details__widget {
    ul {
      margin-bottom: 5px;

      li {
        font-size: 16px;
        color: $para-color;
        list-style: none;
        line-height: 30px;

        span {
          color: $normal-color;
          font-weight: 700;
        }
      }
    }

    .blog__details__social {
      a {
        display: inline-block;
        font-size: 20px;
        color: $para-color;
        margin-right: 24px;
        @include transition(all, 0.3s);

        &:hover {
          color: $primary-color;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
