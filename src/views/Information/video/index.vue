<template>
  <m-wrapper>
    <s-tab>
      <span>朝圣视频</span>
    </s-tab>
    <div class="list-body">
      <i-list
        v-for="item in videoList"
        :key="item.id"
        :data="item"
        type="video"
        @goDetail="goDetail"
      >
        <el-image class="shou" :src="rightImg" @click="goDetail(item)"></el-image>
      </i-list>
    </div>
    <div class="page-div">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </m-wrapper>
</template>

<script>
import sTab from "components/smallTab";
import iList from "../common/list";
export default {
  name: "video-index",
  components: { sTab, iList },
  props: {},
  data() {
    return {
      rightImg: require("assets/image/information/right.png"),
      total: 0,
      page: 1,
      pageSize: 10,
      videoList: [
        {
          id: 1,
          url: require("assets/image/information/test.png"),
          title: "冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国 最美的、令人震撼的十大名山之一，位于西藏自治区西南部普兰县北部。藏语意为神灵之山。",
          time: "2010-10-10"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 获取数据
    getVideoList() {},
    // 切换页码
    changePage(page) {
      this.page = page;
      this.getVideoList();
    },
    // 去详情页面
    goDetail(data) {
      this.$router.push({
        name: "information-detail",
        params: {
          id: data.id
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.list-body {
  padding-top: 20px;
  min-height: calc(100vh - 100px - 180px - 71px - 50px - 32px - 50px);
}
</style>