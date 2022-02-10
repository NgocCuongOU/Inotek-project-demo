<template>
  <section class="newletter-area overlay">
    <div class="container">
      <div class="row align-item">
        <div class="col col-lg-10">
          <div class="row">
            <div class="col-xs-12 col-md-7 col-lg-5">
              <div class="letter-text">
                <h4>Đăng kí bản tin của chúng tôi</h4>
                <p>
                  Đăng ký bản tin để nhận ưu đãi và về các địa điểm mới để khám
                  phá.
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-md-5 col-lg-7 align-item">
              <div class="letter-form">
                <div class="row">
                  <div class="col-xs-12 col-md-9 col-lg-9">
                    <div class="newsletter_field">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Nhập email của bạn..."
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-9 col-lg-3">
                    <div class="newletter_btn">
                      <button type="submit" class="btn">Đăng kí</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.newletter-area {
  position: relative;
  padding: 67px 0;

  background-image: url('../assets/images/newsletter.png');
  background-color: #040e27;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.newletter-area .letter-text h4 {
  height: 40px;
  margin-bottom: 11px;

  font-size: 2.4em;
  line-height: 40px;
  font-weight: 500;

  color: #464646;
}

.newletter-area .letter-text p {
  color: #494a4b;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 0;
}

.letter-form .newsletter_field input {
  width: 100%;
  height: 50px;
  padding: 4px 16px;
  border-radius: 5px;
  border: 0;

  font-size: 16px;
  font-weight: 300;

  background-color: #fff;
}

.letter-form .newsletter_field input:focus {
  outline: none;
}

.newletter_btn {
  width: 100%;
}

.newletter-area.overlay::before {
    opacity: 0.7;
}
.overlay::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgb(4, 14, 39, 0.8);
    z-index: -1;
}
</style>
