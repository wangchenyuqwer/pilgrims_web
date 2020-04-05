<template>
  <l-body>
    <div class="title-div">登录</div>
    <el-form ref="form" :rules="rules" :model="form" size="mini">
      <el-form-item prop="username">
        <el-input class="input" placeholder="请输入用户名" v-model="form.username">
          <img slot="prefix" :src="user" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-pass" v-model="form.password">
          <img slot="prefix" :src="pass" />
        </el-input>
      </el-form-item>
    </el-form>
    <div class="remeber-pass">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <span class="shou" @click="register">注册</span>
    </div>
    <div class="btn-div">
      <el-button type="primary" @click="login">立即登录</el-button>
    </div>
  </l-body>
</template>

<script>
import { LOGIN } from "store/mutation_type";

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
      form: {
        username: "",
        password: ""
      },

      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$refs["form"].validate(flag => {
        if (flag) {
          this.$store
            .dispatch(LOGIN, this.form)
            .then(() => this.$router.push("/index"));
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