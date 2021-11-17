<template>
  <div>
    <v-simple-table
      fixed-header
      height="100%"
      dark
      dense
      class="text-center width-5"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th>
              던전
            </th>
            <th v-for="character in characters" v-bind:key="character">
              {{ character }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="homework in homeworks" :key="homework.homeworkId">
            <td>{{ homework.homeworkName }}</td>
            <td v-for="character in characters" v-bind:key="character">
              <v-checkbox
                v-if="homework.initCycle == 7"
                class="inline"
              ></v-checkbox>
              <daily-homework-button
                :value.sync="value"
                v-if="homework.cycle == 1"
                class="inline"
              ></daily-homework-button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Homework, CharacterData } from "@/components/models/characters-model";
import DailyHomeworkButton from "@/components/main/daily-homework-button.vue";
import axios from "axios";

@Component({
  components: { DailyHomeworkButton }
})
export default class App extends Vue {
  data: String = "dd";
  value = 30;
  homeworks: Array<Homework> = [];
  characters: Array<String> = [
    "보라밑",
    "하나배",
    "이나배",
    "삼나배",
    "네나배",
    "오나배",
    "데크딘",
    "자다바",
    "보통의",
    "슈수수",
    "열두글자아이디만된다던데"
  ];
  characterData: Array<CharacterData> = [];

  async created() {
    const result = await axios.get(`/api/homeworkList`);
    this.homeworks = result.data;
    console.log(this.homeworks);
  }
}
</script>
<style lang='scss' scoped>
@for $i from 1 through 10 {
  .width-#{$i} {
    tr {
      th,
      td {
        width: 10px * $i !important;
        max-width: 10px * $i !important;
      }
    }
  }
}
.text-center {
  tr {
    th,
    td {
      text-align: center !important;
      padding: 0px 5px !important;
    }
  }
}
</style>