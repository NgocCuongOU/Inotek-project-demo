<template>
  <div class="col-xs-12 col-md-4 col-lg-4">
    <div class="single-trip">
      <div class="single-trip__img">
        <img :src="blog.image" alt="trip1" />
      </div>
      <div class="single-trip__info">
        <div class="single-trip__date">
          <span>{{ blog.date }}</span>
        </div>
        <a href="">
          <h3>{{ blog.title }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    blog: {
      required: true,
      type: Object
    }
  },
  setup() {
    
  },
})
</script>
<style scoped>

.single-trip .single-trip__img img {
  width: 100%;
  height: 250px;
  border-radius: 5px;

  object-fit: cover;
}

.single-trip .single-trip__info {
  padding-top: 16px;
}

.single-trip .single-trip__date span {
  font-size: 1.4em;
  font-weight: 400;

  color: #7a838b;
}

.single-trip a {
  text-decoration: none;
}

.single-trip a h3 {
  margin-top: 10px;

  font-size: 2.2em;
  font-weight: 400;
  line-height: 26px;

  color: #040e27;
  transition: 0.4s;
}

.single-trip:hover .single-trip__info h3 {
  color: var(--secondary-color);
}
</style>
