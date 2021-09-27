<template>
  <div>
    <v-data-table
      :headers="characters"
      :items="dungeons"
      :items-per-page="5"
      :dark="true"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { dungeon } from "../components/models/characters-model";
@Component({
  components: {}
})
export default class App extends Vue {
  data: String = "dd";
  dungeons: Array<dungeon> = [{ dungeonCode: "d1", dungeonName: "oreha" }];
  characters: Array<String> = [
    "보라밑",
    "하나배",
    "이나배",
    "삼나배",
    "네나배",
    "오나배",
    "데크딘",
    "보라밑",
    "하나배",
    "이나배",
    "삼나배",
    "네나배",
    "오나배",
    "데크딘"
  ];
}
</script>
<style lang='scss'>
</style>