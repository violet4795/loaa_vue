<template>
  <v-col :cols="col">
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
        class="mx-auto"
        height="350"
        max-width="350"
        horizental
        contain
      >
        <div class="d-flex flex-no-wrap justify-space-between" max-width="100">
          <v-avatar class="ma-2" size="50" tile>
            <v-img
              :src="
                require('@/assets/images/characters/hunter/mark/hunter.png')
              "
              max-height="30px"
              max-width="30px"
              alt="logo"
              @click="changeList"
            ></v-img>
          </v-avatar>
          <v-card-text class="font-weight-medium text-center text-subtitle-1">
            헌터
          </v-card-text>
        </div>
        <!-- <v-img
          :src="
            require('@/assets/images/characters/hunter/bg_index_hunter.jpg')
          "
          max-height="initial"
          max-width="initial"
        >
          <v-img
            :src="require('@/assets/images/characters/hunter/mark/hunter.png')"
            max-height="30px"
            max-width="30px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
            @click="changeList"
          ></v-img>
          <v-img
            :src="
              require('@/assets/images/characters/hunter/img_index_hunter.png')
            "
            max-height="350"
            max-width="350"
          ></v-img>
        </v-img> -->
      </v-card>
    </v-hover>
  </v-col>
</template>
<script lang='ts'>
import { Component, Emit, Vue, Prop } from "vue-property-decorator";
// import variables from "@/styles/variables.scss";
@Component({
  components: {}
})
export default class App extends Vue {
  @Prop({ type: Number, default: null }) col: any;
  @Emit("")
  changeList() {
    return;
  }
}
</script>
<style lang='scss'>
</style>