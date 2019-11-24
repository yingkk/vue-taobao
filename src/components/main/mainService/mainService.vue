<template>
  <div class="service">
    <ul>
      <li v-for="(service, index) in serviceData" :key="`service-${index}`">
        <a v-for="(item, index) in service.items" :key="`service-item-${index}`" :href="item.href">
          {{item.label}}
          <i v-if="(index+1) < service.items.length">/</i>
        </a>
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceData: [
        {
          items: [
            {
              label: "女装",
              href: ""
            },
            {
              label: "男装",
              href: ""
            },
            {
              label: "内衣",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "鞋靴",
              href: ""
            },
            {
              label: "箱包",
              href: ""
            },
            {
              label: "配件",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "童装玩具",
              href: ""
            },
            {
              label: "孕产",
              href: ""
            },
            {
              label: "用品",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "家电",
              href: ""
            },
            {
              label: "数码",
              href: ""
            },
            {
              label: "手机",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "美妆",
              href: ""
            },
            {
              label: "洗护",
              href: ""
            },
            {
              label: "保健品",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "珠宝",
              href: ""
            },
            {
              label: "眼镜",
              href: ""
            },
            {
              label: "手表",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "运动",
              href: ""
            },
            {
              label: "户外",
              href: ""
            },
            {
              label: "乐器",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "游戏",
              href: ""
            },
            {
              label: "动漫",
              href: ""
            },
            {
              label: "影视",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "美食",
              href: ""
            },
            {
              label: "生鲜",
              href: ""
            },
            {
              label: "零食",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "鲜花",
              href: ""
            },
            {
              label: "宠物",
              href: ""
            },
            {
              label: "农资",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "工具",
              href: ""
            },
            {
              label: "装修",
              href: ""
            },
            {
              label: "建材",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "家具",
              href: ""
            },
            {
              label: "家饰",
              href: ""
            },
            {
              label: "家纺",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "汽车",
              href: ""
            },
            {
              label: "二手车",
              href: ""
            },
            {
              label: "用品",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "办公",
              href: ""
            },
            {
              label: "DIY",
              href: ""
            },
            {
              label: "五金电子",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "百货",
              href: ""
            },
            {
              label: "餐厨",
              href: ""
            },
            {
              label: "家庭保障",
              href: ""
            }
          ]
        },
        {
          items: [
            {
              label: "学习",
              href: ""
            },
            {
              label: "卡券",
              href: ""
            },
            {
              label: "本地服务",
              href: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.service {
  width: 188px;
  height: 512px;
  border: 1px solid #f50;
  border-top: none;
  padding: 5px 0 3px;
  display: flex;
  justify-content: flex-start;
  ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    :hover {
      background-color: #ffe4dc;
      color: #f50;
    }
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 32px;
      line-height: 32px;
      width: 144px;
      padding-left: 25px;
      padding-right: 19px;
      a {
        text-decoration: none;
        color: #666;
        font-size: 14px;
        font-weight: 400;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>