<template>
  <div>
    <v-col cols="12">
      <v-card>
        <v-card-title>Fixed header</v-card-title>
        <!-- <v-card-text>
          Use the <code>fixed-header</code> prop together with the
          <code>height</code> prop to fix the header to the top of the table.
        </v-card-text> -->
        <dungeon-counter-table />
      </v-card>
    </v-col>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import DungeonCounterTable from "@/pages/dungeon-counter/components/dungeon-counter-table.vue";

@Component({
  components: { DungeonCounterTable }
})
export default class App extends Vue {
  created() {}
}
</script>
<style lang='scss'>
</style>