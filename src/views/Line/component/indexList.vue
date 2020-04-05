<template>
  <div class="list-body">
    <div class="title-div">
      <span class="title-span shou" v-text="data.title" @click="goDetail"></span>
      <span class="shou" @click="goDetail">
        <img src="~assets/image/line/right.png" />
      </span>
    </div>
    <p class="content" v-text="data.content"></p>
    <div class="bot-div">
      <div>
        <span class="left-span">价格：</span>
        <span class="red" v-text="data.price"></span>元
      </div>
      <div>
        <el-button type="primary" class="cus-btn-sign" @click="$emit('signUp',data)">我要报名</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-list",
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goDetail() {
      this.$router.push({
        name: "line-detail",
        params: {
          id: this.data.id
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.list-body {
  border-bottom: 1px solid $color-eb;
  color: $color-2d;
  padding: 30px 0;
  .title-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    .title-span {
      font-size: 24px;
    }
  }
  .content {
    margin-bottom: 30px;
  }
  .bot-div {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-weight: bold;
    .red {
      color: #f00;
    }
  }
  .cus-btn-sign {
    font-size: 18px;
    width: 120px;
    height: 40px;
    padding: 0 20px;
  }
}
</style>