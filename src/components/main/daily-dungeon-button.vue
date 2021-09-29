<template>
  <v-radio-group column>
    <!-- <v-radio
      v-for="index in count"
      :label="index"
      :color="index"
      :value="index"
      :key="index"
    ></v-radio> -->
    <v-radio
      label="red darken-3"
      color="red darken-3"
      value="red darken-3"
    ></v-radio>
  </v-radio-group>
</template>
<script lang='ts'>
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
@Component({
  components: {}
})
export default class App extends Vue {
  @Prop({ default: 2 }) readonly countd: number = 2;
  @PropSync("value") thisValue: any;

  get getCountd() {
    return this.countd;
  }
  //   set setCountd(c : number){
  //       this.countd = c;
  //   }
}
</script>
<style lang='scss'>
</style>