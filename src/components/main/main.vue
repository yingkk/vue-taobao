<template>
  <div class="main-wrap">
    <div class="main">
      <div class="main-inner">
        <main-inner-service />
        <main-inner-core />
        <main-inner-col />
      </div>
      <div class="main-right">
        <main-right-member />
        <main-right-tip />

      </div>
    </div>
  </div>
</template>

<script>
import mainInnerService from "../main/mainService/mainService";
import mainInnerCore from "../main/mainCore/mainCore";
import mainInnerCol from "../main/mainCol/mainCol";

import mainRightMember from "../main/mainRight/member/member";
import mainRightTip from "../main/mainRight/tips/tips";
export default {
  components: {
    mainInnerService,
    mainInnerCore,
    mainInnerCol,
    mainRightMember,
    mainRightTip
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
    }
    .main-right {
      width: 290px;
      height: 100%;
    }
  }
}
</style>