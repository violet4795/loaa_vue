<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    temporary
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->

    <!-- Navigation Items -->
    <v-list expand shaped class="vertical-nav-menu-items pr-5">
      <nav-menu-link
        title="로그인"
        :icon="icons.mdiLogin"
        :to="{ name: 'login' }"
      ></nav-menu-link>
      <!-- :icon="icons.mdiHomeOutline"-->
      <nav-menu-link
        title="캐릭터 조회"
        :to="{ name: 'character-search' }"
        :icon="icons.mdiAccountSearch"
      ></nav-menu-link>
      <nav-menu-link
        title="휴식게이지 관리"
        :to="{ name: 'homework-counter' }"
        :icon="icons.mdiPacMan"
      ></nav-menu-link>
      <!-- <nav-menu-link
        title="DPM 계산기"
        :to="{ name: 'DPM-calculator' }"
        :icon="icons.mdiCalculator"
      ></nav-menu-link> -->
      <!-- <nav-menu-group title="Pages" :icon="icons.mdiFileOutline">
        <nav-menu-link
          title="Login"
          :to="{ name: 'pages-login' }"
          target="_blank"
        ></nav-menu-link>
        <nav-menu-link
          title="Register"
          :to="{ name: 'pages-register' }"
          target="_blank"
        ></nav-menu-link>
        <nav-menu-link
          title="Error"
          :to="{ name: 'error-404' }"
          target="_blank"
        ></nav-menu-link>
      </nav-menu-group> -->
      <!-- <nav-menu-section-title title="USER INTERFACE"></nav-menu-section-title>
      <nav-menu-link
        title="Typography"
        :to="{ name: 'typography' }"
        :icon="icons.mdiAlphaTBoxOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Icons"
        :to="{ name: 'icons' }"
        :icon="icons.mdiEyeOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Cards"
        :to="{ name: 'cards' }"
        :icon="icons.mdiCreditCardOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Tables"
        :to="{ name: 'simple-table' }"
        :icon="icons.mdiTable"
      ></nav-menu-link>
      <nav-menu-link
        title="Form Layouts"
        :to="{ name: 'form-layouts' }"
        :icon="icons.mdiFormSelect"
      ></nav-menu-link> -->
    </v-list>
    <!-- <a
      href="https://themeselection.com/products/materio-vuetify-vuejs-admin-template"
      target="_blank"
      rel="nofollow"
    >
      <v-img
        :src="
          require(`@/assets/images/pro/upgrade-banner-${
            $vuetify.theme.dark ? 'dark' : 'light'
          }.png`)
        "
        alt="upgrade-banner"
        transition="scale-transition"
        class="upgrade-banner mx-auto"
        max-width="230"
      ></v-img>
    </a> -->
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiPacMan,
  mdiAccountSearch,
  mdiLogin,
  mdiCalculator
} from "@mdi/js";
import NavMenuSectionTitle from "./components/NavMenuSectionTitle.vue";
import NavMenuGroup from "./components/NavMenuGroup.vue";
import NavMenuLink from "./components/NavMenuLink.vue";

@Component({
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
    mdiPacMan,
    mdiAccountSearch,
    mdiLogin,
    mdiCalculator
  }
})
export default class App extends Vue {
  @Prop({ type: Boolean, default: false }) isDrawerOpen;

  icons = {
    mdiHomeOutline,
    mdiAlphaTBoxOutline,
    mdiEyeOutline,
    mdiCreditCardOutline,
    mdiTable,
    mdiFileOutline,
    mdiFormSelect,
    mdiAccountCogOutline,
    mdiPacMan,
    mdiAccountSearch,
    mdiLogin,
    mdiCalculator
  };
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, "background");
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
