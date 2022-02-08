<template>
  <div class="col col-lg-12">
    <div class="popular-place-pagi">
      <ul>
        <li class="arrow disabled">&lt;</li>
        <li class="num active">1</li>
        <li class="num">2</li>
        <li class="num">3</li>
        <li class="num">...</li>
        <li class="num">10</li>
        <li class="arrow">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popular-place-pagi {
  margin-top: 20px;
}

.popular-place-pagi ul {
  text-align: center;
}

.popular-place-pagi ul li {
  display: inline-block;
  padding: 8px 12px;
  font-size: 1.8em;
  font-weight: 400;

  color: #7a838b;

  cursor: pointer;
  transition: all 0.3s linear;
}

.popular-place-pagi ul .num.active {
  color: var(--secondary-color);
  cursor: unset;
}

.popular-place-pagi ul li:hover:not(.disabled) {
  color: var(--secondary-color);
}

.popular-place-pagi ul .disabled {
  cursor: unset;
  opacity: 0.4;
}
</style>