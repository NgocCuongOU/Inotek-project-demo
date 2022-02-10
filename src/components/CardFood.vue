<template>
  <div class="card hover:shadow-lg">
    <img :src="food.img" alt="fast food" class="w-full h-32 md:h-48 object-cover">
    <div class="m-4">
      <span class="font-bold">
        {{ food.title }}
      </span>
      <span class="block text-sm text-gray-500">
        {{ food.author }}
      </span>
    </div>
    <div class="badge flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 mr-1" fill="none" viewBox="0 0  24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="leading-6">{{ food.time }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Foods from '../types/Foods'

export default defineComponent({
  props: {
    food: {
      required: true,
      type: Object as PropType<Foods>
    }
  },
  setup() {
    
  },
})
</script>
