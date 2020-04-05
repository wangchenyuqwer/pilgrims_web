<template>
  <div class="list-div">
    <div class="video-div">
      <el-image class="img shou" :src="data.url" fit="cover" @click.native="goDetail"></el-image>
      <div class="filter"></div>
      <el-image
        v-if="type==='video'"
        class="shou play-img"
        :src="playImg"
        fit="cover"
        @click.native="goDetail"
      ></el-image>
    </div>
    <div class="content">
      <p class="title-p shou" @click="goDetail">{{data.title}}</p>
      <p class="content-p">{{content(data.content, 150)}}</p>
      <div class="time-div">
        <span class="time">{{data.time}}</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "common/mixin";
export default {
  name: "infor-list",
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: "image"
    }
  },
  mixins: [mixins],
  data() {
    return {
      playImg: require("assets/image/information/play.png")
    };
  },
  created() {},
  mounted() {},
  methods: {
    goDetail() {
      this.$emit("goDetail", this.data);
    }
  }
};
</script>

<style lang='scss' scoped>
.list-div {
  height: 220px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  .video-div {
    position: relative;
    .filter {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 3;
    }
    .play-img {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 4;
    }
    .img {
      width: 360px;
      min-width: 360px;
    }
  }
  .content {
    padding: 5px 0 5px 40px;
    .title-p {
      font-size: 26px;
      color: $color-2d;
    }
    .content-p {
      font-size: 16px;
      color: $color-66;
      line-height: 28px;
      height: 77px;
      margin-top: 30px;
    }
    .time-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      color: $color-88;
      font-size: 14px;
      height: 40px;
    }
  }
}
</style>