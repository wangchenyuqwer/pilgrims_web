<template>
  <m-wrapper>
    <s-tab>
      <span>我的消费信息</span>
    </s-tab>
    <div class="cus-table-div">
      <el-table
        :data="cptList"
        border
        style="font-size: 16px; margin-top: 30px;"
        :header-cell-style="headStyle"
      >
        <el-table-column label="序号" align="center" prop="id" />
        <el-table-column label="订单类型" align="center" prop="type" />
        <el-table-column label="支出费用" align="center" prop="price">
          <template slot-scope="scope">
            <span :class="{blue:scope.row.type=='报名'}">{{scope.row.price}}元</span>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" align="center" prop="status">
          <template slot-scope="scope">
            <span>{{orderState(scope.row.status)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="提交时间" align="center" prop="time" />
      </el-table>
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
export default {
  name: "consumption-index",
  components: { sTab },
  props: {},
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      cptList: [
        {
          id: 1,
          type: "报名",
          price: 1000,
          status: 1,
          time: "2010-10-10"
        },
        {
          id: 2,
          type: "报名",
          price: 1000,
          status: 2,
          time: "2010-10-10"
        },
        {
          id: 3,
          type: "捐款",
          price: 1000,
          status: 1,
          time: "2010-10-10"
        }
      ]
    };
  },
  computed: {
    headStyle() {
      return {
        backgroundColor: "#f7f7f7",
        color: "#272727",
        fontSize: "16px"
      };
    }
  },
  created() {},
  mounted() {},
  methods: {
    orderState(state) {
      return state == 1 ? "支出成功" : state == 2 ? "支出失败" : "";
    },
    changePage(page) {
      console.log(page);
      this.page = page;
    }
  }
};
</script>

<style lang='scss' scoped>
.cus-table-div {
  min-height: calc(100vh - 180px - 100px - 50px - 71px - 30px - 32px - 50px);
}
.blue {
  color: $theme-color;
}
</style>