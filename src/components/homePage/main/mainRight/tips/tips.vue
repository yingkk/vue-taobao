<template>
  <div class="tips">
    <div class="tips-content">
      <a href="" class="">网上有害信息举报专区
        <span class="triggle"></span>
      </a>

    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped lang="scss">
.tips{
  width: 100%;
  height: 26px;
  font-size: 12px;
  .tips-content{
    display: flex;
    justify-content: flex-start;
    width: 208px;
    height: 100%;
    padding-left: 82px;
    color: #f40;
    line-height: 26px;
    background-color: #ffe4dd;
    a {
      text-decoration: none;
      color: #f40;
      .triggle{
        display: inline-block;
        margin-left: 32px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 0 5px 7px;
        border-color: transparent transparent transparent #f50;
      }
    }
  }
}
  
</style>