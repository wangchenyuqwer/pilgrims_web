<template>
  <m-wrapper class="edit-body">
    <s-tab>
      <span>我的消费信息</span>
    </s-tab>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="margin-top: 60px;">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别" prop="sex">
            <!-- <el-input v-model="form.name" placeholder="请输入姓名" /> -->
            <el-select v-model="form.sex" class="cus-w-100">
              <el-option v-for="item in sexList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="年龄" prop="age">
            <el-input-number
              class="cus-w-100"
              v-model="form.age"
              placeholder="请输入姓名"
              :min="0"
              controls-position="right"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="身份证" prop="IDcard">
            <el-input v-model="form.IDcard" placeholder="请输入身份证" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入电话号码" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="健康状态" prop="healthy">
            <!-- <el-input v-model="form.name" placeholder="请输入姓名" /> -->
            <el-select v-model="form.healthy" class="cus-w-100">
              <el-option
                v-for="item in healthyList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btn-div">
      <el-button type="primary" class="cus-save-btn">
        <img class="icon-img" src="~assets/image/profile/save.png" alt />
        保存
      </el-button>
    </div>
  </m-wrapper>
</template>

<script>
import sTab from "components/smallTab";

import { sexList, healthyList } from "common/const";

export default {
  name: "profile-index",
  components: { sTab },
  props: {},
  data() {
    return {
      sexList: sexList,
      healthyList: healthyList,
      form: {
        name: "",
        sex: "",
        age: 0,
        IDcard: "",
        phone: "",
        healthy: ""
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        age: [{ required: true, message: "年龄不能为空", trigger: "blur" }],
        IDcard: [
          { required: true, message: "身份证不能为空", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "电话号码不能为空", trigger: "blur" }
        ],
        healthy: [
          { required: true, message: "请选择健康状态", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    console.log(sexList);
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.cus-w-100 {
  width: 100%;
}
.edit-body {
  height: calc(100vh - 100px - 180px - 50px);
}
.btn-div {
  text-align: center;
  margin-top: 80px;
  .cus-save-btn {
    width: 180px;
    height: 42px;
    font-size: 16px;
    .icon-img {
      vertical-align: top;
      margin-right: 5px;
    }
    >>> span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>