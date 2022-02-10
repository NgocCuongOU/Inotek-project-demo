<template>
  <aside class="single-sidebar-widget recent-post">
    <h4 class="widget-title">Bài viết gần đây</h4>
    <div class="media post-item">
      <div class="post-item__img">
        <img src="../../assets/images/post-sidebar/post_1.png" alt="post-1" />
      </div>
      <div class="post-item__body">
        <h4>
          <a href="#">Bí kíp tán gái thất truyền của nhà họ Cao</a>
        </h4>
        <p>01 tháng 3 năm 2021</p>
      </div>
    </div>
    <div class="media post-item">
      <div class="post-item__img">
        <img src="../../assets/images/post-sidebar/post_2.png" alt="post-1" />
      </div>
      <div class="post-item__body">
        <h4>
          <a href="#">Bí kíp tán gái thất truyền của nhà họ Cao</a>
        </h4>
        <p>01 tháng 3 năm 2021</p>
      </div>
    </div>
    <div class="media post-item">
      <div class="post-item__img">
        <img src="../../assets/images/post-sidebar/post_3.png" alt="post-1" />
      </div>
      <div class="post-item__body">
        <h4>
          <a href="#">Bí kíp tán gái thất truyền của nhà họ Cao</a>
        </h4>
        <p>01 tháng 3 năm 2021</p>
      </div>
    </div>
    <div class="media post-item">
      <div class="post-item__img">
        <img src="../../assets/images/post-sidebar/post_4.png" alt="post-1" />
      </div>
      <div class="post-item__body">
        <h4>
          <a href="#">Bí kíp tán gái thất truyền của nhà họ Cao</a>
        </h4>
        <p>01 tháng 3 năm 2021</p>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped>
.blog__right-sidebar .single-sidebar-widget {
  margin-bottom: 30px;
  padding: 30px;

  background-color: #fbf9ff;
}

.recent-post .media {
  display: flex;
  align-items: center;
}

.recent-post .media:not(:last-child) {
  margin-bottom: 30px;
}

.recent-post .post-item .post-item__img {
  width: 80px;
  height: 80px;
}

.recent-post .post-item .post-item__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-item .post-item__body {
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;

  padding-left: 10px;
  height: 80px;
}

.post-item .post-item__body h4 {
  margin-bottom: 6px;
}

.post-item .post-item__body h4 a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 44px;
  font-size: 1.4rem;
  line-height: 22px;
  font-weight: 500;
  color: #001d38;
  overflow: hidden;
  transition: all 0.2s linear;
}

.post-item .post-item__body h4 a:hover {
  color: var(--secondary-color);
}

.post-item .post-item__body p {
  font-size: 1.2rem;
  line-height: 18px;
  text-transform: capitalize;

  color: #7a838b;
}

</style>