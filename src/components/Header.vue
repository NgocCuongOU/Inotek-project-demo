<template>
  <header id="header">
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col col-lg-12">
            <div class="number-contact">
              <p>
                <i class="fas fa-phone-alt"></i>
                Hotline:
                <a href="tel:1900 0909 09"><strong>1900 0909 09</strong></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container no-gutters-mobile">
      <div class="row header">
        <div class="col col-lg-2 hide-on-tablet">
          <div class="logo">
            <h1 class="logo__heading">
              <a href="#">
                <img src="../assets/images/logo.png" alt="travel ck" />
              </a>
            </h1>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div class="bars-top">
            <i class="fas fa-bars"></i>
          </div>
          <ul class="navbar-list">
            <li class="navbar-list__item active">
              <router-link to="/">Trang chủ</router-link>
            </li>
            <li class="navbar-list__item">
              <a href="#">Du lịch <i class="fas fa-caret-down"></i></a>
              <ul class="sub-nav">
                <li class="sub-nav__list">
                  <a href="">Du lịch trong nước</a>
                </li>
                <li class="sub-nav__list">
                  <a href="">Du lịch ngoài nước</a>
                </li>
              </ul>
            </li>
            <li class="navbar-list__item">
              <a href="">Vé máy bay</a>
            </li>
            <li class="navbar-list__item">
              <router-link :to="{ name: 'Blogs' }">Tin tức</router-link>
            </li>
            <li class="navbar-list__item">
              <a href="">Liên hệ</a>
            </li>
            <li class="navbar-list__item">
              <a href="">Về chúng tôi</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-2">
          <div class="login">
            <div class="user-wrapper">
              <div class="wrap" @click="handleShow">
                <span class="user-header" >Tạo tour du lịch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BookingForm :show="show" />
  </header>
</template>

<script>
import BookingForm from '../components/tours/BookingForm.vue'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleShow() {
      this.show = !this.show
    }
  },
  components: {
    BookingForm,
  }
};
</script>

<style scoped>
.top-header {
  height: 40px;
  background-color: #505768;
}

.number-contact p {
  font-size: 1.6em;
  line-height: 40px;
  color: #fff;

  cursor: pointer;
}

.bars-top {
  display: none;
  position: fixed;
  top: -5px;
  right: 10px;
  padding: 10px;
  font-size: 2rem;
  color: #fff;
}

.number-contact p strong {
  font-size: 1.3em;

  color: var(--secondary-color);
}

.number-contact p i {
  margin-right: 4px;
  color: var(--secondary-color);
}

/* ------------ header ----------------- */
#header {
  position: fixed;
  top: 0px;
  height: 140px;
  width: 100%;
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);

  background: rgba(255, 255, 255, 1);
  z-index: 10;
}

.btn:hover {
  opacity: 0.9;
}

.overlay {
  position: relative;
  z-index: 0;
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
  background-color: #040e27;
  z-index: -1;
}

#header .header {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.header .logo .logo__heading {
  height: 40px;
  width: 140px;
  margin: 30px;
  margin-left: 0;
}

.header .logo .logo__heading img {
  cursor: default;
  user-select: none;
}

/* -------------------- Navbar ---------------------- */
.login {
  justify-content: flex-end;
}

.login,
.login .user-wrapper {
  display: flex;
  align-items: center;

  cursor: pointer;
}

.login .user-wrapper .user-icon {
  display: inline-block;
  margin-left: 16px;
  padding: 12px 4px;

  font-size: 2em;
}

.user-wrapper .wrap {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-wrapper .wrap::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 125%;
  height: 35px;
}

.login .user-wrapper .user-down {
  display: inline-block;
  padding: 12px 2px;

  font-size: 1.6em;
}

.login .user-wrapper .user-header {
  display: inline-block;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid rgb(22, 218, 136);

  font-size: 1.6em;
  font-weight: 500;
  line-height: 40px;
  text-align: left;

  color: #fff;
  background-color: #1ec6b6;
  overflow: hidden;
}

.user-wrapper .wrap:hover {
  color: var(--primary-color);
}

.user-dropdown {
  position: absolute;
  top: 80%;
  right: 0;
  min-width: 250px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);

  background-color: #fff;

  list-style-type: none;

  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
}

