<template>
  <v-toolbar color="purple" dark>
    <v-toolbar-title>loaa</v-toolbar-title>
    <!-- v-for="index in data" :key="index">{{
      index
    }} -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text @click="go('character-search')">캐릭터 조회</v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn text @click="go('-1')">각인 계산기</v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn text @click="go('homework-counter')">휴식게이지 관리</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  data: any = ["1", "2", "3", "4"];

  go(path: string) {
    this.$router.push(path);
  }
}
</script>                                                                                        

<style lang="scss">
</style>
