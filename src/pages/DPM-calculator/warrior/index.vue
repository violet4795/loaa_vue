<template>
  <v-col :cols="col">
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
        class="mx-auto"
        height="350"
        max-width="350"
        back-ground="#4b4243"
      >
        <v-card-text
          class="font-weight-medium mt-12 text-center text-subtitle-1"
        >
          Warrior
        </v-card-text>
        <v-img
          :src="require('@/assets/images/characters/warrior/mark/warrior.png')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
          @click="changeList"
        ></v-img>
      </v-card>
    </v-hover>
  </v-col>

  <!-- <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-img
    :src="require('@/assets/images/characters/hunter/hunter.png')"
    max-height="30px"
    max-width="30px"
    alt="logo"
    contain
    eager
    class="app-logo me-3"
    @click="changeList"
  ></v-img> -->
</template>
<script lang='ts'>
import { Component, Emit, Vue, Prop } from "vue-property-decorator";
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