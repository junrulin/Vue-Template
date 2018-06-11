<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
export default {
  name: "App",
  components: {
    TopBar
  }
};
</script>

<style lang="less">
@import './style/reset.css';
@import './style/public.css';

#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  background: #F4F4F4;
}
</style>
