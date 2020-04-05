<template>
  <div class="home-btn-item shou">
    <img :src="imgurl" alt />
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "home-btn-imte",
  components: {},
  props: {
    imgurl: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
$width: 135px;
$height: 50px;
.home-btn-item {
  width: $width * 2;
  height: $height * 2;
  border: 2px solid $theme-color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 8px;
  // padding: 25px 45px;
  img {
    width: $height;
    height: $height;
  }
  div {
    margin-left: 15px;
    color: $theme-color;
  }
}
</style>