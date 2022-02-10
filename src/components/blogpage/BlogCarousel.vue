<template>
  <div class="bradcam bradcam-img">
    <div class="container">
      <div class="row">
        <div class="col col-lg-12">
          <div class="bradcam-text">
            <h3>Tin tức</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              inventore!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped>

.bradcam-img {
  background-image: url('../../assets/images/bradcam4.png');
}

.container-slide {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.bradcam {
  position: relative;

  margin-top: 140px;
  padding: 175px 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  z-index: 0;
}

.bradcam:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: #040e27;

  opacity: 0.15;
  z-index: -1;
}

.bradcam .bradcam-text {
  text-align: center;
}

.bradcam .bradcam-text h3 {
  font-size: 8em;
  font-weight: 500;
  line-height: 90px;
  text-transform: capitalize;
  font-family: "Nothing You Could Do", cursive;

  color: #fff;
}

.bradcam .bradcam-text p {
  padding: 8px 0;
  font-size: 1.8em;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
}
</style>
