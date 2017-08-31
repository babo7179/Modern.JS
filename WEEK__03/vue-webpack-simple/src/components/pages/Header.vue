<template>
  <header>
    <h1>{{ message }}</h1>
    <button type="button" @click="changeHeading">change heading</button>
  </header>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data(){
    return {

    }
  },
  methods: {
    changeHeading(){
      this.$emit('change-header-content', '다시 만난 우리들의 환상 세계');
    }
  }
}
</script>

