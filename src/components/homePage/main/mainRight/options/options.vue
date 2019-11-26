<template>
  <div class="options">
    <!-- <ul>
      <li v-for="(item, index) in optionsData" :key="`options-item-${index}`">
        <a :href="item.href">
          <span  :style="{ backgroundPosition: `${imgOptions[index].positionRow}px ${imgOptions[index].positionCol}px` }"></span>
          <p>{{item.label}}</p>
        </a>
      </li>
    </ul> -->
    <div class="options-item" v-for="(item, index) in optionsData" :key="`options-item-${index}`">
      <a :href="item.href">
        <div
          class="options-item-icon"
        :style="{backgroundPosition: `${imgOptions[index].positionRow}px ${imgOptions[index].positionCol}px`}"
        ></div>
        <div class="options-item-label">{{item.label}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgOptions: [
        {
          positionRow: 0,
          positionCol: 0
        },
        {
          positionRow: 0,
          positionCol: -45
        },
        {
          positionRow: 0,
          positionCol: -87
        },
        {
          positionRow: 0,
          positionCol: -131
        },
        {
          positionRow: 0,
          positionCol: -175
        },
        {
          positionRow: 0,
          positionCol: -221
        },
        {
          positionRow: 0,
          positionCol: -265
        },
        {
          positionRow: 0,
          positionCol: -309
        }
      ],
      optionsData: [
        {
          label: "充话费",
          href: "https://wt.taobao.com/?ks-menu=cz"
        },
        {
          label: "旅行",
          href: "https://www.fliggy.com/"
        },
        {
          label: "车险",
          href: "https://baoxian.taobao.com/"
        },
        {
          label: "游戏",
          href: "https://game.taobao.com"
        },
        {
          label: "彩票",
          href:
            "https://caipiao.taobao.com/?t=1&amp;ad_id=&amp;am_id=13010663204b41fb5276&amp;cm_id=&amp;pm_id="
        },
        {
          label: "电影",
          href: "https://dianying.taobao.com"
        },
        {
          label: "酒店",
          href: "https://www.alitrip.com/jiudian"
        },
        {
          label: "理财",
          href: "https://yebprod.alipay.com/yeb/index.htm"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.options {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 155px;
  font-size: 12px;
  // ul {
  //   padding: 0;
  //   margin: 0;
  //   list-style: none;
  //   border-top: 1px solid  #f4f4f4;
  //   li {
  //     float: left;
  //     width: 70px;
  //     height: 75px;
  //     text-align: center;
  //     border: 1px solid #f4f4f4;
  //     border-top-color: transparent;
  //     border-left-color: transparent;
  //     a {
  //       display: flex;
  //       flex-flow: column;
  //       align-items: center;
  //       flex-wrap: wrap;
  //       text-decoration: none;
  //       color: #3c3c3c;
  //       span {
  //         display: block;
  //         width: 24px;
  //         height: 24px;
  //         margin-top: 11px;
  //         background-repeat: no-repeat;
  //         background-image: url(https://img.alicdn.com/tfs/TB1eiXTXlTH8KJjy0FiXXcRsXXa-24-595.png);
  //       }
  //       p {
  //         width: 100%;
  //         text-align: center;
  //         padding: 0;
  //         margin: 0;
  //         height: 24px;
  //         line-height: 24px;
  //       }
  //     }
  //   }
  //   li:nth-of-type(4n){
  //     border-right: transparent;
  //   }
  // }
  .options-item {
    text-align: center;
    width: 70px;
    height: 75px;
    border: 1px solid #f4f4f4;
    border-left-color: transparent;
    border-top-color: transparent;
    a {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-top: 1px;
      text-align: center;
      text-decoration: none;
      color: #3c3c3c;
      .options-item-icon {
        width: 24px;
        height: 24px;
        margin-top: 11px;
        background-repeat: no-repeat;
        background-image: url(https://img.alicdn.com/tfs/TB1eiXTXlTH8KJjy0FiXXcRsXXa-24-595.png);
      }
      .options-item-label {
        line-height: 24px;
        width: 100%;
        height: 24px;
      }
    }
  }
}
</style>