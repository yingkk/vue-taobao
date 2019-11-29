<template>
  <div class="select">
    <!-- 复选 -->
    <div v-if="multiple" class="select-mult">
      <div class="select-panel" @click="showItems">
        <div :class="['select-panel-input', this.highLightList.length && multiple ? 'clear-area': '']">
          <input
            type="text"
            readonly="readonly"
            :placeholder="defaultPlaceHolder"
            @blur="childBlur"
            @focus="childFocus"
          />
        </div>
        <div class="select-mult-items">
          <div
            class="select-mult-item"
            @click="deleteItem(index)"
            v-for="(item, index) in selectedList"
            :key="`selected-item-${index}`"
          >
            <span>{{ item.value }}</span>
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="select-panel-icon">
          <i :class="[ isItemsShow ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
        </div>
      </div>
    </div>
    <!-- 复选 -->

    <!-- 单选 -->
    <div
      v-else
      :class="['select-inner', selectedValue ? 'border-light' : '', selectedValue && clearable ? 'display-close' : '']"
    >
      <div class="select-panel" @click="showItems">
        <div class="select-panel-input">
          <input
            v-model="selectedValue"
            type="text"
            readonly="readonly"
            :placeholder="defaultPlaceHolder"
            @blur="childBlur"
            @focus="childFocus"
          />
        </div>
        <div class="select-close" @click="clearableItem">
          <i :class="[ selectedValue && clearable ? 'fa fa-close' : '']"></i>
        </div>
        <div class="select-panel-icon">
          <i :class="[ isItemsShow ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
        </div>
      </div>
    </div>
    <!-- 单选 -->

    <div class="select-items" v-show="isItemsShow">
      <div
        :class="['select-item', highLightList.includes(item.key) ? 'high-light' : '']"
        @click="chooseItem(item)"
        v-for="(item, index) in items"
        :key="`item-${index}`"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "checked"],
  model: {
    prop: "checked",
    event: "change"
  },
  data() {
    return {
      isItemsShow: false,
      selectedList: [],
      highLightList: [],
      defaultPlaceHolder: "请选择",
      selectedValue: ""
    };
  },
  created() {
    this.addEventListener();
    this.selectedList = this.items.filter(item =>
      this.checked.includes(item.key)
    );
    this.selectedValue = this.selectedList[0].value;
    this.highLightList = this.checked;

    this.defaultPlaceHolder = this.$attrs.placeHolder
      ? this.$attrs.placeHolder
      : this.defaultPlaceHolder;
  },
  computed: {
    clearable() {
      return this.$attrs.hasOwnProperty("clearable");
    },
    multiple() {
      return this.$attrs.hasOwnProperty("multiple");
    }
  },
  methods: {
    showItems(event) {
      event.stopPropagation();
      this.isItemsShow = !this.isItemsShow;
    },
    chooseItem(item) {
      if (item) {
        if (this.multiple) {
          const itemLightIndex = this.highLightList.findIndex(t => t === item.key);
          if(itemLightIndex > -1){
            this.highLightList.splice(itemLightIndex, 1);
          }else{
            this.highLightList.push(item.key);
          }

          const itemSelectedIndex = this.selectedList.findIndex(t => t.key === item.key);
          if (itemSelectedIndex > -1) {
            this.selectedList.splice(itemSelectedIndex, 1);
          } else {
            this.selectedList.push(item);
          }
        } else {
          this.selectedList = [];
          this.selectedList.push(item);
          this.highLightList = [];
          this.highLightList.push(item.key);
          this.selectedValue = item.value;
        }
        this.$emit("change", this.highLightList);
        this.isItemsShow = false;
      }
    },
    clearableItem() {
      this.selectedList.splice(0, 1);
      this.highLightList.splice(0, 1);
      this.selectedValue = "";
      this.$emit("change", this.highLightList);
    },
    childFocus() {
      this.$emit("focusHandler");
    },
    childBlur() {
      this.$emit("blurHandler");
    },
    deleteItem(index) {
      this.selectedList.splice(index, 1);
      this.highLightList.splice(index, 1);
      this.$emit("change", this.highLightList);
    },
    addEventListener () {
      document.body.addEventListener("click", () => {
        this.isItemsShow = false;
      })
    }

  }
};
</script>
<style scoped lang="scss">
.select {
  width: 800px;
  height: 500px;
  border: 1px solid #a9a9a9;
  font-size: 14px;
  .select-mult,
  .select-inner {
    width: 240px;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    .select-panel {
      width: 260px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .select-panel-input {
        margin: 3px 0 3px 3px;
        width: 80%;
        input {
          font-size: 14px;
          width: 100%;
          min-height: 35px;
          border: none;
          outline: none;
          text-indent: 1em;
        }
        input::-webkit-input-placeholder {
          font-size: 14px;
        }
      }
      .clear-area {
        width: 0;
        height: 0;
      }
      .select-panel-icon {
        margin-right: 40px;
        padding-left: 10px;
      }
      .select-close {
        margin-right: 40px;
        display: none;
        z-index: 9999;
        cursor: pointer;
      }
    }
    .select-mult-items {
      width: 100%;
      min-height: 35px;
      display: flex;
      justify-content: flex-start;
      flex-flow: wrap;
      align-items: center;
      z-index: 999;
      .select-mult-item {
        margin: 2px 4px;
        background-color: #eee;
        padding: 4px 4px;
        border-radius: 8px;
        i {
          margin-left: 4px;
        }
      }
    }
  }
  .select-items {
    margin-top: 10px;
    margin-left: 10px;
    width: 240px;
    min-height: 90px;
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    .select-item {
      padding-top: 5px;
    }
    .high-light {
      color: blue;
      font-weight: bold;
    }
  }
  .border-light {
    border-color: blue;
  }
  // 当显示close时，鼠标移动到display-close区域时，所有的下拉、收起按钮隐藏
  .display-close:hover .select-panel-icon {
    display: none;
  }
  // 鼠标移动到select-panel上时，select-panel里的close标签显示
  .select-panel:hover .select-close {
    display: block;
  }
}
</style>