<template>
  <component :is="resolveLayout">
    <v-app>
      <!-- <main-header></main-header> -->
      <router-view />
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    </v-app>
  </component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainHeader from "./components/main/main-header.vue";
import LayoutBlank from "@/layouts/Blank.vue";
import LayoutContent from "@/layouts/Content.vue";
// import { computed } from "@vue/composition-api";
// import { useRouter } from "@/utils";

@Component({
  components: {
    LayoutBlank,
    LayoutContent,
    MainHeader
  }
})
export default class App extends Vue {
  stateNumber: number = 0;

  route = this.$route;
  resolveLayout() {
    // Handles initial route
    if (this.route.name === null) return null;

    if (this.route.meta?.layout === "blank") return "layout-blank";

    return "layout-content";
  }
  // setup() {
  //   const { route } = useRouter()

  //   const resolveLayout = computed(() => {
  //     // Handles initial route
  //     if (route.value.name === null) return null

  //     if (route.value.meta.layout === 'blank') return 'layout-blank'

  //     return 'layout-content'
  //   })

  //   return {
  //     resolveLayout,
  //   }
  // },
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
