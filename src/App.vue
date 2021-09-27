<template>
  <div id="app">
    <main-header></main-header>
    <div>
      <div>
        <router-view />
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainHeader from "./components/main/main-header.vue";

@Component({
  components: {
    MainHeader
  }
})
export default class App extends Vue {
  stateNumber: number = 0;
}
</script>                                                                                        

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
