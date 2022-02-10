<template>
  <aside class="single-sidebar-widget search-widget">
                <form action="">
                  <div class="form-group">
                    <input
                      required=""
                      type="text"
                      name=""
                      id=""
                      placeholder="Nhập từ khóa..."
                    />
                    <div class="input-group-append">
                      <button class="input-btn">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-btn">
                    <button class="btn-sidebar">Tìm kiếm</button>
                  </div>
                </form>
              </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
<style scoped>
.single-sidebar-widget .form-group {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}

.single-sidebar-widget .form-group input {
  width: 100%;
  height: 50px;
  border: 1px solid #f0e9ff;
  border-right: none;
  padding: 5px 0 5px 8px;

  font-size: 1.4rem;

  color: #999999;
}

.single-sidebar-widget .form-group .input-group-append button {
  height: 100%;
  border: 1px solid #f0e9ff;
  border-left: none;
  padding: 4px 15px;

  color: #999999;
  background-color: #fff;

  cursor: pointer;
}

.single-sidebar-widget .input-group-append button i {
  font-size: 1.4rem;
  color: #999999;
}

.single-sidebar-widget .form-group input:focus {
  outline: none;
}

.single-sidebar-widget .btn-sidebar {
  width: 100%;
  padding: 14px 44px;
  border: 1px solid #1ec6b6;

  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  color: #fff;
  background-color: #1ec6b6;
  transition: all 0.3s linear;
}

.single-sidebar-widget .btn-sidebar:hover {
  border-color: var(--secondary-color);
  background-color: var(--secondary-color);
  cursor: pointer;
}
</style>
