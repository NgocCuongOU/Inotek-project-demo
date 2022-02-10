<template>
  <div id="blogpage">
    <BlogCarousel />
    <!-- Section Blog start -->
    <section class="travel-main blog">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-lg-8">
            <div class="blog__left-sidebar">
              <BlogCard v-for="blog in getBlogsPage" :key="blog.id" :blog="blog" />
              <Pagination />
            </div>
          </div>
          <div class="col-xs-12 col-md-4 col-lg-4">
            <div class="blog__right-sidebar">
              <SearchBlog />
              <CategoryOfBlog />
              <RecentBlog />
              <TagBlog />
              <InstagramFeedBlog />
              <RegisterNews />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BlogCard from '../components/blogpage/BlogCard.vue'
import BlogCarousel from '../components/blogpage/BlogCarousel.vue'
import CategoryOfBlog from '../components/blogpage/CategoryOfBlog.vue'
import RecentBlog from '../components/blogpage/RecentBlog.vue'
import TagBlog from '../components/blogpage/TagBlog.vue'
import InstagramFeedBlog from '../components/blogpage/InstagramFeedBlog.vue'
import RegisterNews from '../components/blogpage/RegisterNews.vue'
import SearchBlog from '../components/blogpage/SearchBlog.vue'
import Pagination from '../components/Pagination.vue'
import { mapGetters } from "vuex";

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters(['getBlogsPage'])
  },
  components: {
    BlogCard,
    BlogCarousel,
    CategoryOfBlog,
    RecentBlog,
    TagBlog,
    InstagramFeedBlog,
    RegisterNews,
    SearchBlog,
    Pagination
  }
});
</script>
<style scoped>
.travel-main {
  margin-top: 50px;
}

.blog .blog__left-sidebar > h3 {
  border-radius: 4px;
  padding: 16px 0px;

  color: #fff;
  background-color: #1ec6b6;

  text-align: center;
}
/* ------------------- blog right sidebar -------------------------- */
.blog__right-sidebar .single-sidebar-widget {
  margin-bottom: 30px;
  padding: 30px;

  background-color: #fbf9ff;
}

</style>