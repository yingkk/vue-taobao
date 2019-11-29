<template>
  <div class="select">
    <div class="select-main">
      <div class="mult-select" v-if="multiple" @click="clickHandler">
        <div class="mult-input">
          <input
            type="text"
            readonly="readonly"
            :placeholder="!isLightKey.length ? tip : ''"
            @focus="focus"
            @blur="blur"
            ref="input"
          />
        </div>
        <div class="mult-select-item-wrap">
          <div
            class="mult-select-item"
            @click="closeMultItem(index)"
            v-for="(item, index) in multItems"
            :key="`mult-item-${index}`"
          >
            <span>{{ item.value }}</span>
            <i class="fa fa-close"></i>
          </div>
        </div>

        <div class="select-close" @click="clearSelected">
          <i :class="[selected.value && isShowClear ? 'fa fa-close' : '']"></i>
        </div>
        <div class="select-icon">
          <i :class="[isShow ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
        </div>
      </div>
      <!-- 单选 -->
      <div
        v-else
        :class="['select-input',selected.value ? 'is-border-light': '',selected.value && isShowClear ? 'display-close' : '']"
        @click="clickHandler"
      >
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
        <div class="select-icon">
          <i :class="[isShow ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
        </div>
      </div>

      <div class="select-data-wrap">
        <transition name="slide-fade">
          <div class="select-data" v-show="isShow">
            <div
              :class="[ isLightKey.includes(item.key) ? 'is-light':'select-data-item']"
              @click="chooseItem(item)"
              v-for="(item, index) in items"
              :key="`item-${index}`"
            >{{item.value}}</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "checked"],
  model: { prop: "checked", event: "change" },
  created() {
    //2.调用
    this.addEventlinster();
    this.tip = this.$attrs.placeHolder ? this.$attrs.placeHolder : this.tip;

    if (this.multiple) {
      this.isLightKey = this.checked;
      this.multItems = this.items.filter(t => this.checked.includes(t.key));
    } else {
      const defaultItem = this.items.filter(item => item.key === this.checked);
      this.selected = defaultItem[0];
      this.isLightKey.push(defaultItem[0].key);
    }
  },
  computed: {
    multiple() {
      return this.$attrs.hasOwnProperty("multiple");
    },
    isShowClear() {
      return this.$attrs.hasOwnProperty("clearable");
    }
  },
  methods: {
    // 1.body添加事件监听
    addEventlinster() {
      document.body.addEventListener("click", () => {
        this.isShow = false;
        // this.$refs.input.blur();
      });
    },
    closeMultItem(index) {
      this.multItems.splice(index, 1);
      this.isLightKey.splice(index, 1);
    },
    clickHandler(event) {
      //3.点击事件 阻止事件冒泡（阻止事件冒泡：保证父级dom点击事件不渗透到子级）
      event.stopPropagation();
      this.isShow = !this.isShow;
      // 外部元素聚焦input
      this.$refs.input.focus();
    },
    chooseItem(item) {
      if (item) {
        if (this.multiple) {
          this.multItems.push(item);
          this.isLightKey.push(item.key);
          this.$emit("change", this.isLightKey);
        } else {
          this.selected = item;
          this.$emit("change", item.key);
          this.isShow = !this.isShow;
          this.isLightKey.push(item.key);
        }
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
      this.isLightKey = [];
      this.$emit("change", "");
    }
  },
  data() {
    return {
      isShow: false,
      selected: {},
      isLightKey: [],
      tip: "请选择",
      focusHandler: "",
      blurHandler: "",
      isMore: false,
      multItems: []
    };
  }
};
</script>

<style scoped lang="scss">
.select {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  .select-main {
    font-size: 14px;
    width: 800px;
    height: 100%;
    .mult-select,
    .select-input {
      position: relative;
      width: 300px;
      min-height: 45px;
      border: 1px solid #a9a9a9;
      // overflow: hidden;
      border-radius: 10px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-color: transparent;
        text-indent: 1em;
        display: inline-block;
      }
      .mult-input {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .mult-select-item-wrap {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .mult-select-item {
          // width: 40px;
          height: 20px;
          margin-left: 5px;
          border: 1px solid blue;
          color: blue;
        }
      }
      
      // + 表示 input下第一个为select-close的兄弟元素
      // input:hover + .select-close {
      //   display: block;
      // }
      // ~ 表示 display-close 的所有同级兄弟元素
      .display-close:hover ~ .select-icon {
        display: none;
      }
      .select-close {
        position: absolute;
        top: 15px;
        left: 260px;
        display: none;
        z-index: 9999;
        transition: all 0.8s;
      }
      .select-icon {
        position: absolute;
        top: 15px;
        left: 260px;
        transition: all 0.8s;
      }
    }
    .select-input:hover .select-close {
      display: block;
    }
    .is-border-light {
      border-color: blue;
    }
    .select-data-wrap {
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>