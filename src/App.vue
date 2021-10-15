<template>
  <div id="app">
    <v-app>
      <main-header></main-header>
      <div>
        <div>
          <router-view />
        </div>
      </div>
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    </v-app>
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
html,
body {
  height: 100%;
  background-color: #00000099;
}
.inline {
  display: inline-block !important; // vuetify에 의해 변경되지 않도록 수정
}
.mt-5 {
  margin-top: 5px;
}
</style>
