<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./GlobalStyles"
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
  components: {
    Header,
    Footer
  }
})
</script>

<style>
:root {
  --primary-color: #1ec6b6;
  --secondary-color: #ff4a52;
  --text-color: #040e27;
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  line-height: 1.6em;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  height: 100%;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

label,
h5,
p {
  margin: 0;
}

.align-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear::after {
  content: "";
  display: block;
  clear: both;
}

.btn {
  width: 134px;
  padding: 11px 20px;
  border-radius: 5px;

  font-size: 1.8rem;

  font-weight: 700;

  background-color: var(--secondary-color);
  color: #fff;

  border: 0;
  cursor: pointer;
  transition: 0.6s;
}

.btn:hover {
  color: #fff;
  background-color: var(--primary-color);
}

.carousel-item {
  height: 415px;
}

@keyframes fade {
  from {
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
}

@keyframes growth {
  from {
    transform: scale(var(--growth-begin));
  }
  to {
    transform: scale(var(--growth-end));
  }
}
</style>
