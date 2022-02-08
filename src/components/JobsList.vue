<template>
  <div class="jobs-list">
    <transition-group name="list" tag="ul">
      <p>Order by {{ order }}</p>
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <img src="../assets/icon.png"/>
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="desciption">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dicta, temporibus atque corrupti dignissimos id unde aut harum itaque ea sapiente culpa tempore autem beatae aperiam soluta, suscipit consequuntur eligendi praesentium velit! Fugiat non repellendus officia, eaque eveniet laborum quod rerum natus beatae, rem quidem a nobis aliquam, tempore sed sunt ipsam excepturi expedita labore nulla consectetur reiciendis impedit quae? Fugit est eligendi natus vel quisquam accusantium consequuntur! Sed nulla, qui itaque modi nostrum, corrupti quaerat odit et sit quisquam culpa consequatur laboriosam consectetur a mollitia, sequi ad deserunt commodi sapiente ratione saepe soluta aperiam? Inventore quas dignissimos itaque fugit!
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Jobs from '../types/Jobs'
import OrderTerm from '../types/OrderTerm'

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Jobs[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((firstJob: Jobs, secondJob: Jobs) => {
        return firstJob[props.order] > secondJob[props.order] ? 1 : -1
      }) 
    })

    return {
      orderedJobs
    }
  },
})
</script>

<style scoped>
  .jobs-list {
    max-width: 940px;
    margin: 0 auto;
  }

  .jobs-list ul {
    list-style-type: none;
  }

  .jobs-list ul li {
    padding: 12px 24px;
    margin-bottom: 12px;
    border-radius: 8px;

    background-color: #fff;
  }

  .jobs-list ul li h2 {
    text-transform: uppercase;
  }

  .jobs-list .salary p {
    font-weight: bold;

    color: rgb(33, 214, 33);
  }

  .salary {
    display: flex;
  }
  
  .salary img {
    max-width: 40px;
    margin-right: 12px;
  }

  .list-move {
    transition: all 0.8s;
  }
</style>