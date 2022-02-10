<template>
  <aside class="single-sidebar-widget instagram-feed">
    <h4 class="widget-title">Instagram Feed</h4>
    <ul class="instagram-list clear">
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_10.png"
            alt="instagram"
          />
        </a>
      </li>
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_5.png"
            alt="instagram"
          />
        </a>
      </li>
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_6.png"
            alt="instagram"
          />
        </a>
      </li>
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_7.png"
            alt="instagram"
          />
        </a>
      </li>
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_9.png"
            alt="instagram"
          />
        </a>
      </li>
      <li class="instagram-list__item">
        <a href="#">
          <img
            src="../../assets/images/instagram-sidebar/post_8.png"
            alt="instagram"
          />
        </a>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped>

/* -------------- instagram ----------------- */
.blog__right-sidebar .single-sidebar-widget {
  margin-bottom: 30px;
  padding: 30px;

  background-color: #fbf9ff;
}

.instagram-feed {
  height: 100%;
}

.instagram-feed .instagram-list__item {
  width: 33.33%;
  padding-right: 8px;
  padding-left: 10px;
  margin-bottom: 15px;

  float: left;
}

.instagram-feed .instagram-list__item a {
  display: inline-block;
}

.instagram-feed .instagram-list__item a img {
  width: 100%;
  object-fit: cover;
}

.newsletter .form-group input {
  border: 1px solid #f0e9ff;
  padding-right: 8px;
}
</style>