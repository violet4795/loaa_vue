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
          <tr v-for="dungeon in dungeons" :key="dungeon.dungeonName">
            <td>{{ dungeon.dungeonName }}</td>
            <td v-for="character in characters" v-bind:key="character">
              <v-checkbox
                v-if="dungeon.initCycle == 7"
                class="inline"
              ></v-checkbox>
              <daily-dungeon-button
                :count="dungeon.executeCount"
                :value.sync="value"
                v-if="dungeon.initCycle == 1"
                class="inline"
              ></daily-dungeon-button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Dungeon, CharacterData } from "@/components/models/characters-model";
import DailyDungeonButton from "@/components/main/daily-dungeon-button.vue";

@Component({
  components: { DailyDungeonButton }
})
export default class App extends Vue {
  data: String = "dd";
  value = 30;
  dungeons: Array<Dungeon> = [
    {
      dungeonCode: "ChaosDungeon",
      dungeonName: "Chaos Dungeon",
      dungeonType: "ChaosDungeon",
      minLevel: 1,
      maxLevel: 9999,
      isCommander: false,
      initCycle: 1,
      executeCount: 2
    },
    {
      dungeonCode: "Guardian",
      dungeonName: "Guardian",
      dungeonType: "Guardian",
      minLevel: 1,
      maxLevel: 9999,
      isCommander: false,
      initCycle: 1,
      executeCount: 2
    },
    {
      dungeonCode: "EphonaQuest",
      dungeonName: "Ephona Quest",
      dungeonType: "EphonaQuest",
      minLevel: 1,
      maxLevel: 9999,
      isCommander: false,
      initCycle: 1,
      executeCount: 3
    },
    {
      dungeonCode: "Abyss1325",
      dungeonName: "Oreha",
      dungeonType: "Abyss",
      minLevel: 1325,
      maxLevel: 1415,
      isCommander: false,
      initCycle: 7
    },
    {
      dungeonCode: "AbyssLaid1370",
      dungeonName: "Argos",
      dungeonType: "AbyssLaid",
      minLevel: 1370,
      maxLevel: 1475,
      isCommander: false,
      initCycle: 7
    },
    {
      dungeonCode: "CommanderLaid1415",
      dungeonName: "Valtan",
      dungeonType: "CommanderLaid",
      minLevel: 1415,
      maxLevel: 9999,
      isCommander: true,
      initCycle: 7
    },
    {
      dungeonCode: "CommanderLaid1430",
      dungeonName: "Biackiss",
      dungeonType: "CommanderLaid",
      minLevel: 1430,
      maxLevel: 9999,
      isCommander: true,
      initCycle: 7
    },
    {
      dungeonCode: "CommanderLaid1475",
      dungeonName: "Kouku Saton",
      dungeonType: "CommanderLaid",
      minLevel: 1475,
      maxLevel: 9999,
      isCommander: true,
      initCycle: 7
    },
    {
      dungeonCode: "CommanderLaid1490",
      dungeonName: "Abrelshud",
      dungeonType: "CommanderLaid",
      minLevel: 1490,
      maxLevel: 9999,
      isCommander: true,
      initCycle: 7
    }
  ];
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