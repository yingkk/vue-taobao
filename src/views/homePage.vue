<template>
  <div class="home-page">
    <home-header />
    <site-top />
    <site-menu />
    <site-main />
  </div>
</template>


<script>
import homeHeader from "../components/homePage/header";
import siteTop from "../components/homePage/siteTop";
import siteMenu from "../components/menu/menu";
import siteMain from "../components/main/main";
export default {
  components: {
    homeHeader,
    siteTop,
    siteMenu,
    siteMain
  }
};
</script>
<style lang="scss" scoped>
</style>