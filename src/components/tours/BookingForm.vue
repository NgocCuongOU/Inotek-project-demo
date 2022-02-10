<template>
  <div class="booking-modal" v-show="show">
    <div class="booking-content">
      <div class="booking-content__heading">
        Thêm tour du lịch
        <div class="booking-action-delete" @click.stop="show = false">&otimes;</div>
      </div>
      <div class="booking-content__body">
        <form @submit.prevent="handSubmit">
          <div class="form-group">
            <label for="tourName" class="form-label">Tour name</label>
            <input type="text" v-model="tourName" class="form-control form-control-lg" id="tourName" aria-describedby="tourName" placeholder="Enter tour name">           
          </div>
          <div class="form-group">
            <label for="country" class="form-label">Country</label>
            <input type="text" v-model="country" class="form-control form-control-lg" id="country" placeholder="Country...">
          </div>
          <div class="form-group">
            <label for="priceId" class="form-label">Price</label>
            <input type="number" v-model="price" class="form-control form-control-lg" id="priceId" placeholder="Your price">
          </div>
          <div class="form-group">
            <label for="priceId" class="form-label">Date count</label>
            <input type="number" v-model="dateCount" class="form-control form-control-lg" id="priceId" placeholder="Your date">
          </div>
          <div class="form-group">
            <label for="priceId" class="form-label">Image</label>
            <input type="file" ref="img" @change="previewFiles" class="form-control form-control-lg" id="priceId" placeholder="Your img">
          </div>
          <div class="booking-content__footer">
            <button class="btn success" type="submit">Thêm</button>
            <button class="btn denied" @click.stop="show = false">Huỷ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    show: {
      required: true,
      type: Boolean,
    }
  },
  data() {
    return {
      tourName: '',
      country: '',
      price: 0,
      dateCount: 0,
      img: []
    }
  },
  methods: {
    ...mapActions(['updateTours']),
    previewFiles() {
      this.img = this.$refs.img.files[0].name
    },
    handSubmit() {
      console.log(this.img)
      this.updateTours({
        title: this.tourName,
        country: this.country,
        price: this.price,
        dateCount: this.dateCount,
        img: this.img
      })
    }
  }
};
</script>

<style scoped>
.booking-content__footer {
  margin-top: 12px;
}

.booking-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(236, 223, 207, 0.4);
  z-index: 10;
}

.booking-modal .booking-content {
  margin: 300px auto;
  max-width: 500px;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 0 8px #7e7070;

  background-color: rgb(245, 250, 253);
}

.form-label {
  font-size: 16px;
}

.booking-modal .booking-content .booking-content__heading {
  position: relative;
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  color: #424040;
}

.booking-content .booking-content__heading .booking-action-delete {
  position: absolute;
  top: 0px;
  right: 10px;
  
  cursor: pointer;
}


.booking-content__footer {
  display: flex;
  justify-content: space-evenly;
}

.booking-content__footer .btn {
  width: 90px;
  padding: 5px 10px;
}

.booking-content__footer .btn.success {
  background-color: rgb(30, 198, 182);
}

.booking-content__footer .btn.success:hover {
  opacity: 0.8;
}
</style>