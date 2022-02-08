<template>
  <div class="main">
    <h1 class="heading">Hyrule jobs</h1>
    <div class="actions">
      <button @click="handleClick('title')">order by title</button>
      <button @click="handleClick('salary')">order by salary</button>
      <button @click="handleClick('location')">order by location</button>
    </div>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JobsList from './components/JobsList.vue'
import OrderTerm from './types/OrderTerm'
import Jobs from './types/Jobs'

export default defineComponent({
  setup() {
    const jobs = ref<Jobs[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1'},
      { title: 'quarryman', location: 'death mountain', salary: 12000, id: '2'},
      { title: 'flute player', location: 'the lost woods', salary: 2000, id: '3'},
      { title: 'fisherman', location: 'lake hylia', salary: 3300, id: '4'},
      { title: 'prison guard', location: 'gerudo valley', salary: 13000, id: '5'},
    ])

    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return {
      jobs,
      order,
      handleClick
    }
  },
  components: {
    JobsList
  }
})
</script>


<style scoped>
  .heading {
    text-align: center;
    color: rgb(14, 114, 19);
  }

  .actions {
    text-align: center;
  }

  .actions button {
    padding: 12px;
    border-radius: 4px;
    border-color: rgb(14, 114, 19);

    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
  }

  .actions button:hover {
    background-color: bisque;
    transition: all 0.4s;
  }

  .actions button:not(:last-child) {
    margin-right: 12px;
  }
</style>
