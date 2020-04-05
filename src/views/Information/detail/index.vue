<template>
  <m-wrapper>
    <s-tab>
      <span>朝圣信息详情</span>
    </s-tab>
    <div class="detail-div">
      <div class="title-div" v-text="data.title"></div>
      <div class="time" v-text="data.time"></div>
      <el-image class="image" :src="data.img"></el-image>
      <div class="content" v-html="data.content"></div>
    </div>
  </m-wrapper>
</template>

<script>
import sTab from "components/smallTab";
export default {
  name: "information-detail-index",
  components: { sTab },
  props: {},
  data() {
    return {
      data: {
        title: "冈仁波齐转山之旅开启5G云游",
        time: "2020-03-23 23:46:09",
        img: require("assets/image/information/test.png"),
        content: `<div>冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大 名山之一，位于西藏自治区西南部普兰县北部。藏语意为神灵之山。</div>
        <div>冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大 名山之一，位于西藏自治区西南部普兰县北部。藏语意为神灵之山。</div>
        <div>冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大 名山之一，位于西藏自治区西南部普兰县北部。藏语意为神灵之山。</div>`
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.detail-div {
  padding: 32px 100px 0;
  .title-div {
    text-align: center;
    font-size: 28px;
    line-height: 40px;
    color: $color-2d;
  }
  .time {
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    color: $color-66;
    margin-top: 24px;
  }
  .image {
    margin-top: 32px;
  }
  .content {
    margin-top: 32px;
  }
}
</style>