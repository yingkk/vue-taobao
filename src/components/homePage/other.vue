<template>
  <div class="other-wrap">
    <div class="other">
      <select-tag :items="dataList" @change="changeHandler" v-model="defaultValue" placeholder="选我"/>
    </div>
  </div>
</template>

<script>
import selectTag from "../select/select";
export default {
  methods: {
    changeHandler(value) {
      console.log(value);

    }

  },
  components: { selectTag },
  watch: {
     defaultValue(newValue, oldValue) {
       console.log(newValue);

     }
  },
  data() {
    return {
      defaultValue: 2,
      dataList: [
        {
          key: 1,
          value: "西安"
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
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
.other-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  .other {
    display: flex;
    justify-content: flex-start;
    width: 1190px;
    height: 100%;
  }
}
</style>