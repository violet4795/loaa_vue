<template>
  <div>
    <v-simple-table fixed-header height="100vh" dark dense class="text-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="width-10 max-width-10 min-width-5">
              던전
            </th>
            <th
              v-for="character in characters"
              v-bind:key="character.characterKey"
              class="max-width-8 width-8 "
            >
              {{ character.characterName }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="homework in homeworks" :key="homework.homeworkId">
            <td class="width-10 max-width-10 min-width-5">
              {{ homework.homeworkName }}
            </td>
            <td
              class="min-width-8 "
              v-for="character in characters"
              v-bind:key="character.characterKey"
            >
              <v-checkbox
                :disabled="homework.startLevel > character.characterLevel"
                v-if="homework.cycle == 7"
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
import {
  Homework,
  Character,
  CharacterData
} from "@/components/models/characters-model";
import DailyHomeworkButton from "@/components/main/daily-homework-button.vue";
import axios from "axios";

@Component({
  components: { DailyHomeworkButton }
})
export default class App extends Vue {
  data: String = "dd";
  value = 30;
  homeworks: Array<Homework> = [];
  characters: Array<Character> = [];
  characterData: Array<CharacterData> = [];

  async created() {
    const result = await axios.get(`/api/homeworkList`, {
      validateStatus: function(status) {
        if (status == 500) {
          // alert("백엔드 서버가 꺼져있네요. 지금은 안된다는 뭐 그런거죠.");
          return false;
        } else return true;
      }
    });
    this.homeworks = result ? result.data : {};
    console.log(this.homeworks);
    const charactersResult = await axios.get(`/api/characterList`, {
      validateStatus: function(status) {
        if (status == 500) {
          // alert("백엔드 서버가 꺼져있네요. 지금은 안된다는 뭐 그런거죠.");
          return false;
        } else return true;
      }
    });
    this.characters = charactersResult ? charactersResult.data : {};
    console.log(this.characters);
  }
}
</script>
<style lang='scss' scoped>
@for $i from 1 through 10 {
  .max-width-#{$i} {
    max-width: 10px * $i !important;
  }
}
@for $i from 1 through 30 {
  .width-#{$i} {
    width: 10px * $i !important;
  }
}
@for $i from 1 through 30 {
  .min-width-#{$i} {
    width: 10px * $i !important;
  }
}
// @for $i from 1 through 10 {
//   .width-#{$i} {
//     tr {
//       th,
//       td {
//         width: 10px * $i !important;
//         max-width: 10px * $i !important;
//       }
//     }
//   }
// }
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