<template>
  <div class="home-page">
    <home-header />
    <site-top />
    <site-menu />
    <site-main />
    <other-area />
    <dialog-tag />
    <dialog-remind />
  </div>
</template>


<script>
import homeHeader from "../components/homePage/header";
import siteTop from "../components/homePage/siteTop";
import siteMenu from "../components/homePage/menu/menu";
import siteMain from "../components/homePage/main/main";

import otherArea from "../components/homePage/other";
import dialogTag from "../components/dialog/dialog";
import dialogRemind from "../components/dialogModel/dialogModel";
export default {
  components: {
    homeHeader,
    siteTop,
    siteMenu,
    siteMain,
    otherArea,
    dialogTag,
    dialogRemind
  }
};
</script>
<style lang="scss" scoped>
</style>