<template>
  <div>
    <v-card>
      <input type="text" v-model="id" />
      <button @click="goCrawl">검색</button>
    </v-card>
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
  /* 
  read this doc 
  https://ichi.pro/ko/vue-js-baeg-endeu-seobeolo-peulogsihaneun-bangbeob-181843460187627

  //2021-10-01 required
  https://github.com/chimurai/http-proxy-middleware#proxycontext-config


   */
  id: String = "";
  async goCrawl() {
    // console.log(
    //   encodeURI("https://lostark.game.onstove.com/Profile/Character/슈수수")
    // );
    let characterData: any;

    try {
      // console.log(encodeURI(`/lostark`));
      // console.log(
      //   await axios.get(`/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98`)
      // );
      // const instance = axios.create();
      // debugger;
      // instance.defaults.headers.Host = "localhost:8080/lostark";
      characterData = await axios.get(`/Profile/Character/${this.id}`);
      // https://lostark.game.onstove.com/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98
      //http://localhost:8080/lostark    /Profile/Character/%EC%8A%88%EC%88%98%EC%88%98
      // characterData = await axios.get(
      //   encodeURI(`/lostark/Profile/Character/${this.id}`)
      //   // "/lostark/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
      // );

      // characterData = await axios.get(
      //   encodeURI("https://www.naver.com/")
      //   // "/lostark/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
      // );

      console.log(characterData);

      // characterData = await axios.get(
      //   encodeURI(
      //     `https://lostark.game.onstove.com/Profile/Character/${this.id}`
      //   )
      // );
    } catch (error) {
      console.log(error);
    }

    //   "https://lostark.game.onstove.com/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
    // );
  }
}
</script>
<style lang='scss'>
</style>