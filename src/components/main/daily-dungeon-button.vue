<template>
  <div class="mt-5">
    <v-icon color="primary">
      {{ getIcon }}
    </v-icon>
    <!-- <v-rating
      background-color="warning lighten-1"
      color="primary"
      :empty-icon="icons.mdiCheckboxBlankCircleOutline"
      :full-icon="icons.mdiCircle"
      :half-icon="icons.mdiCircleHalfFull"
      half-increments
      hover
      length="5"
      size="30"
      :value="5"
    ></v-rating> -->
    <!-- <v-checkbox class="inline" @change="clickCheck($event)"></v-checkbox>
    <div>
      <button text="+10" @click="dfdf">
        dfdf
      </button>
    </div>
    <v-text-field v-model="thisValue" height="10"></v-text-field> -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import {
  mdiBatteryRemoveOutline,
  mdiBattery10,
  mdiBattery20,
  mdiBattery30,
  mdiBattery40,
  mdiBattery50,
  mdiBattery60,
  mdiBattery70,
  mdiBattery80,
  mdiBattery90,
  mdiBattery
} from "@mdi/js";

@Component({
  components: {}
})
export default class App extends Vue {
  @Prop({ default: 2 })
  @PropSync("value")
  value: number = 0;

  icons: any = {
    mdiBatteryRemoveOutline,
    mdiBattery10,
    mdiBattery20,
    mdiBattery30,
    mdiBattery40,
    mdiBattery50,
    mdiBattery60,
    mdiBattery70,
    mdiBattery80,
    mdiBattery90,
    mdiBattery
  };

  asdf = 20;
  valueArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  get getIcon() {
    if (this.value == 100) return this.icons["mdiBattery"];
    else return this.icons["mdiBattery" + this.value]; //[`mdiBattery${this.value}`];
  }

  dfdf() {
    console.log("e");
    this.asdf += 10;
  }

  // clickCheck(e: boolean) {
  //   let x = this.thisValue - Math.floor(this.thisValue / 20) * 20;
  //   if (e) {
  //     let y = Math.max(Math.floor(this.thisValue / 20) - this.count, 0) * 20;

  //     this.thisValue = x + y;
  //     console.log(e, x + y);
  //   } else {
  //     let y = Math.min(
  //       (Math.floor(this.thisValue / 20) + this.count) * 20,
  //       100
  //     );

  //     this.thisValue = x + y;
  //     console.log(e, x + y);
  //   }
  // }
}
</script>
<style lang='scss'>
</style>