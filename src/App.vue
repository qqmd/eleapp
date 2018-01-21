<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-items">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-items">
          <router-link to="/seller">评价</router-link>
      </div>
      <div class="tab-items">
          <router-link to="/feter">内容</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
.tab
  display:flex
  text-align:center
  .tab-items
    flex:1
</style>
