<template>
  <div class="home-page">
    <home-header />
    <site-top />
    <site-menu />
    <site-main />
    <other-area />
  </div>
</template>


<script>
import homeHeader from "../components/homePage/header";
import siteTop from "../components/homePage/siteTop";
import siteMenu from "../components/homePage/menu/menu";
import siteMain from "../components/homePage/main/main";

import otherArea from "../components/homePage/other";
export default {
  components: {
    homeHeader,
    siteTop,
    siteMenu,
    siteMain,
    otherArea
  }
};
</script>
<style lang="scss" scoped>
</style>