<template>
  <m-wrapper>
    <s-tab>
      <span>报名线路列表</span>
    </s-tab>
    <div class="cus-list-body">
      <l-list v-for="item in lineList" :key="item.id" :data="item"></l-list>
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
import lList from "./component/indexList";
export default {
  name: "lint-index",
  components: { sTab, lList },
  props: {},
  data() {
    return {
      total: 20,
      page: 1,
      pageSize: 10,
      lineList: [
        {
          id: 1,
          title: "西藏口岸出入境线路",
          content:
            "乙方香客从中华人民共和国西藏口岸出入境，朝圣时间朝圣时间为10 天 9晚",
          time: "2010-10-10",
          price: "100000",
          guide: "那个谁"
        },
        {
          id: 2,
          title: "西藏口岸出入境线路",
          content:
            "乙方香客从中华人民共和国西藏口岸出入境，朝圣时间朝圣时间为10 天 9晚",
          time: "2010-10-10",
          price: "100000",
          guide: "那个谁"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    changePage(page) {
      console.log(page);
      this.page = page;
    }
  }
};
</script>

<style lang='scss' scoped>
.cus-list-body {
  min-height: calc(100vh - 180px - 100px - 50px - 71px - 32px - 50px);
}
</style>