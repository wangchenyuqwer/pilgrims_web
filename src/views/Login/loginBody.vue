<template>
  <div class="login-body">
    <div class="login-div" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-body",
  props: {
    fWidth: {
      type: Number,
      default: 600
    },
    fHeight: {
      type: Number,
      default: 490
    },
    padding: {
      type: Array,
      default: () => [58, 80, 100, 80]
    }
  },
  computed: {
    bodyStyle() {
      let padding = this.padding.join("px ") + "px";
      return {
        width: this.fWidth + "px",
        height: this.fHeight + "px",
        padding
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.login-body {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  background-image: url("~assets/image/login/back.png");
  background-position: 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-div {
  width: 600px;
  height: 490px;
  padding: 58px 80px 100px 80px;
  background-color: #fff;
}
</style>