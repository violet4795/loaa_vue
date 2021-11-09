<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { computed } from "@vue/composition-api";
// import { useRouter } from "@/utils";

@Component({
  name: "App"
})
export default class App extends Vue {}
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
</style>
