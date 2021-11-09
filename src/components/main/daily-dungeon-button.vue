<template>
  <div class="mt-1 mb-1">
    <v-icon @click="plus" size="20" color="primary">
      {{ icons.mdiChevronUpCircle }}
    </v-icon>
    <v-input class="justify-center">
      {{ this.propValue }}
    </v-input>
    <v-icon @click="minus" size="20" color="primary">
      {{ icons.mdiChevronDownCircle }}
    </v-icon>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, PropSync } from "vue-property-decorator";
import { mdiChevronUpCircle, mdiChevronDownCircle } from "@mdi/js";

@Component({
  components: {}
})
export default class App extends Vue {
  @PropSync("value", { type: Number })
  propValue!: number;
  icons = {
    mdiChevronUpCircle,
    mdiChevronDownCircle
  };
  minus() {
    this.propValue = this.propValue - 20 >= 0 ? this.propValue - 20 : 0;
  }
  plus() {
    this.propValue = this.propValue + 10 <= 100 ? this.propValue + 10 : 100;
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
<style lang='scss' scoped>
.justify-center {
  .v-input__control > .v-input__slot {
    display: flex !important;
    justify-content: center !important;
  }
  // display: block !important;

  max-height: 20px;

  text-align: center !important;
  margin-bottom: 0px !important;
  margin-right: 0px;
  justify-content: center;
}
</style>