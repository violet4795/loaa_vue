<template>
  <v-app max-height="inherit">
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar app flat absolute color="transparent" hide-on-scroll>
      <span class="d-flex align-left mx-3">
        <v-app-bar-nav-icon
          class="me-2"
          @click="isDrawerOpen = !isDrawerOpen"
        ></v-app-bar-nav-icon>
      </span>
      <span class="boxed-container w-full">
        <!--<div class="d-flex align-center mx-6"> -->
        <!-- Left Content -->

        <span class="d-flex align-center mx-6">
          <v-spacer />
          <div
            class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2"
          >
            <router-link
              to="/"
              class="d-flex align-center text-decoration-none"
            >
              <v-img
                :src="require('@/assets/images/logos/lostark-mark.png')"
                max-height="30px"
                max-width="30px"
                alt="logo"
                contain
                eager
                class="app-logo me-3"
              ></v-img>
              <!-- <a href="" title="juicy_fish">juicy_fish</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div> -->
              <v-slide-x-transition>
                <h2 class="app-title text--primary">
                  LOAA
                </h2>
              </v-slide-x-transition>
            </router-link>
          </div>
          <!--  class="d-block d-lg-none me-2"-->
          <!-- <v-text-field
          rounded
          dense
          outlined
          :prepend-inner-icon="icons.mdiMagnify"
          class="app-bar-search flex-grow-0"
          hide-details
        ></v-text-field> -->
        </span>
      </span>
      <!-- <v-spacer> </v-spacer> -->

      <!-- Right Content -->
      <!-- <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a> -->
      <!-- <theme-switcher></theme-switcher> -->
      <!-- <v-btn icon small class="ms-3">
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn> -->
      <!-- <app-bar-user-menu></app-bar-user-menu> -->
      <!-- </div>
      </div> -->
    </v-app-bar>

    <v-main>
      <slot>
        <router-view :key="key" />
      </slot>
      <!-- <div class="app-content-container boxed-container pa-6">
      </div> -->
    </v-main>

    <!-- TODO : 추후 추가예정
      
      <v-footer app inset color="transparent" absolute height="56" class="px-0">
      <div class="boxed-container w-full">
         <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2021
            <a
              href="https://themeselection.com"
              class="text-decoration-none"
              target="_blank"
              >ThemeSelection</a
            ></span
          >
          <span class="d-sm-inline d-none">
            <a
              href="https://themeselection.com/products/category/download-free-admin-templates/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
              >Freebies</a
            >
            <a
              href="https://themeselection.com/blog/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
              >Blog</a
            >
            <a
              href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
              >MIT Licence</a
            >
          </span>
        </div> 
      </div>
    </v-footer> -->
  </v-app>
</template>

<script>
// import { ref } from '@vue/composition-api'11
import { mdiMagnify, mdiBellOutline, mdiGithub } from "@mdi/js";
import VerticalNavMenu from "./components/vertical-nav-menu/VerticalNavMenu.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import AppBarUserMenu from "./components/AppBarUserMenu.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu
  }
})
export default class App extends Vue {
  isDrawerOpen = false;
  icons = {
    mdiMagnify,
    mdiBellOutline,
    mdiGithub
  };
  created() {
    this.$vuetify.theme.dark = true;
  }
  get key() {
    console.log(this.$route);
    return this.$route.path;
  }
  // setup() {
  //   const isDrawerOpen = ref(null)

  //   return {
  //     isDrawerOpen,

  //     // Icons
  //     icons: {
  //       mdiMagnify,
  //       mdiBellOutline,
  //       mdiGithub,
  //     },
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
