<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>

export default {
  name: 'FadeAnimation'
}
</script>

<style scoped>
  .v-enter,.v-leave-to{
    /* height: 0; */
    opacity: 0;
  }
  .v-enter-active,.v-leave-active{
    transition: opacity 1s 
  }
    
</style>