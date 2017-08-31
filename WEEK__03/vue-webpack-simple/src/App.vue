<template>
  <div id="app">
    <!-- 정적 데이터 바인딩 -->
    <!-- <img src="./assets/food-truck.jpg" alt="다시 만난 세계, 푸드 트럭"> -->
    <!-- 동적 데이터 바인딩 -->
    <img :src="image.source" :alt="image.alternate_text">
    <app-header @change-header-content="changeHeaderContent" :message="msg"></app-header>
  </div>
</template>

<script>
  import AppHeader from './components/pages/Header.vue';
  export default {
    name: 'app',
    components: { AppHeader },
    data () {
      return {
        msg: 'Food Truck App',
        image: {
          source: require('./assets/food-truck.jpg'),
          alternate_text: '다시 만난 세계, 푸드 트럭'
        }
      }
    },
    methods: {
      changeHeaderContent(payload){
        this.msg = payload;
      }
    }
  }
</script>

<style lang="sass">
  $bg-color: #eee
  $fg-color: #212121
  // --------------------
  body
    color: $fg-color
  #app
    width: 80%
    max-width: 1200px
    margin:
      left: auto
      right: auto
    background: $bg-color
    text-align: center

</style>
