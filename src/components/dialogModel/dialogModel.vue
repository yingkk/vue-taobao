<template>
  <div class="dialog-wrap">
    <span @click="openDialog">提示框</span>
    <div class="dialog" v-show="isShow">
      <div class="dialog-inner">
        <div class="header-wrap">
          <div class="header">提示</div>
          <div class="close" @click="closeDialog">
            <i class="fa fa-close"></i>
          </div>
        </div>

        <div class="content-wrap">
          <box>
            <template v-slot:content>
              <div class="content-label">{{main.content}}</div>
              <div class="content-input" v-if="main.hasInput">
                <input type="text" />
              </div>
            </template>
          </box>
        </div>

        <div class="btns-wrap">
          <div
            :class="['btn-item', item.key === 'cancle' ? 'cancle-bg' : '']"
            v-for="(item, index) in btnItems"
            :key="`btn-item-${index}`"
          >
            <button>{{ item.value }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import box from "./box/box";
export default {
  components: {
    box
  },
  data() {
    return {
      isShow: false,
      main: {
        content: "要吃烤山药吗？",
        hasInput: false
      },
      btnItems: [
        {
          key: "cancle",
          value: "取消"
        },
        {
          key: "confirm",
          value: "确定"
        }
      ]
    };
  },
  methods: {
    openDialog() {
      this.isShow = true;
    },
    closeDialog() {
      this.isShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-wrap {
  width: 100%;
  height: 100%;
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 360px;
    height: 210px;
    margin-left: -210px;
    margin-top: -105px;
    border: 1px solid #a9a9a9;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    .dialog-inner {
      width: 100%;
      height: 100%;
      .header-wrap {
        width: 340px;
        height: 45px;
        display: flex;
        justify-content: space-between;
        margin: 10px;
        font-size: 18px;
      }
      .content-wrap {
        width: 300px;
        min-height: 100px;
        text-align: left;
        margin: 5px 10px;
        font-size: 14px;
        .content-label {
          width: 100%;
          min-height: 24px;
          line-height: 24px;
        }
        .content-input {
          width: 340px;
          height: 100%;
          border: 1px solid blue;
          border-radius: 5px;
          text-align: center;
          overflow: hidden;
          input {
            width: 310px;
            height: 38px;
            padding: 0 15px;
            border: none;
            outline: none;
          }
        }
      }
      .btns-wrap {
        width: 345px;
        height: 32px;
        font-size: 12px;
        margin: 5px 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .btn-item {
          width: 56px;
          height: 100%;
          background-color: #409eff;
          border-radius: 5px;
          border: 1px solid #dcdfe6;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            background-color: transparent;
            border: none;
            font-weight: 500;
            color: #fff;
          }
        }
        .cancle-bg {
          background-color: #dcdfe6;
          button {
            color: #3c3c3c;
          }
        }
      }
    }
  }
}
</style>