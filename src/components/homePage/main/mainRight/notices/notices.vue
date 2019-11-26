<template>
  <div class="notices">
    <div class="notices-hd">
      <div
        class="notices-hd-item"
        @click="changeTab(tab)"
        v-for="(tab, index) in tabData"
        :key="`notice-tab-${index}`"
      >{{tab.label}}</div>
    </div>
    <div class="notices-bd">
      <div class="notices-bd-wrap">
        <div
          v-for="(item, index) in selectedTab.items"
          :key="`notice-item-${index}`"
          :class="['notices-bd-item', isFloatMore && (index === 0 || index === 2) ? 'set-float-left':'',  isFloat && index === 1 ? 'set-float-left' :'' ,  isFloat && index === 0 ? 'reset-width':'']"
        >
          <a :href="item.href" :class="[item.isLight ? 'hover-light':'']">{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeTab(tab) {
      if (tab === null) {
        tab = this.selectedTab[0];
      }
      this.selectedTab = tab;
    }
  },
  created() {
    this.selectedTab = this.tabData[0];
  },
  computed: {
    isFloat() {
      return this.selectedTab.items.length === 3;
    },
    isFloatMore() {
      return this.selectedTab.items.length === 4;
    }
    
  },
  data() {
    return {
      isSelected: false,
      selectedTab: {},
      tabData: [
        {
          label: "公告",
          items: [
            {
              title: "95公益周阿里、腾讯等六家公司同台联合做公益",
              href:
                "https://press.taobao.com/detail.html?spm=a21bo.2017.201865-0.1.5af911d96LCY9G&amp;postId=9296403",
              isLight: true
            },
            {
              title: "淘宝造物节之城市秘密",
              href:
                "https://press.taobao.com/detail.html?spm=0.7696189.0.0.3550a520phwVru&amp;postId=9296246",
              isLight: false
            },
            {
              title: "聚划算88红包省钱卡",
              href:
                "https://press.taobao.com/detail.html?spm=0.7696189.0.0.3550a5206u3ifs&amp;postId=9296772",
              isLight: false
            }
          ]
        },
        {
          label: "规则",
          items: [
            {
              title: "新增《淘宝网汽配行业管理规范》公示通知",
              href: "",
              isLight: false
            },
            {
              title: "《淘宝网区域零售服务说明》变更公示通知",
              href: "",
              isLight: false
            },
            {
              title: "《淘宝网票务行业管理规范》变更公示通知",
              href: "",
              isLight: false
            },
            {
              title:
                "《淘宝网数字娱乐市场须提供官方授权的商品目录》变更公示通知",
              href:
                "https://rule.taobao.com/detail-11000180.htm?spm=a2177.7231193.0.0.5d6717eaBc451V&amp;tag=self",
              isLight: false
            }
          ]
        },
        {
          label: "论坛",
          items: [
            {
              title: "淘宝1212大促招商",
              href: "https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html#/detail/10610418?_k=d3k7zs",
              isLight: true
            },
            {
              title: "在线职业培训招商",
              href: "https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html?spm=a211vu.11758832.0.0.4d694ae3nvh6Tx#/detail/10600149?_k=xs10j7",
              isLight: true
            },
            {
              title: "金秋超值购招商",
              href: "https://pet.bbs.taobao.com/detail.html?postId=9310767",
              isLight: false
            },
            {
              title: "运营神器年中大促",
              href: "https://www.taobao.com/markets/cs-online/618",
              isLight: false
            }
          ]
        },
        {
          label: "安全",
          items: [
            {
              title: "魔豆妈妈公益项目",
              href: "https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10463920?_k=d4j90u",
              isLight: false
            },
            {
              title: "让母爱永不打烊！",
              href: "https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10463920?_k=d4j90u",
              isLight: false
            },
            {
              title: "卖家注意：风险通报！",
              href: "https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10389738?_k=d4j90u",
              isLight: false
            },
            {
              title: "售假获刑又起诉！",
              href: "https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10376612?_k=d4j90u",
              isLight: false
            }
          ]
        },
        {
          label: "公益",
          items: [
            {
              title: "淘宝公益平台正式更名",
              href: "https://gongyi.bbs.taobao.com/detail.html?postId=9028922",
              isLight: true
            },
            {
              title: "益起来商家招募即将截止",
              href: "https://gy.taobao.com/charity_agreement.htm",
              isLight: true
            },
            {
              title: "卖家如何设置公益宝贝",
              href: "https://helpcenter.taobao.com/learn/knowledge?version=old&amp;id=1117986&amp;referer=null",
              isLight: false
            },
            {
              title: "公益机构开店全攻略",
              href: "https://gongyi.bbs.taobao.com/detail.html?spm=a210m.7763730.0.0.1e1134504fJd7b&amp;postId=816501",
              isLight: false
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.notices {
  height: 98px;
  width: 100%;
  padding-top: 10px;
  font-size: 12px;
  .notices-hd {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 276px;
    height: 24px;
    margin-top: 4px;
    margin-right: -2px;
    padding: 0 8px;
    .notices-hd-item {
      &:hover {
        font-weight: bold;
        border-bottom: 2px solid #f40;
        color: #f40;
      }
    }
  }
  .notices-bd {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 65px;
    .notices-bd-wrap {
      height: 25px;
      margin: 0 12px;
      height: 50px;
      overflow: hidden;
      padding-top: 9px;
      padding-bottom: 6px;
      .notices-bd-item {
        width: 130px;
        height: 25px;
        line-height: 25px;
        overflow: hidden;
        a {
          text-decoration: none;
          color: #3c3c3c;
          &:hover {
            color: #f50;
          }
        }
        .hover-light {
          color: #f50;
        }
      }
      .set-float-left {
        float: left;
      }
      .reset-width {
        width: 100%;
      }
    }
  }
}
</style>