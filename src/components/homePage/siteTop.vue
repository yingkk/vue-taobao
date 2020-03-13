<template>
  <div class="site-top-wrap">
    <div class="site-top">
      <div class="logo">
        <a href="https://www.taobao.com/m">
          <img :src="logoUrl" alt="淘宝网" />
        </a>
      </div>
      <div class="search">
        <search-body />
      </div>
      <div class="qrcode" v-show="qrcodeShow">
        <div class="qrcode-close">
          <i class="fa fa-close" @click="closeQrcode"></i>
        </div>
        <div class="qrcode-bd">
          <span class="qrcode-title">手机淘宝</span>
          <img :src="qrCodeUrl" alt="二维码" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchBody from "./search/searchBody.vue";
export default {
  components: {
    searchBody
  },
  data() {
    return {
      qrcodeShow: true,
      logoUrl:
        "http://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png",
      qrCodeUrl:
        "https://img.alicdn.com/tfs/TB18W1cQFXXXXaWXXXXXXXXXXXX-160-160.png"
    };
  },
  methods: {
    closeQrcode() {
      this.qrcodeShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../sheet/common.scss";
.site-top-wrap {
  width: 100%;
  display: flex;
  height: 97px;
  justify-content: center;
  padding-top: 24px;
  .site-top {
    font-size: $fontSize;
    width: 1190px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    .logo {
      width: 190px;
      height: 100%;
      margin-top: 8px;
      text-align: center;
    }
    // .search {
    //   display: flex;
    //   width: 630px;
    //   height: 87px;
    // }
    .qrcode {
      height: 90px;
      margin-right: 110px;
      display: flex;
      align-items: flex-start;
      .qrcode-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        border: 1px solid #eee;
        color: #eee;
      }
      .qrcode-bd {
        width: 76px;
        border: 1px solid #eee;
        img {
          width: 62px;
          height: 62px;
        }
      }
    }
    .qrcode-title {
      color: $fontLightColor;
    }
  }
}
</style>