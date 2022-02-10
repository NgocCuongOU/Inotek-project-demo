<template>
  <aside class="single-sidebar-widget tag">
    <h4 class="widget-title">Tag</h4>
    <ul class="tag-list">
      <li class="tag-list_item">
        <a href="#">love</a>
      </li>
      <li class="tag-list_item">
        <a href="#">travel</a>
      </li>
      <li class="tag-list_item">
        <a href="#">skincare</a>
      </li>
      <li class="tag-list_item">
        <a href="#">life style</a>
      </li>
      <li class="tag-list_item">
        <a href="#">technology</a>
      </li>
      <li class="tag-list_item">
        <a href="#">healthy</a>
      </li>
      <li class="tag-list_item">
        <a href="#">food</a>
      </li>
      <li class="tag-list_item">
        <a href="#">picture</a>
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

.tag .tag-list .tag-list_item {
  display: inline-block;
}

.tag .tag-list .tag-list_item a {
  display: inline-block;
  border: 1px solid #eeeeee;
  margin-bottom: 8px;
  margin-right: 3px;
  padding: 4px 20px;

  font-size: 1.4rem;
  text-align: center;
  text-transform: capitalize;

  color: #888;
  background-color: #fff;
  transition: all 0.3s linear;
}

.tag .tag-list .tag-list_item a:hover {
  color: #fff;
  background-color: var(--secondary-color);
}
</style>
