<template>
  <l-body :f-height="500">
    <div class="title-div">注册</div>
    <el-form ref="form" :rules="rules" :model="form" size="mini">
      <el-form-item prop="phone">
        <el-input class="input" placeholder="请输入手机号码" v-model="form.phone">
          <img slot="prefix" :src="user" />
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div class="code-div">
          <el-input placeholder="请输入验证码" prefix-icon="el-icon-pass" v-model="form.code">
            <img slot="prefix" :src="code" />
          </el-input>
          <el-button class="get-code" type="primary" @click="getCode">获取验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-pass" v-model="form.password">
          <img slot="prefix" :src="pass" />
        </el-input>
      </el-form-item>
    </el-form>
    <div class="btn-div">
      <el-button type="primary" @click="login">注册</el-button>
    </div>
  </l-body>
</template>

<script>
import { getCode, register } from "network/login";

import lBody from "./loginBody";
export default {
  name: "login",
  components: { lBody },
  props: {},
  data() {
    return {
      user: require("assets/image/login/username.png"),
      pass: require("assets/image/login/password.png"),
      code: require("assets/image/login/code.png"),
      checked: false,
      form: {
        phone: "",
        code: "",
        password: ""
      },

      rules: {
        phone: [
          { required: true, message: "手机号码不可为空", trigger: "blur" }
        ],
        code: [{ required: true, message: "验证码不可为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    getCode() {
      let para = {
        phone: this.form.phone
      };
      getCode(para).then(res => {
        console.log(res);
      });
    },
    login() {
      this.$refs["form"].validate(flag => {
        if (flag) {
          register(this.form).then(msg => {
            console.log(msg);
            this.$router.replace({
              url: "/perfectMsg",
              name: "perfectMsg",
              params: {
                id: msg
              }
            });
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
  margin-top: 45px;
}
.btn-div button {
  width: 100%;
  height: 56px;
  font-size: 20px;
  border-radius: 6px;
  background-color: #3e92fe;
}
.code-div {
  display: flex;
}
.get-code {
  margin-left: 24px;
  min-width: 120px;
  font-size: 16px;
}
.input {
  line-height: 56px;
}
/deep/ .el-input__prefix {
  top: 7px;
  left: 14px;
}
>>> .el-input__inner {
  height: 56px;
  line-height: 56px;
  padding-left: 49px;
  font-size: 16px;
}
</style>