<template>
  <div class="select-wrap">
    <div class="select">
      <div class="select-main">
        <div :class="['select-input',selected.value ? 'is-border-light': '']" @click="clickHandler">
          <!-- <div class="select-input-item"> -->
            <input
              v-model="selected.value"
              type="text"
              readonly="readonly"
              :placeholder="tip"
              @focus="focus"
              @blur="blur"
            />
            <div class="select-close" @click="clearSelected">
              <i :class="[selected.value && isShowClear ? 'fa fa-close' : '']"></i>
            </div>
          <!-- </div> -->
        </div>
        <div class="select-icon">
          <i :class="[isShow ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
        </div>

        <div class="select-data-wrap">
          <div class="select-data" v-show="isShow">
            <div
              :class="[ item.key === isLightKey ? 'is-light':'select-data-item']"
              @click="chooseItem(item)"
              v-for="(item, index) in items"
              :key="`item-${index}`"
            >{{item.value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "checked"],
  model: { prop: "checked", event: "change" },
  created() {
    this.tip = this.$attrs.placeHolder ? this.$attrs.placeHolder : this.tip;
    this.isShowClear = this.$attrs.clearable ? this.isShowClear : true;

    if (this.checked >= 0) {
      const defaultItem = this.items.filter(item => item.key === this.checked);
      this.selected = defaultItem[0];
      this.isLightKey = defaultItem[0].key;
    }

    if (this.$attrs.hasOwnProperty("clearable")) {
        const { clearable } = this.$attrs;
        this.isShowClear = !!clearable;
    }
    debugger;
    if (this.$attrs.hasOwnProperty("multiple")) {
         const { multiple } = this.$attrs;
        this.isMore = !!multiple;
    }
  },
  methods: {
    clickHandler() {
      this.isShow = !this.isShow;
    },
    chooseItem(item) {
      if (item) {
        this.selected = item;
        this.$emit("change", item.key);
        this.isShow = !this.isShow;
        this.isLightKey = item.key;
      }
    },
    focus() {
      this.$emit("focusFatherHandler");
    },
    blur() {
      this.$emit("blurFatherHandler");
    },
    clearSelected() {
      this.selected = {};
      this.isShow = false;
      this.isLightKey = "";
      //清除时设置this.checked
    }
  },
  data() {
    return {
      isShow: false,
      isShowClear: false,
      selected: {},
      isLightKey: "",
      tip: "请选择",
      focusHandler: "",
      blurHandler: "",
      isMore: false
    };
  }
};
</script>

<style scoped lang="scss">
.select-wrap {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  .select {
    width: 1190px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    .select-main {
      font-size: 14px;
      width: 800px;
      height: 100%;
      position: relative;
      .select-input {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 300px;
        height: 45px;
        border: 1px solid #a9a9a9;
        overflow: hidden;
        border-radius: 10px;
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          border-color: transparent;
          text-indent: 1em;
        }
        .select-close {
          position: absolute;
          top: 15px;
          left: 150px;
        }
      }
      .is-border-light {
        border-color: blue;
      }
      .select-icon {
        position: absolute;
        top: 25px;
        left: 290px;
      }

      .select-data-wrap {
        position: absolute;
        top: 60px;
        left: 10px;
        width: 300px;
        height: 100%;
        .select-data {
          margin-top: 10px;
          border: 1px solid #a9a9a9;
          border-radius: 10px;
          .select-data-item {
            color: black;
            line-height: 14px;
            padding: 5px 0;
          }
          .is-light {
            color: blue;
          }
        }
      }
    }
  }
}
</style>