.user-wrapper .wrap:hover .user-dropdown {
  top: 130%;
  visibility: visible;
  opacity: 1;
}

.user-wrapper .user-dropdown .user-manage__text {
  border-bottom: 1px solid #ccc;
}

.user-wrapper .user-dropdown .user-manage__text .user-manage {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;

  color: #494b55;
}

.user-dropdown .btn-login-wrap {
  padding: 12px;
}

.user-dropdown .btn-login-wrap .btn-login {
  display: inline-block;
  width: 100%;
  padding: 12px;
  border-radius: 3px;

  text-decoration: none;
  text-align: center;
  font-size: 1.6em;
  font-weight: 500;

  color: #fff;
  background-color: var(--primary-color);
  transition: 0.3s;
}

.user-dropdown .btn-login-wrap .btn-logout {
  background-color: var(--secondary-color);
}

.user-dropdown .btn-login-wrap .btn-login:hover {
  background-color: rgba(30, 198, 182, 0.8);
}

.user-dropdown .btn-login-wrap .btn-logout:hover {
  background-color: var(--secondary-color);

  opacity: 0.8;
}

.user-dropdown .register-text {
  padding: 4px 12px 13px;
  text-align: center;

  color: #494b55;
  font-size: 1.4em;
}

.register-text .register-link {
  color: var(--secondary-color);
}

.header .socials-wrap {
  display: flex;
  justify-content: flex-end;
}

.header .socials-wrap {
  display: none;
}

.header .logo .logo__heading a {
  display: inline-block;
}

.header .logo__heading img {
  display: inline-block;
  width: 100%;
}

.header .navbar-list {
  display: flex;
  justify-content: center;
}

.header .navbar-list .navbar-list__item {
  position: relative;

  padding: 12px 5px;
  margin-right: 10px;

  font-size: 1.6em;
  font-weight: 500;
  list-style-type: none;
}

.header .navbar-list .navbar-list__item::before {
  content: "";
  position: absolute;
  top: 70%;
  left: 0;
  display: block;
  height: 60px;
  width: 100%;
}

.header .navbar-list .navbar-list__item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  height: 2px;
  width: 0px;

  background-color: var(--primary-color);
  transition: 0.3s;
}

.header .navbar-list .navbar-list__item:hover::after {
  width: 100%;
}

.header .navbar-list .navbar-list__item.active > a {
  color: var(--secondary-color);
}

.header .navbar-list .navbar-list__item:hover > a {
  color: var(--primary-color);
  transition: 0.3s;
}

.header .navbar-list .navbar-list__item a {
  text-decoration: none;

  color: var(--text-color);
}

.header .navbar-list .navbar-list__item:hover .sub-nav {
  top: 155%;
  visibility: visible;
  opacity: 1;
}

.header .navbar-list__item .sub-nav {
  position: absolute;
  top: 120%;
  left: 0;

  width: 200px;

  background-color: #fff;

  box-shadow: 0 0 10px rgb(0 0 0 / 6%);
  visibility: hidden;
  opacity: 0;
  transition: 0.6s;
  z-index: 10;
}

.navbar-list__item .sub-nav .sub-nav__list {
  list-style-type: none;
}

.navbar-list__item .sub-nav .sub-nav__list:hover {
  background-color: rgb(170, 183, 177, 0.1);
}

.navbar-list__item .sub-nav .sub-nav__list:hover a {
  color: var(--primary-color);
}

.navbar-list__item .sub-nav .sub-nav__list a {
  display: inline-block;
  padding: 10px 15px;

  font-size: 14px;
}

/*  ----------------- Socials ------------------------- */
.header .socials-list {
  display: flex;
}

.header .socials-list .socials-list__item {
  font-size: 1.6em;
  list-style-type: none;
}

.header .socials-list .socials-list__item:hover a {
  color: var(--secondary-color);
  transition: 0.6s;
}

.header .socials-list .socials-list__item a {
  margin: 3px;
  padding: 5px;

  text-decoration: none;
  color: #aab1b7;
}

.socials-list__item:last-child {
  border-right: 1px solid #eaeaea;
}
</style>
