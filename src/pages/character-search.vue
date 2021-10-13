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
  id: String = "";
  async goCrawl() {
    let characterData: any;

    try {
      characterData = await axios.get(`/lostark/Profile/Character/${this.id}`);
      console.log(characterData);
    } catch (error) {
      console.log(error);
    }
  }

  // async goCrawl() {
  //   let characterData: any;

  //   let apiServerResponse: any;
  //   try {
  //     characterData = await axios.get(`/lostark/Profile/Character/${this.id}`);

  //     console.log(characterData);

  //     characterData = await axios.get(`/lostark/Profile/Character/${this.id}`);

  //     console.log(characterData);

  //     apiServerResponse = await axios.get(`/api`);

  //     console.log(apiServerResponse);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

/* 
  read this doc 
  https://ichi.pro/ko/vue-js-baeg-endeu-seobeolo-peulogsihaneun-bangbeob-181843460187627

  //2021-10-01 required
  https://github.com/chimurai/http-proxy-middleware#proxycontext-config


   */
//  주석

// console.log(encodeURI(`/lostark`));
// console.log(
//   await axios.get(`/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98`)
// );
// const instance = axios.create();
// debugger;
// instance.defaults.headers.Host = "localhost:8080/lostark";

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

// characterData = await axios.get(
//   encodeURI(
//     `https://lostark.game.onstove.com/Profile/Character/${this.id}`
//   )
// );

//   "https://lostark.game.onstove.com/Profile/Character/%EC%8A%88%EC%88%98%EC%88%98"
// );
</script>
<style lang='scss'>
</style>
