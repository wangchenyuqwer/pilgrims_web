<template>
  <m-wrapper :b-color="themeColor">
    <div class="head-body">
      <div class="logo-div">
        <img src="~assets/image/home/logo.png" alt />
        <div class="name-div">
          <div>香客旅行</div>
          <div class="english-name">XIANGKELVXING</div>
        </div>
      </div>
      <div class="nav-div">
        <nav-bar></nav-bar>
      </div>
    </div>
  </m-wrapper>
</template>

<script>
import navBar from "./webNavBar";

export default {
  name: "web-header",
  components: { navBar },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.head-body {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-div {
    display: flex;
    height: 100%;
    align-items: center;
    color: #fff;
    img {
      display: block;
      width: 66px;
      height: 64px;
    }
    .name-div {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      font-size: 28px;
      .english-name {
        font-size: 14px;
        margin-top: 3px;
      }
    }
  }
}
</style>