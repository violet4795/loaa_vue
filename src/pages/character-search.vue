<template>
  <div>
    <v-card dark>
      <v-card dark>
        <div>
          <span class="inline"
            ><v-text-field
              placeholder="캐릭터 명 입력"
              background-color="white"
              v-model="id"
            ></v-text-field>
          </span>
          <!-- <input type="text" ckass="theme--dark v-text-field" v-model="id" /> -->
          <button @click="goCrawl">검색</button>
        </div>
      </v-card>

      <v-card dark max-width="1000" class="d-flex justify-center">
        보유캐릭터
        {{ data }}
        <!-- <v-container>
          <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
          </v-row>
          <v-row>
            <v-col>1</v-col>
            <v-col>2</v-col>
          </v-row>
        </v-container> -->
        <!-- <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  ID
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </template>
        </v-simple-table> -->

        <!-- {{ data }} -->
      </v-card>
    </v-card>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import cheerio, { CheerioAPI } from "cheerio";
@Component({
  components: {}
})
export default class App extends Vue {
  id: String = "";
  data: any = "";
  html: CheerioAPI = cheerio;
  async goCrawl() {
    let characterData: any;

    try {
      characterData = await axios.get(`/lostark/Profile/Character/${this.id}`);
      console.log(characterData);
      this.data = characterData.data;
      this.html = cheerio.load(this.data);
      this.html;
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
