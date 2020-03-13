<template>
  <div class="col">
    <div class="col-up">
      <a :href="imgData[0].href">
        <img :src="imgData[0].src" :alt="imgData[0].alt" />
      </a>
    </div>
    <div class="col-down">
      <div class="col-down-title">{{imgData[1].label}}</div>
      <div class="col-down-img">
        <a :href="imgData[1].href">
          <img :src="imgData[1].src" :alt="imgData[1].alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        {
          href: "https://game.tmall.com?scm=20140637.1.63018.272926",
          src:
            "https://img.alicdn.com/imgextra/i2/1229096/O1CN01xA1JSL2H41Bdw9SRK_!!1229096-0-lubanu.jpg_290x290q90.jpg_.webp",
          alt: "天猫电竞节",
          label: "",
          target: false
        },
        {
          href:
            "https://click.mz.simba.taobao.com/ecpm?e=StjoPbaNm45TkC8%2BC6M9Ji1uBpi0yq7gKd7oy0Ja6zC11cQyHAMgsK%2FQT8ZAJ0d7n275Ahw4mQR6rGKtMBt8C8R92%2BP%2FC62ktbR9sxq9q4gLhIFrJfzXOZxvsIw%2Biy5zOAT8dJtDbwqsfmsLHRmAH8pXxHiccqqUz6qeOyVhreOf52u0Wo2aiuDXFqBoDmUIzJ8JAEqQOp6DZC%2BChAq9%2BqOJrRv4yfWFAc5leP8rE9u9RD90fQH35Q%2FV4F5zS7PEyVsFy2EoEHwe7uij6NSAIqDk6XDzdGO%2B9SDfOIHCQxPqS97dudFWlX2WKt8ATypJ4T7MFrm%2Ba7XfCAgvlQP58rs3ORShww1MiZtCvH0W%2FcHD09g27kG2Pf7zUdKN0f70fh1eGy%2BGX9ue59feUMCduqlZR5uwO551p9nRg5kl%2BLc%2BBqQsyRwQ9deepViEoXR3VSxitZHdDswHVL43Vy%2FIEg%3D%3D&amp;u=https%3A%2F%2Falimarket.tmall.com%2Fmarkets%2Falimama%2Fmingdian&amp;k=473",
          src:
            "https://aecpm.alicdn.com/simba/img/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg",
          alt: "",
          label: "今日热卖",
          target: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.col {
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 512px;
  margin: 10px 10px 0 0;
  .col-up {
    height: 280px;
    img {
      padding: 0;
      margin: 0;
    }
  }
  .col-down {
    height: 230px;
    .col-down-title {
      height: 24px;
      color: #a1a1a1;
      font-size: 12px;
      line-height: 24px;
      padding-top: 6px;
      text-align: left;
    }
    .col-dowm-img {
      img {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>