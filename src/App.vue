<template>
  <div id="app" class="app">
    <transition name="rotate-fall">
        <router-view  class="app-router-view"></router-view>
    </transition>
    <loading></loading>
  </div>
</template>
<script>
import loading from './components/loading'
export default {
  components: {
    loading,
  }
}
</script>
<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
}
</style>
