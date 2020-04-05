<template>
  <l-body :f-width="700" :f-height="670" :padding="[58, 140, 52, 140]">
    <div class="title-div">完善信息</div>
    <el-form ref="form" :rules="rules" :model="form" size="mini" label-width="80px">
      <el-form-item label="姓名" prop="realName">
        <el-input class="input" placeholder="请输入姓名" v-model="form.realName" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <!-- <el-input placeholder="请选择性别" prefix-icon="el-icon-pass" v-model="form.sex" /> -->
        <el-select v-model="form.sex" class="select" placeholder="请选择性别">
          <el-option v-for="item in sexList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input class="input" placeholder="请输入年龄" v-model="form.age" />
      </el-form-item>
      <el-form-item label="国籍" prop="nationality">
        <el-input placeholder="请输入国籍" prefix-icon="el-icon-pass" v-model="form.nationality" />
      </el-form-item>
      <el-form-item label="居住地址" prop="address">
        <el-input class="input" placeholder="请输入居住地址" v-model="form.address" />
      </el-form-item>
      <el-form-item label="护照" prop="passport">
        <el-input placeholder="请输入护照编号" prefix-icon="el-icon-pass" v-model="form.passport" />
      </el-form-item>
      <el-form-item label="健康状况" prop="healthy">
        <!-- <el-input class="input" placeholder="请选择健康状况" v-model="form.healthy" /> -->
        <el-select v-model="form.healthy" class="select" placeholder="请选择健康状况">
          <el-option v-for="item in healthyList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="btn-div">
      <el-button type="primary" @click="submit">完成</el-button>
    </div>
  </l-body>
</template>

<script>
import { perfectMsg } from "network/login";
import { sexList } from "common/const";

import lBody from "./loginBody";
export default {
  name: "login",
  components: { lBody },
  props: {},
  data() {
    return {
      user: require("assets/image/login/username.png"),
      pass: require("assets/image/login/password.png"),
      checked: false,

      sexList: sexList,

      healthyList: [
        { id: 1, name: "健康" },
        { id: 2, name: "不健康" }
      ],

      form: {
        realName: "",
        sex: "",
        age: "",
        nationality: "",
        address: "",
        passport: "",
        healthy: ""
      },

      rules: {
        realName: [
          { required: true, message: "姓名不可为空", trigger: "blur" }
        ],
        sex: [{ required: true, message: "性别不可为空", trigger: "blur" }],
        age: [{ required: true, message: "年龄不可为空", trigger: "blur" }],
        nationality: [
          { required: true, message: "国籍不可为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submit() {
      this.$refs["form"].validate(flag => {
        if (flag) {
          perfectMsg(this.form).then(msg => {
            console.log(msg);
            this.$router.push("/index");
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.title-div {
  font-size: 30px;
  text-align: center;
  margin-bottom: 36px;
}
.remeber-pass {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}
.btn-div {
  margin-top: 40px;
}
.select {
  width: 100%;
}
.btn-div button {
  width: 100%;
  height: 56px;
  font-size: 20px;
  border-radius: 6px;
  background-color: #3e92fe;
}
.input {
  line-height: 40px;
}
/deep/ .el-input__prefix {
  top: 7px;
  left: 14px;
}
>>> .el-input__inner {
  height: 40px;
  line-height: 40px;
  padding-left: 12px;
  font-size: 16px;
}
/deep/ .el-form-item__label {
  line-height: 40px;
  font-size: 16px;
}
</style>