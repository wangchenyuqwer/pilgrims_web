<template>
  <!-- <div>签证</div> -->
  <m-wrapper>
    <s-tab>
      <span>签证列表</span>
    </s-tab>
    <div class="index-list-body">
      <v-list v-for="item in visaList" :key="item.id" :data="item"></v-list>
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

import vList from "./component/indexVisaList";
export default {
  name: "visa-index",
  components: { sTab, vList },
  props: {},
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      visaList: [
        {
          id: 1,
          title:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          time: "2011/10/10"
        },
        {
          id: 2,
          title:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          time: "2011/10/10"
        },
        {
          id: 3,
          title:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅开启5G云游冈仁波齐转山之旅 开启5G云游冈仁波齐转山之旅开启5G云游",
          time: "2011/10/10"
        }
      ],
      page: 1,
      pageSize: 10,
      total: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 获取签证列表
    getVisaList() {
      let para = {
        page: this.page,
        pageSize: this.pageSize
      };
    },
    // 切换页码
    changePage(page) {
      this.page = page;
      this.getVisaList();
    }
  }
};
</script>

<style lang='scss' scoped>
.index-list-body {
  min-height: calc(100vh - 180px - 100px - 50px - 71px - 32px - 50px);
}
</style>