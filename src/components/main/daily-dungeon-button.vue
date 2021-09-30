<template>
  <div class="mt-5">
    <v-checkbox class="inline" @change="clickCheck($event)"></v-checkbox>
    <div>
      <button text="+10" @click="dfdf">
        dfdf
      </button>
    </div>
    <v-text-field v-model="thisValue" height="10"></v-text-field>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
@Component({
  components: {}
})
export default class App extends Vue {
  @Prop({ default: 2 })
  readonly count!: number;

  @PropSync("value")
  thisValue!: number;

  asdf = 20;
  valueArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  dfdf() {
    console.log("e");
    this.asdf += 10;
  }

  clickCheck(e: boolean) {
    let x = this.thisValue - Math.floor(this.thisValue / 20) * 20;
    if (e) {
      let y = Math.max(Math.floor(this.thisValue / 20) - this.count, 0) * 20;

      this.thisValue = x + y;
      console.log(e, x + y);
    } else {
      let y = Math.min(
        (Math.floor(this.thisValue / 20) + this.count) * 20,
        100
      );

      this.thisValue = x + y;
      console.log(e, x + y);
    }
  }
}
</script>
<style lang='scss'>
</style>