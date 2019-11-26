<template>
  <div class="main-wrap">
    <div class="main">
      <div class="main-inner">
        <main-service />
        <div class="main-panel">
          <router-view />
        
        </div>
      </div>
      <div class="main-right">
        <main-member />
        <main-tip />
        <main-notice />
        <main-option />
        <main-app />
      </div>
    </div>
  </div>
</template>

<script>
import mainService from "./mainService/mainService";

import mainMember from "./mainRight/member/member";
import mainTip from "./mainRight/tips/tips";
import mainNotice from "./mainRight/notices/notices";
import mainOption from "./mainRight/options/options";
import mainApp from "./mainRight/apps/apps";

export default {
  components: {
    mainService,
    mainMember,
    mainTip,
    mainNotice,
    mainOption,
    mainApp
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.main-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 522px;
  .main {
    display: flex;
    justify-content: flex-start;
    width: 1190px;
    height: 100%;
    .main-inner {
      display: flex;
      justify-content: flex-start;
      width: 900px;
      height: 100%;
      .main-panel{
        display: flex;
        justify-content: flex-start;
        width: 700px;
        height: 522px;
      }
    }
    .main-right {
      width: 290px;
      height: 100%;
    }
  }
}
</style>