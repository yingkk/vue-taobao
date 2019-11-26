<template>
  <div class="common">
    <div class="common-detail">
      <div
        class="common-detail-item"
        v-for="(serviceDetail, index) in serviceDetailList"
        :key="`service-detail-${index}`"
      >
        <div class="common-detail-item-title">
          <div>{{serviceDetail.itemName}}</div>
          <div class="common-detail-item-more">
            <a href>
              更多
              <span class="fa fa-angle-right"></span>
            </a>
          </div>
        </div>
        <div class="common-detail-item-content">
          <a
            v-for="(goods, index) in serviceDetail.goodsList"
            :key="`goods-${index}`"
            :href="goods.fref"
          >{{goods.goodsName}}</a>
        </div>
      </div>
    </div>
    <div class="common-like">
      <div class="common-like-title">猜你喜欢</div>
      <div class="common-like-content">
        <a v-for="(img, index) in imgData" :key="`img-${index}`" :href="img.href">
          <img :src="img.src" alt />
          <p>{{img.desc}}</p>
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
          href:
            "https://item.taobao.com/item.htm?scm=1007.12807.84406.100200300000004&amp;id=538518011139&amp;pvid=3c179068-cc5a-465e-9f19-e6380dbf16e7",
          src:
            "https://img.alicdn.com/bao/uploaded/i3/559304235/TB2bagkb8PzQeBjSZPiXXb0TpXa_!!559304235.jpg_110x110q90.jpg_.webp",
          desc: "海宁貉子毛翻领皮毛一体皮衣男士皮草大衣真皮皮衣男加厚男式外套"
        },
        {
          href:
            "https://item.taobao.com/item.htm?scm=1007.12807.84406.100200300000004&amp;id=534751084263&amp;pvid=3c179068-cc5a-465e-9f19-e6380dbf16e7",
          src:
            "https://img.alicdn.com/bao/uploaded/i1/2875561544/TB2OznHnl8lpuFjy0FnXXcZyXXa_!!2875561544.jpg_110x110q90.jpg_.webp",
          desc: "2019春晚同款重磅真丝衬衫女长袖复古绿酒红白色翻领加厚不透衬衫"
        },
        {
          href:
            "https://item.taobao.com/item.htm?scm=1007.12807.84406.100200300000004&amp;id=567299675479&amp;pvid=3c179068-cc5a-465e-9f19-e6380dbf16e7",
          src:
            "https://img.alicdn.com/bao/uploaded/i4/2053922816/TB2_NL5cBsmBKNjSZFFXXcT9VXa_!!2053922816.jpg_110x110q90.jpg_.webp",
          desc: "WINDERFLIES纯棉刺绣拼接卫衣男潮2019早秋新款连帽宽松情侣衣服"
        },
        {
          href: "",
          src:
            "https://img.alicdn.com/bao/uploaded/i2/825116684/TB2yeMenbtlpuFjSspfXXXLUpXa_!!825116684.jpg_110x110q90.jpg_.webp",
          desc: "美裁 春秋冬新款 欧美大牌秀款名媛小香风复古格纹编织短外套女"
        },
        {
          href: "",
          src:
            "https://img.alicdn.com/bao/uploaded/i1/866653674/TB2VHIGXlfH8KJjy1XbXXbLdXXa_!!866653674.jpg_110x110q90.jpg_.webp",
          desc: "潮牌秋冬季丹宁余文乐宽松大码黑色加绒加厚工装牛仔衣外套夹克男"
        },
        {
          href: "",
          src:
            "https://img.alicdn.com/bao/uploaded/i1/866653674/TB2VHIGXlfH8KJjy1XbXXbLdXXa_!!866653674.jpg_110x110q90.jpg_.webp",
          desc: "潮牌秋冬季丹宁余文乐宽松大码黑色加绒加厚工装牛仔衣外套夹克男"
        }
      ],
      serviceDetailList: [
        {
          itemName: "女装",
          herf: "",
          goodsList: [
            {
              goodsName: "羽绒服",
              goodsHref: ""
            },
            {
              goodsName: "棉衣棉服",
              goodsHref: ""
            },
            {
              goodsName: "毛呢大衣",
              goodsHref: ""
            },
            {
              goodsName: "毛衣针织",
              goodsHref: ""
            }
          ]
        },
        {
          itemName: "男装",
          herf: "",
          goodsList: [
            {
              goodsName: "春夏新品",
              goodsHref: ""
            },
            {
              goodsName: "T恤",
              goodsHref: ""
            },
            {
              goodsName: "衬衫",
              goodsHref: ""
            },
            {
              goodsName: "POLO衫",
              goodsHref: ""
            }
          ]
        },
        {
          itemName: "内衣",
          herf: "",
          goodsList: [
            {
              goodsName: "法式内衣",
              goodsHref: ""
            },
            {
              goodsName: "无钢圈内衣",
              goodsHref: ""
            },
            {
              goodsName: "内裤女",
              goodsHref: ""
            },
            {
              goodsName: " 文胸",
              goodsHref: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.common {
  display: flex;
  justify-content: flex-start;
  width: 698px;
  height: 520px;
  border: 1px solid #f50;
  .common-detail {
    padding-top: 10px;
    width: 415px;
    height: 498px;
    overflow: hidden;
    padding-right: 12px;
    padding-left: 10px;
    font-size: 14px;
    .common-detail-item {
      display: flex;
      flex-flow: column;
      width: 385px;
      height: 143px;
      padding: 10px 0 0 20px;
      overflow: hidden;
      .common-detail-item-title {
        display: flex;
        justify-content: space-between;
        height: 36px;
        width: 100%;
        line-height: 36px;
        font-size: 16px;
        color: #333;
        .common-detail-item-more {
          a {
            text-decoration: none;
            color: #333;
            font-size: 12px;
          }
        }
      }
      .common-detail-item-content {
        display: flex;
        justify-content: flex-start;
        a {
          text-decoration: none;
          color: #333;
          margin-right: 12px;
        }
      }
    }
  }
  .common-like {
    display: flex;
    flex-flow: column;
    width: 253px;
    border-left: 1px solid #f4f4f4;
    height: 498px;
    padding-top: 20px;
    .common-like-title {
      line-height: 18px;
      color: #333;
      font-size: 12px;
      text-align: center;
      font-weight: 400;
    }
    .common-like-content {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      a {
        display: flex;
        flex-flow: column;
        text-decoration: none;
        color: #333;
        width: 97px;
        height: 143px;
        padding: 10px 0 0 20px;
        overflow: hidden;
        img {
          width: 97px;
          height: 97px;
          overflow: hidden;
        }
        p {
          font-size: 12px;
          margin: 0;
          padding: 0;
          height: 26px;
          line-height: 26px;
          overflow: hidden;
          font-weight: 400;
          color: #999;
        }
      }
    }
  }
}
</style>
