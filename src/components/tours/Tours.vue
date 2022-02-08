<template>
  <section id="popular-place-id" class="travel-main popular-place">
    <div class="container">
      <div class="row align-item">
        <div class="col col-lg-6">
          <div class="section-title">
            <h3>Các tour du lịch phổ biến</h3>
            <p>
              Hãy ngắm nhìn thế giới. Điều đó tuyệt vời hơn bất cứ giấc mơ nào.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <TourCard v-for="tour in getTours" :key="tour.id" :tour="tour" />
      </div>
      <div class="row">
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TourCard from '../tours/TourCard.vue'
import Pagination from '../Pagination.vue'

export default {
  computed: {
    ...mapGetters(['getTours'])
  },
  components: {
    TourCard,
    Pagination
  },
};
</script>

<style scoped>
.popular-place {
  margin-top: 160px;
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

.section-title p {
    margin-bottom: 62px;

    font-size: 1.6em;
    line-height: 28px;
    font-weight: 400;
    text-align: center;

    color: #7A838B;
}
</style>