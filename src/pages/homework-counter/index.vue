<template>
  <div>
    <v-col cols="12">
      <v-card>
        <v-card-title>던전 관리</v-card-title>
        <homework-counter-table />
      </v-card>
    </v-col>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import HomeworkCounterTable from "@/pages/homework-counter/components/homework-counter-table.vue";

@Component({
  components: { HomeworkCounterTable }
})
export default class App extends Vue {
  created() {}
}
</script>
<style lang='scss'>
</style>