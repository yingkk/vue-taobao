<template>
  <div class="promo">
    <main-core />
    <main-col />
  </div>
</template>

<script>
import mainCore from "../main/mainCore/mainCore";
import mainCol from "../main/mainCol/mainCol";
export default {
  components: {
    mainCore,
    mainCol
  }
};
</script>

<style scoped lang="scss">
.promo {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
</style>