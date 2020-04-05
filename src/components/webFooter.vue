<template>
  <m-wrapper b-color="#3F3F3F" class="footer-body">
    <div class="footer-div">
      <ul class="footer-ul">
        <li v-for="item in msgList" :key="item.index">
          <span>{{item.index}}</span>:
          <span>{{item.name}}</span>
        </li>
      </ul>
      <div class="two-div">
        <img src class="two" />
        <div>APP 二维码</div>
      </div>
    </div>
  </m-wrapper>
</template>

<script>
export default {
  name: "web-footer",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    msgList() {
      return [
        {
          index: "公司名称",
          name: "四川省成都市香客旅行科技有限公司"
        },
        {
          index: "备案编号",
          name: "www.58qqqpic.com"
        },
        {
          index: "公司电话",
          name: "021-88888888"
        },
        {
          index: "公司地址",
          name: "成都市市浦东新区888号666弄上海市浦东新区888号"
        }
      ];
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
$two-width: 55px;
.footer-body {
  margin-top: 50px;
}
.footer-div {
  height: 180px;
  // color: $btn-text-color;
  color: #fff;
  padding: 17px 0;
  display: flex;
  justify-content: space-between;
  .footer-ul {
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .two-div {
    width: $two-width * 2;
    height: 100%;
    padding-top: 7px;
    img {
      width: $two-width * 2;
      height: $two-width * 2;
      background-color: #ddd;
    }
    div {
      font-size: 18px;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>