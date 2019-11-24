<template>
  <div class="menu-wrap">
    <div class="menu-content">
      <ul>
        <li
          :class="[index === 0 ? 'first' : '',index >3 && index <menuData.length ? 'font-size' : '']"
          v-for="(menu,index) in menuData"
          :key="`menu-item-${index}`"
        >
          <a :href="menu.href">{{menu.label}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
       

<script>
export default {
  data() {
    return {
      menuData: [
        {
          label: "主题市场",
          href: ""
        },
        {
          label: "天猫",
          href: ""
        },
        {
          label: "聚划算",
          href: ""
        },
        {
          label: "天猫超市",
          href: ""
        },
        {
          label: "|",
          href: ""
        },
        {
          label: "淘抢购",
          href: ""
        },
        {
          label: "电器城",
          href: ""
        },
        {
          label: "司法拍卖",
          href: ""
        },
        {
          label: "淘宝心选",
          href: ""
        },
        {
          label: "兴农脱贫",
          href: ""
        },
        {
          label: "|",
          href: ""
        },
        {
          label: "飞猪旅行",
          href: ""
        },
        {
          label: "智能生活",
          href: ""
        },
        {
          label: "苏宁易购",
          href: ""
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.menu-wrap {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
  background-repeat: repeat-x;
  .menu-content {
    width: 1190px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    color: #fff;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 3px;
        a {
          font-weight: bold;
          text-decoration: none;
          color: #fff;
          padding: 0 5px;
        }
      }
      .first {
        display: flex;
        width: 190px;
        background-color: #ff5000;
        margin: 0;
        text-align: center;
      }
      .font-size {
        font-size: 14px;
      }
    }
  }
}
</style>