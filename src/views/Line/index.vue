<template>
  <m-wrapper>
    <s-tab>
      <span>线路浏览</span>
    </s-tab>
    <div class="index-list-body">
      <l-list v-for="item in lineList" :key="item.id" :data="item" @signUp="signUp"></l-list>
    </div>
    <div class="page-div">
      <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
    </div>

    <!-- 报名 -->
    <el-dialog :visible.sync="signUpShow" width="600px">
      <div class="model-body" style="padding: 10px 80px 0;font-size: 16px;">
        <el-form
          :model="form"
          ref="form"
          label-width="100px"
          :rules="rules"
          style="font-size: 16px;"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份信息" prop="IDcard">
            <el-input v-model="form.IDcard" placeholder="请输入身份信息"></el-input>
          </el-form-item>
          <el-form-item label="选择时间" prop="time">
            <el-date-picker style="width: 100%" v-model="form.time" type="date" placeholder="请选择时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="报名费用" prop="price">
            <el-input-number
              style="width: 100%"
              v-model="form.price"
              placeholder="请输入报名费用"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="signUpShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </m-wrapper>
</template>

<script>
import sTab from "components/smallTab";
import lList from "./component/indexList";

import { signUp, getLineList } from "network/line";
export default {
  name: "lint-index",
  components: { sTab, lList },
  props: {},
  data() {
    return {
      total: 0,
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
      ],

      signUpShow: false,

      form: {
        name: "",
        IDcard: "",
        time: "",
        price: 0
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        IDcard: [
          { required: true, message: "身份信息不能为空", trigger: "blur" }
        ],
        time: [{ required: true, message: "时间不能为空", trigger: "blur" }],
        price: [
          { required: true, message: "报名费用不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 获取数据
    getLineList() {
      getLineList().then(msg => {
        console.log(msg);
      });
    },
    // 切换页码
    changePage(page) {
      this.page = page;
      this.getLineList();
    },
    // 报名 弹出
    signUp(data) {
      this.form.price = data.price;
      this.signUpShow = true;
    },
    // 提交表单
    submit() {
      this.$refs["form"].validate(flag => {
        if (flag) {
          signUp(this.form).then(msg => {
            console.log(msg);
            this.signUpShow = false;
          });
        }
      });
    }
  }
};
</script>

<style  scoped>
.index-list-body {
  min-height: calc(100vh - 180px - 100px - 50px - 71px - 32px - 50px);
}
.model-body {
  padding: 40px 70px 20px;
}
.dialog-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
>>> .el-dialog__header {
  display: none;
}
</style>