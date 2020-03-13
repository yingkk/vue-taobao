<template>
  <div class="dialog-inner">
    <slot name="header" :header="header"></slot>
    <slot name="main" :main="main"></slot>
    <slot name="footer" :btnItems="btnItems"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "问你呢",
      main: {
        content: "吃烤山药吗",
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
  }
};
</script>