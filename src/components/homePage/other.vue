<template>
  <div class="other-wrap">
    <div class="other">
      <select-tag
        :items="dataList"
        v-model="checked"
        placeHolder="选一个吧"
        @focusHandler="focusHandler"
        @blurHandler="blurHandler"
        clearable
        multiple
      />
    </div>
  </div>
</template>

<script>
import selectTag from "../select/select";
export default {
  components: { selectTag },
  methods: {
    focusHandler() {
      console.log("do focus things");
    },
    blurHandler() {
      console.log("do blur things");
    }
  },
  watch: {
    checked(newValue, oldValue) {
      console.log(newValue);
    }
  },
  data() {
    return {
      checked: [1],
      dataList: [
        {
          key: 1,
          value: "西安-测试"
        },
        {
          key: 2,
          value: "上海"
        },
        {
          key: 3,
          value: "北京"
        },
        {
          key: 4,
          value: "重庆"
        },
        {
          key: 5,
          value: "厦门"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.other-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  .other {
    display: flex;
    justify-content: flex-start;
    width: 1190px;
    height: 100%;
  }
}
</style>