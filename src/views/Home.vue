<template>
  <main class="md:col-span-4 px-16 py-6 bg-gray-100">
    <div class="flex justify-center md:justify-end">
      <a href="#" class="
        btn text-primary border-primary md:border-2 
        hover:bg-primary hover:text-white transition ease-in-out duration-300
      ">
        Log in
      </a>
      <a href="#" class="
        btn text-primary ml-2 border-primary md:border-2
        transition ease-in-out duration-300 
        hover:bg-primary hover:text-white
      ">
        Sign up
      </a>
    </div>
    <header>
      <h2 class="text-gray-700 text-5xl font-semibold">Recipes</h2>
      <h2 class="text-2xl font-semibold">For you</h2>
    </header>

    <div>
      <h4 class="border-b border-gray-200 font-bold mt-12 pb-2">Latest Recipes</h4>

      <div class="mt-8 grid lg:grid-cols-3 gap-10">
        <!-- Cards go here -->
        <CardFood v-for="food in foods" :key="food.title" :food="food"/>
      </div>

      <h4 class="border-b border-gray-200 font-bold mt-12 pb-2">Most Popular</h4>

      <div class="grid lg:grid-cols-2 gap-10 mt-8">
        <!-- Cards go here -->
        <CardFood v-for="food in mostFoodPopular" :key="food.title" :food="food"/>
      </div>

      <div class="flex justify-center mt-6">
        <div class="
          btn bg-secondary-100 text-secondary-200 hover:shadow-inner
          transform hover:scale-125 transition ease-in duration-300
        ">
          Load more
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CardFood from '../components/CardFood.vue'
import Foods from '../types/Foods'
import food1 from '../assets/images/fast-food-1.jpg'
import food2 from '../assets/images/fast-food-2.jpg'
import food3 from '../assets/images/fast-food-3.jpg'
import food4 from '../assets/images/fast-food-4.jpg'
import food5 from '../assets/images/fast-food-5.jpg'
import food6 from '../assets/images/fast-food-6.jpg'
import food7 from '../assets/images/fast-food-7.jpg'
import food8 from '../assets/images/fast-food-8.jpg'
import food9 from '../assets/images/fast-food-9.jpg'
import food10 from '../assets/images/fast-food-10.jpg'

export default defineComponent({
  name: 'Home',
  setup() {
    const foods = ref<Foods[]>([
      { 
        title: '5 Bean Chille Stew', 
        author: 'Recipe by Ngoc Cuong', 
        time: '15 mins', 
        img: food1
      },
      { 
        title: 'Hanoi Sandwich House', 
        author: 'Recipe by Ngan', 
        time: '23 mins', 
        img: food2
      },
      { 
        title: 'Hotdog Xua', 
        author: 'Recipe by Ngoc Cuong', 
        time: '15 mins', 
        img: food3
      },
      { 
        title: 'Jollibee - TTTM Vincom Pham Ngoc Thach', 
        author: 'Recipe by Vincom', 
        time: '11 mins', 
        img: food4
      },
      { 
        title: 'Domino\'s Pizza - Giảng Võ', 
        author: 'Recipe by Piz', 
        time: '17 mins', 
        img: food5
      },
      { 
        title: 'Hey Bro - Burger, Pizza, Spaghetti & Fast Food', 
        author: 'Recipe by Burd', 
        time: '25 mins', 
        img: food6
      },
    ])

    const mostFoodPopular = ref<Foods[]>([
      {
        title: 'Domino\'s Pizza - Giảng Võ',
        author: 'Recipe by Burd',
        time: '29 mins',
        img: food7,
      },
      {
        title: 'Jollibee - TTTM Vincom Pham Ngoc Thach',
        author: 'Recipe by Me',
        time: '19 mins',
        img: food8,
      },
      {
        title: 'Hanoi Sandwich House',
        author: 'Recipe by Lulia',
        time: '31 mins',
        img: food9,
      },
      {
        title: 'Sandwich Cố Đô',
        author: 'Recipe by Hue',
        time: '2 mins',
        img: food10,
      },
    ])

    return {
      foods,
      mostFoodPopular
    }
  },
  components: {
    CardFood,
  },
});
</script>
