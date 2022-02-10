<template>
  <div id="home">
    <Tours />
    <NewLetter />
    <Blogs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tours from '../components/tours/Tours.vue'
import NewLetter from '../components/NewLetter.vue'
import Blogs from '../components/bloghome/Blogs.vue'

export default defineComponent({
  components: {
    Tours,
    NewLetter,
    Blogs
  }
})

</script>
