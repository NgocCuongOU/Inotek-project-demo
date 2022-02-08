<template>
  <div class="col-xs-12 col-lg-4">
    <div class="box-right">
      <div class="tour-box-info">
        <div class="tour-name">
          Du lịch Hà Nội - Yên Tử - Hạ Long - Tràng An - Sapa - Fansipan từ Sài
          Gòn
        </div>
        <div class="tour-box-detail">
          <ul>
            <li>
              <span class="tour-key">Mã chuyến đi:</span>
              <span class="tour-value">0001</span>
            </li>
            <li>
              <span class="tour-key">Thời gian:</span>
              <span class="tour-value">3 ngày 2 đêm</span>
            </li>
            <li>
              <span class="tour-key">Ngày khởi hành:</span>
              <span class="tour-value">06/09/2020</span>
            </li>
            <li>
              <span class="tour-key">Ngày kết thúc:</span>
              <span class="tour-value">21/07/2001</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="tour-box-fix">
        <div class="tour-box-price">
          <span class="tour-box-price__text">Giá từ:</span>
          <span class="tour-box-price__num">1.299.999đ</span>
          <span class="tour-box-price__nor">1.999.999đ</span>
        </div>
        <div class="tour-box-btn text-center">
          <a href="./bookingTour.html" class="btn btn-tdetail">Đặt vé</a>
        </div>
      </div>
      <div class="tour-box-index">
        <ul>
          <li class="active">
            <a href="#journey">
              <span><i class="fas fa-info-circle mr-3"></i></span>
              Điểm nhấn hành trình
            </a>
          </li>
          <li>
            <a href="#journey-map">
              <span><i class="fas fa-map-marked mr-3"></i></span>
              Lịch trình
            </a>
          </li>
          <li>
            <a href="#services">
              <span><i class="fas fa-paperclip mr-3"></i></span>
              Dịch vụ bao gồm và không bao gồm
            </a>
          </li>
          <li>
            <a href="#note">
              <span><i class="far fa-sticky-note mr-3"></i></span>
              Ghi chú
            </a>
          </li>
          <li>
            <a href="#comment">
              <span><i class="far fa-comments mr-3"></i></span>
              Bình luận
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InforRightTour'
};
</script>

<style>
</style>