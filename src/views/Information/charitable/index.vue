<template>
  <m-wrapper>
    <s-tab>
      <span>朝圣慈善列表</span>
    </s-tab>
    <div class="list-body">
      <i-list v-for="item in chaList" :key="item.id" :data="item" @contribution="contribution"></i-list>
    </div>
    <div class="page-div">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      ></el-pagination>
    </div>

    <!-- 捐款 -->
    <el-dialog :visible.sync="contributionShow" width="600px">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="90px"
        style="padding: 0px 60px;"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="身份信息" prop="name">
          <el-input v-model="form.IDcard" placeholder="请输入身份信息" />
        </el-form-item>
        <el-form-item label="捐款金额" prop="money">
          <el-input-number
            v-model="form.money"
            placeholder="请输入捐款金额"
            :min="0"
            controls-position="right"
            style="width: 330px;text-align: left;"
            :precision="2"
          />
          <span>&nbsp;元</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="contributionShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </m-wrapper>
</template>

<script>
import sTab from "components/smallTab";
import iList from "./indexList";
export default {
  name: "chairtable-index",
  components: { sTab, iList },
  props: {},
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      chaList: [
        {
          id: 1,
          title: "冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大名山之一，位于西藏自治区西南 部普兰县北部。藏语意为神灵之山。冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大名山之一，位于西藏自治区西南 部普兰县北部。藏语意为神灵之山。",
          time: "2010-10-10"
        },
        {
          id: 2,
          title: "冈仁波齐转山之旅开启5G云游",
          content:
            "冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大名山之一，位于西藏自治区西南 部普兰县北部。藏语意为神灵之山。冈仁波齐峰(Kangrinboqe)，山顶高度海拔6656米是中国冈底斯山脉主峰，也是冈底斯山脉第二高峰，是中国最美的、令人震撼的十大名山之一，位于西藏自治区西南 部普兰县北部。藏语意为神灵之山。",
          time: "2010-10-10"
        }
      ],

      contributionShow: false,
      form: {
        name: "",
        IDcard: "",
        money: 0
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        IDcard: [
          { required: true, message: "身份信息不能为空", trigger: "blur" }
        ],
        money: [
          { required: true, message: "捐款金额不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 获取list
    getCharitableList() {
      let para = {
        page: this.page,
        pageSize: this.pageSize
      };
    },
    // 切换页码
    changePage(page) {
      this.page = page;
      this.getCharitableList();
    },
    // 弹出框
    contribution(data) {
      this.form.id = data.id;
      this.contributionShow = true;
    },
    // 提交表单
    submit() {
      this.$refs.form.validate(flag => {
        if (flag) {
          console.log(123);
          this.contributionShow = false;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.list-body {
  min-height: calc(100vh - 100px - 180px - 71px - 50px - 32px - 50px);
}
.page-div {
  display: flex;
  justify-content: center;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 60px 30px 0;
}
</style>