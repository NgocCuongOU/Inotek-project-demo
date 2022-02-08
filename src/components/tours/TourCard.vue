<template>
  <div class="col-xs-12 col-md-4 col-lg-4">
    <div class="single-place" ref="tourId" :id="tour.id">
      <div class="booking-action-delete" @click="handleDelete()">&otimes;</div>
      <div class="thumb">
        <img :src="tour.img" alt="popular place" />
        <router-link :to="`/tours/${tour.id}`" class="price">{{ tour.price }} VNĐ</router-link>
      </div>
      <div class="place-info">
        <router-link :to="`/tours/${tour.id}`">
          <h3>
            {{ tour.title }}
          </h3>
        </router-link>
        <p>{{ tour.country }}</p>
        <div class="rating-days">
          <span>
            <router-link :to="`/tours/${tour.id}`">(20 bình luận)</router-link>
          </span>
          <div class="days">
            <router-link :to="`/tours/${tour.id}`">{{ tour.countDate }} ngày</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["tour"],
  methods: {
    ...mapActions(['deleteTour']),
    handleDelete() {
      this.deleteTour(this.$refs.tourId.id)
    }
  }
};
</script>

<style scoped>
.popular-place .single-place {
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;

  background-color: #f7fafd;

  overflow: hidden;
  transition: 0.5s;
}

.booking-action-delete {
  position: absolute;
  top: 3px;
  right: 6px;
  
  padding: 6px;

  font-size: 28px;

  cursor: pointer;
  z-index: 10;
}

.booking-action-delete:hover {
  color: rgb(212, 65, 65);
}

.popular-place .single-place:hover {
  -webkit-box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
}

.popular-place .single-place .thumb {
  position: relative;
  overflow: hidden;
}

.popular-place .single-place .thumb img {
  display: inline-block;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.popular-place .single-place .thumb a {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 7px 18px 4px 18px;

  display: inline-block;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;

  font-size: 1.6em;
  text-decoration: none;

  color: #fff;
  background-color: var(--primary-color);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.single-place .place-info {
  padding: 27px 20px 25px 20px;
}

.single-place .place-info a {
  text-decoration: none;
}

.single-place .place-info a h3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  height: 52px;
  margin-bottom: 5px;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 26px;

  color: #040e27;

  transition: 0.3s;
  overflow: hidden;
}

.single-place .place-info p {
  margin-top: 2px;
  margin-bottom: 7px;

  font-size: 1.4em;
  font-weight: 400;

  color: #7a838b;
}

.single-place .rating-days {
  display: flex;
  justify-content: space-between;
}

.single-place .rating-days span i {
  font-size: 1.2em;
  color: #fdae5c;
}

.single-place .rating-days span a {
  margin-left: 5px;

  font-size: 14px;
  color: #7a838b;
}

.single-place .place-info .rating-days .days {
  font-size: 1.4em;
  font-weight: 500;

  color: #7a838b;
}

.single-place .rating-days .days i {
  margin-right: 8px;
}

.single-place .rating-days .days a {
  color: #7a838b;
}

.popular-place .single-place:hover .place-info h3 {
  color: var(--secondary-color);
}

.popular-place .single-place:hover .thumb a {
  background-color: var(--secondary-color);
}
</style>