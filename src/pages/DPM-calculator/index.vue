<template>
  <v-container fluid>
    <v-card>
      <v-row dense>
        <!-- <v-card-title>CLASS</v-card-title> -->
        <warrior :col="2.4"></warrior>
        <fighter :col="2.4"></fighter>
        <hunter :col="2.4"></hunter>
        <magician :col="2.4"></magician>
        <assassin :col="2.4"></assassin>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Warrior from "./warrior/index.vue";
import Fighter from "./fighter/index.vue";
import Hunter from "./hunter/index.vue";
import Magician from "./magician/index.vue";
import Assassin from "./assassin/index.vue";

@Component({
  components: { Warrior, Fighter, Hunter, Magician, Assassin }
})
export default class App extends Vue {}
</script>
<style lang='scss'>
</style>