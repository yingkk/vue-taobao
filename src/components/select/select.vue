<template>
  <div class="select-wrap">
    <div class="select" @click="showData">
      <div class="select-input">
        <input v-model="selected.value" type="text" placeholder="请选择" readonly="readonly" />
      </div>
      <div class="select-btn">
        <i :class="[ isShow ? 'fa fa-angle-up':'fa fa-angle-down']"></i>
      </div>
      <div class="select-data-wrap" v-show="isShow">
        <div class="select-data">
          <div
            class="select-data-item"
            @click="selectedItem(item)"
            v-for="(item, index) in items"
            :key="`item-${index}`"
          >{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "defaultValue"],
  data() {
    return {
      isShow: false,
      selected: {}
    };
  },
  model: {
    prop: "defaultValue",
    event: "changeModel"
  },

  created() {
    const item = this.items.filter(t => {
      return t.key === this.defaultValue;
    });
    this.selected = item[0];

    // console.log(this.$attrs);
  },
  methods: {
    showData() {
      //   if (this.isShow) {
      //     this.isShow = false;
      //   } else {
      //     this.isShow = true;
      //   }
      this.isShow = !this.isShow;
    },
    selectedItem(item) {
      if (item != null) {
        this.selected = item;
        this.$emit("change", item.key);
        this.$emit("changeModel", item.key);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.select-wrap {
  display: flex;
  flex-flow: column;
  width: 260px;
  height: 40px;
  padding: 10px;
  .select {
    position: relative;
    width: 100%;
    height: 100%;
    .select-input {
      position: absolute;
      text-align: center;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid #eee;
      overflow: hidden;
      input {
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        border-color: transparent;
        text-indent: 1em;
      }
    }
    .select-btn {
      position: absolute;
      right: 20px;
      top: 15px;
    }
    .select-data-wrap {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 100%;
      .select-data {
        border: 1px solid #eee;
        .select-data-item {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          height: 25px;
          width: 100%;
          padding-top: 5px;
          clear: both;
        }
      }
    }
  }
}
</style>