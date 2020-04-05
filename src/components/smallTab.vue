<template>
  <m-wrapper>
    <div class="title-div">
      <span class="label"></span>
      <slot></slot>
    </div>
  </m-wrapper>
</template>

<script>
export default {
  name: "small-tab"
};
</script>

<style lang='scss' scoped>
.title-div {
  height: 71px;
  border-bottom: 1px solid #cecece;
  padding: 30px 0 17px 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  .label {
    display: block;
    width: 4px;
    height: 24px;
    background: $theme-color;
    margin-right: 24px;
  }
}
</style>