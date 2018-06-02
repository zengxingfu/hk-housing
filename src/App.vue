<template>
  <transition mode="out-in">
   <router-view></router-view>
  </transition>
</template>

<script>
</script>


<style>
/* 过渡动画 */
.v-enter {
  opacity: 0.5;
}
.v-enter-active {
  transition: 0.1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0.5;
}
.v-leave-active {
  transition: 0.1s;
}
</style>