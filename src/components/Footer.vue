<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 col-lg-4">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="">
                  <img src="../assets/images/logo.png" alt="travelCK" />
                </a>
              </div>
              <ul class="footer-info">
                <li class="footer-info__item">
                  <a href="">191/12 Phạm Huy Thông, Phường 6, Gò Vấp</a>
                </li>
                <li class="footer-info__item">
                  <a href="tel:+8437152172">+8437152172</a>
                </li>
                <li class="footer-info__item">
                  <a href="mailto:cuong.cn0103@gmail.com"
                    >cuong.cn0103@gmail.com</a
                  >
                </li>
              </ul>
              <ul class="footer-socials__list">
                <li class="footer-socials__item">
                  <a href=""></a>
                </li>
                <li class="footer-socials__item">
                  <a href=""></a>
                </li>
                <li class="footer-socials__item">
                  <a href=""></a>
                </li>
                <li class="footer-socials__item">
                  <a href=""></a>
                </li>
                <li class="footer-socials__item">
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-2 col-lg-2">
            <div class="footer-widget">
              <h3 class="footer-title">Công ty</h3>
              <ul class="footer-links">
                <li class="footer-item">
                  <a href="">Định giá</a>
                </li>
                <li class="footer-item">
                  <a href="">Bộ sưu tập</a>
                </li>
                <li class="footer-item">
                  <a href="">Kết nối</a>
                </li>
                <li class="footer-item">
                  <a href="">Về chúng tôi</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-md-3 col-lg-3">
            <div class="footer-widget">
              <h3 class="footer-title">Địa điểm nổi tiếng</h3>
              <ul class="footer-links-double">
                <li class="footer-links-double__item">
                  <a href="">Indonesia</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Thái Lan</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Singapore</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Malaysia</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Myanmar</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Laos</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Campuchia</a>
                </li>
                <li class="footer-links-double__item">
                  <a href="">Timor-leste</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-md-3 col-lg-3">
            <div class="footer-widget">
              <h3 class="footer-title">Instagram</h3>
              <div class="instagram-feed">
                <div class="single-insta">
                  <a href="">
                    <img
                      src="../assets/images/instagram/instagram-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single-insta">
                  <a href="">
                    <img
                      src="../assets/images/instagram/instagram-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single-insta">
                  <a href="">
                    <img
                      src="../assets/images/instagram/instagram-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="single-insta">
                  <a href="">
                    <img
                      src="../assets/images/instagram/instagram-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col col-lg-12">
            <div class="copy-right">
              <p>
                Copyright © 2022 Đã đăng kí bản quyền | Mọi thông tin xin liên
                hệ về
                <strong>Travel CK</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  padding: 70px 0;
  background-color: #040e27;
}

.footer-top .footer-widget {
  height: 100%;
}

.footer-widget .footer-logo {
  margin-bottom: 40px;
}

.footer-widget .footer-title {
  margin-bottom: 45px;

  font-size: 2em;
  font-weight: 400;
  color: #fff;
}

.footer-widget .footer-logo a {
  display: block;
}

.footer-widget .footer-logo img {
  display: block;
  width: 50%;
  border-radius: 100px;
}

.footer-widget .footer-info__item {
  height: 30px;
  list-style-type: none;
}

.footer-widget .footer-info__item a {
  font-size: 1.6em;
  line-height: 30px;
  text-decoration: none;

  color: #aab1b7;

  transition: 0.4s;
}

.footer-widget .footer-info__item a:hover {
  color: var(--secondary-color);
}

.footer-widget .footer-info__item a i {
  margin-right: 6px;
}

.footer-widget .footer-info__item:nth-child(2) a i {
  padding-left: 3px;
  padding-right: 2px;
}

.footer-socials__list {
  display: flex;

  margin-top: 47px;
  list-style-type: none;
}

.footer-socials__item a {
  display: inline-block;
  padding: 5px;

  font-size: 1.4em;
  line-height: 24px;

  color: #aab1b7;
  transition: 0.4s;
}

.footer-socials__item:not(:last-child) {
  margin-right: 14px;
}

.footer-socials__item a:hover {
  color: var(--secondary-color);
}

.footer-links-double,
.footer-widget .footer-links {
  position: relative;
  top: -14px;

  list-style-type: none;
}

.footer-links-double__item a,
.footer-links .footer-item a {
  padding: 5px;

  text-decoration: none;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 36px;

  color: #aab1b7;
  transition: 0.4s;
}

.footer-links .footer-item a:hover,
.footer-links-double__item a:hover {
  color: var(--secondary-color);
}

.footer-links-double__item {
  width: 50%;
  float: left;
}

.instagram-feed {
  position: relative;
  top: -9px;

  height: 100%;
}

.instagram-feed .single-insta {
  width: 50%;
  padding: 7.5px;
  float: left;
}

.single-insta a {
  display: block;
}

.single-insta a img {
  width: 100%;
  border-radius: 5px;
}

/* ---------------- Copyright ---------------- */

.footer-copyright .copy-right {
  margin-top: 135px;
  border-top: 1px solid #363e52;

  text-align: center;
}

.footer-copyright .copy-right p {
  padding-top: 26px;
  font-size: 1.4em;

  color: #7a838b;
}
</style>