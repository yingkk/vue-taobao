<template>
  <div class="header-wrap">
    <div class="header">
      <div class="header-left flex-inline">
        <div class="item hd-margin">中国大陆<i class="fa fa-angle-down"></i></div>
        <div class="item hd-margin hover-light">亲，请登录</div>
        <div class="item hd-margin">免费注册</div>
        <div class="item hd-margin">手机逛淘宝</div>
      </div>
      <div class="header-right flex-inline">
        <div class="item hd-margin hd-padding" v-for="(menu, index) in rightMenu" :key="`menu-${index}`">
          <i :class="menu.leftIcon"></i>
          {{menu.label}}
          <i :class="menu.rightIcon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightMenu: [
        {
          leftIcon: "",
          label: "我的淘宝",
          rightIcon: "fa fa-angle-down"
        },
        {
          leftIcon: "fa fa-shopping-cart",
          label: "购物车",
          rightIcon: "fa fa-angle-down"
        },
        {
          leftIcon: "fa fa-star",
          label: "收藏夹",
          rightIcon: "fa fa-angle-down"
        },
        {
          leftIcon: "",
          label: "商品分类",
          rightIcon: ""
        },
        {
          leftIcon: "",
          label: "千牛卖家中心",
          rightIcon: "fa fa-angle-down"
        },
        {
          leftIcon: "",
          label: "联系客服",
          rightIcon: "fa fa-angle-down"
        },
        {
          leftIcon: "fa fa-navicon",
          label: "网站导航",
          rightIcon: "fa fa-angle-down"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
$lightColor: #f22e00;
.header-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background: #f5f5f5;
  font-size: 12px;
  color: #6c6c6c;
}
.header {
  width: 1190px;
  display: flex;
  justify-content: space-between;
  .flex-inline {
    display: flex;
    justify-content: space-around;
  }
  .hover-light{
    color: $lightColor;
  }
  .item:hover{
    color: $lightColor;
    &{
      cursor: pointer;
    }
  }
  .hd-margin{
    margin-right: 7px;
  }
  .hd-padding{
    padding: 0 6px;
  }
}
</style>