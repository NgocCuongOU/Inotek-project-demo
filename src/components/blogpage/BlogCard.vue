<template>
  <article class="blog-item">
    <div class="blog-item__img">
      <img :src="blog.image" alt="blog 2" />
      <a href="#" class="blog-item__date">
        <h3>01</h3>
        <p>Tháng 3</p>
      </a>
    </div>
    <div class="blog-item__content">
      <h3 class="blog-item__content-title">
        <a href="">{{ blog.title }}</a>
      </h3>
      <p>
        {{ blog.description }}
      </p>
      <div class="blog-item__wrap">
        <ul class="blog-item__info">
          <li>
            <a href="#">{{ blog.author }}</a>
          </li>
          <li>
            <a href="#">03 comments</a>
          </li>
        </ul>
        <div class="read-more">
          <a href="./blog-detail.html" class="read-more-btn"
            >Xem thêm
          ></a>
        </div>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    blog: {
      required: true,
      type: Object
    }
  },
  setup() {},
});
</script>
<style scoped>

.blog__left-sidebar .blog-item {
  margin-bottom: 50px;
}

.blog__left-sidebar .blog-item .blog-item__img {
  position: relative;
}

.blog__left-sidebar .blog-item .blog-item__img img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.blog-item .blog-item__img .blog-item__date {
  position: absolute;
  bottom: -40px;
  left: 40px;

  display: inline-block;
  padding: 15px 8px;
  border-radius: 5px;

  color: #fff;
  background-color: var(--secondary-color);
  transition: all 0.3s linear;
}

.blog-item .blog-item__img .blog-item__date:hover {
  background-color: #1ec6b6;
}

.blog-item .blog-item__img .blog-item__date h3 {
  font-size: 2.2em;
  text-align: center;
  line-height: 1.2;
}

.blog-item .blog-item__img .blog-item__date p {
  font-size: 1.4em;
}

.blog-item .blog-item__content {
  padding: 45px 30px 35px 35px;
  box-shadow: 0px 10px 20px 0px rgb(221 221 221 / 30%);
}

.blog-item .blog-item__content .blog-item__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-item .blog-item__content .blog-item__wrap .read-more-btn {
  border: none;
  padding: 10px 14px;

  font-size: 1.4rem;

  color: #fff;
  background-color: var(--secondary-color);
}

.blog-item .blog-item__content .blog-item__wrap .read-more-btn:hover {
  opacity: 0.8;
}

.blog-item .blog-item__content .blog-item__content-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  height: 33px;
  margin-bottom: 15px;

  line-height: 33px;
  font-size: 2.4em;

  overflow: hidden;
}

.blog-item .blog-item__content .blog-item__content-title a {
  color: #001d38;
  font-weight: 500;
  transition: all 0.3s linear;
}

.blog-item .blog-item__content > p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  height: 48px;
  margin-bottom: 30px;

  font-size: 1.6em;
  line-height: 24px;
  font-weight: 400;

  color: #7a838b;

  overflow: hidden;
}

.blog-item .blog-item__content .blog-item__info li {
  display: inline-block;
}

.blog-item .blog-item__content .blog-item__info li a {
  padding: 5px;

  font-size: 1.4em;
  color: #666666;
  transition: all 0.2s linear;
}

.blog-item .blog-item__content .blog-item__content-title:hover a,
.blog-item .blog-item__content .blog-item__info li:hover a {
  color: var(--secondary-color);
}

.blog-item .blog-item__content .blog-item__info li a:first-child {
  padding-right: 10px;
}

.blog-item .blog-item__content .blog-item__info li:first-child::after {
  content: "";
  border: 1px solid #ccc;
}

.blog-item .blog-item__content .blog-item__info li a i,
.blog-item .blog-item__content .blog-item__info li:not(:last-child) {
  margin-right: 5px;
}

</style>
