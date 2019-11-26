<template>
  <div class="search">
    <div class="search-tabs">
      <div
        :class="['search-tabs-item', isSelected === index ? 'selected' : '']"
        @click="changeTab(tab,index)"
        v-for="(tab, index) in searchTabs"
        :key="`search-tab-${index}`"
      >{{tab.tabName}}</div>
    </div>
    <div class="search-bd">
      <div class="search-bd-panel">
        <i class="fa fa-search search-position" v-show="isSearchIconShow"></i>
        <div class="search-bd-panel-input">
          <input
            type="text"
            v-model="searchkey"
            @input="inputHandle"
            :placeholder="selectedTab.placeHoder"
          />
        </div>
        <div class="search-bd-panel-camera" v-show="cameraShow">
          <i class="fa fa-camera camera-position"></i>
        </div>
      </div>
      <div :class="['search-bd-button', isSelected === 1 ? 'tmall-red' : '']">
        <button>搜索</button>
      </div>
    </div>
    <div class="search-ft">
      <div
        class="search-ft-item"
        v-for="(item, index) in selectedTab.tabItems"
        :key="`search-ft-item-${index}`"
      >
        <a :class="item.isLight ? 'hover-light' : ''" :href="item.href">{{item.label}}</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    changeTab(tab, index) {
      if (tab == null) {
        this.searchTabs[0] = tab;
        this.cameraShow = true;
      }
      if (index > 0) {
        this.cameraShow = false;
      }
      this.isSelected = index;
      this.selectedTab = tab;
    },
    inputHandle() {
      if (this.searchkey) {
        this.isSearchIconShow = false;
      } else {
        this.isSearchIconShow = true;
      }
    }
  },
  created() {
    this.selectedTab = this.searchTabs[0];
  },
  data() {
    return {
      isSearchIconShow: true,
      searchkey: "",
      isSelected: 0,
      cameraShow: true,
      searchTabs: [
        {
          tabName: "宝贝",
          placeHoder: "aj模型鞋",
          tabItems: [
            {
              label: "新款连衣裙",
              href: "",
              isLight: false
            },
            {
              label: "四件套",
              href: "",
              isLight: false
            }
          ]
        },
        {
          tabName: "天猫",
          placeHoder: "",
          tabItems: []
        },
        {
          tabName: "店铺",
          placeHoder: "",
          tabItems: [
            {
              label: "新款连衣裙",
              href: "",
              isLight: false
            },
            {
              label: "四件套",
              href: "",
              isLight: false
            }
          ]
        }
      ],
      selectedTab: {}
    };
  }
};
</script>


<style scoped lang="scss">
@import "../../../sheet/common.scss";
.search {
  width: 630px;
  .search-tabs {
    width: 100%;
    height: 22px;
    margin-left: 17px;
    display: flex;
    justify-content: flex-start;
    .search-tabs-item {
      width: 36px;
      height: 22px;
      margin-right: 4px;
      color: #f50;
      line-height: 22px;
    }
    .search-tabs-item:hover {
      background-color: #ffeee5;
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color: #fff;
      background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
      background-repeat: repeat-x;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
  .search-bd {
    width: 626px;
    height: 36px;
    display: flex;
    align-items: center;
    border: 2px solid $fontLightColor;
    overflow: hidden;
    border-radius: 20px;
    .search-bd-panel {
      position: relative;
      display: flex;
      justify-content: flex-start;
      width: 554px;
      height: 100%;
      font-size: $fontSizeBig;
      .search-bd-panel-input {
        position: relative;
        width: 472px;
        justify-content: flex-start;
        width: 472px;
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          padding: 0;
          text-indent: 10px;
          background-color: transparent;
        }
        input::-webkit-input-placeholder {
          position: relative;
          left: 25px;
        }
      }
      .search-bd-panel-camera {
        position: absolute;
        right: 10px;
        line-height: 16px;
        .camera-position {
          margin-top: 8px;
          margin-right: 20px;
          color: #666;
        }
      }
      .search-position {
        position: absolute;
        top: 8px;
        left: 14px;
        color: #666;
      }
    }

    .search-bd-button {
      width: 74px;
      height: 100%;
      background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
      background-repeat: repeat-x;
      overflow: hidden;
     
      button {
        line-height: 36px;
        background-color: transparent;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        border: none;
        outline: none;
        display: inline-block;
      }
    }
    .tmall-red {
      background-image: linear-gradient(to right, #ff4200 0, #ff4200 100%);
      }
  }
  .search-ft {
    width: 100%;
    height: 18px;
    padding: 5px 41px 0 0;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
  }
  .hover-light {
    color: $fontLightColor;
  }
  a {
    text-decoration: none;
    font-size: $fontSize;
    color: #3c3c3c;
    cursor: pointer;
  }
  a:hover {
    color: $fontLightColor;
  }
}
</style>