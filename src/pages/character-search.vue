<template>
  <div>
    <input type="text" v-model="id" />
    <button @click="goCrawl">submit</button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
// import cheerio from "cheerio";
@Component({
  components: {}
})
export default class App extends Vue {
  id: String = "";
  async goCrawl() {
    // console.log(
    //   encodeURI("https://lostark.game.onstove.com/Profile/Character/슈수수")
    // );
    let characterData: any;
    try {
      characterData = await axios.get(
        "/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
      );
      // characterData = await axios.get(
      //   encodeURI(
      //     `https://lostark.game.onstove.com/Profile/Character/${this.id}`
      //   )
      // );
    } catch (error) {
      console.log(error);
    }
    console.log(characterData);

    //   "https://lostark.game.onstove.com/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
    // );
  }
}
</script>
<style lang='scss'>
</style>