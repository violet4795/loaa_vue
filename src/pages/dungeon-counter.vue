<template>
  <div>
    <div>{{ data }}</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class App extends Vue {
  data: String = "dd";
}
</script>
<style lang='scss'>
</style>