<template>
  <div>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              던전
            </th>
            <th
              v-for="character in characters"
              v-bind:key="character"
              class="text-left"
            >
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
                :value="33"
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
import { dungeon } from "../components/models/characters-model";
import DailyDungeonButton from "../components/main/daily-dungeon-button.vue";
@Component({
  components: { DailyDungeonButton }
})
export default class App extends Vue {
  data: String = "dd";
  dungeons: Array<dungeon> = [
    {
      dungeonCode: "ChaosDungeon",
      dungeonName: "ChaosDungeon",
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
      dungeonName: "EphonaQuest",
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
      dungeonName: "Kouku-Saton",
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
    "슈수수"
  ];
  created() {}
}
</script>
<style lang='scss'>
</style>