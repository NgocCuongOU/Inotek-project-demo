<template>
  <aside class="single-sidebar-widget cate-widget">
    <h4 class="widget-title">Danh mục</h4>
    <ul class="cate-list">
      <li class="cate-list__item">
        <a href="#">
          <p>Thực phẩm nhà hàng</p>
          <p>(3)</p>
        </a>
      </li>
      <li class="cate-list__item">
        <a href="#">
          <p>Tin tức du lịch</p>
          <p>(10)</p>
        </a>
      </li>
      <li class="cate-list__item">
        <a href="#">
          <p>Sản phẩm công nghệ</p>
          <p>(7)</p>
        </a>
      </li>
      <li class="cate-list__item">
        <a href="#">
          <p>Chăm sóc sức khỏe</p>
          <p>(50)</p>
        </a>
      </li>
      <li class="cate-list__item">
        <a href="#">
          <p>Chuyến tham quan thú vị</p>
          <p>(12)</p>
        </a>
      </li>
      <li class="cate-list__item">
        <a href="#">
          <p>Tình yêu du lịch</p>
          <p>(8)</p>
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
.blog__right-sidebar .single-sidebar-widget {
  margin-bottom: 30px;
  padding: 30px;

  background-color: #fbf9ff;
}

.single-sidebar-widget .widget-title {
  margin-bottom: 30px;

  font-size: 1.8rem;
  font-weight: 500;
}

.single-sidebar-widget .widget-title::after {
  content: "";
  display: block;
  padding-top: 15px;
  border-bottom: 1px solid #f0e9ff;
}

.cate-widget .cate-list .cate-list__item:not(:last-child) {
  border-bottom: 1px solid #f0e9ff;
  padding-bottom: 12px;
}

.cate-widget .cate-list .cate-list__item:not(:first-child) {
  padding-top: 15px;
}

.cate-widget .cate-list .cate-list__item a {
  display: flex;

  font-size: 1.4rem;
  line-height: 25px;

  color: #666;
  transition: all 0.2s linear;
}

.cate-widget .cate-list .cate-list__item a:hover {
  color: var(--secondary-color);
}

.cate-widget .cate-list .cate-list__item a p {
  margin-right: 5px;
}

</style>