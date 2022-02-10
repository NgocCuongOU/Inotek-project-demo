<template>
  <section class="travel-main trip">
    <div class="container">
      <div class="row align-item">
        <div class="col col-lg-6">
          <div class="section-title">
            <h3>Bản tin gần đây</h3>
          </div>
        </div>
      </div>
      <div class="row">       
        <BlogCard v-for="blog in getBlogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import BlogCard from '../bloghome/BlogCard.vue'

export default defineComponent({
  setup() {
  },
  computed: {
    ...mapGetters(['getBlogs'])
  },
  components: {
    BlogCard
  }
});
</script>
<style scoped>
.travel-main {
  margin-bottom: 40px;
}

.trip .section-title {
  margin: 40px 0 62px 0;
}

.section-title h3 {
    height: 28px;
    padding-bottom: 7px;
    margin-bottom: 25px;

    line-height: 28px;
    font-size: 3.8em;
    font-weight: 500;
    text-align: center;

    color: #040E27;
}

</style>
