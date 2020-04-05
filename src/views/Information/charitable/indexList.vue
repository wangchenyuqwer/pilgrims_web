<template>
  <div class="list-div">
    <div class="title-div">
      <span class="shou" @click="goDetail">{{data.title}}</span>
      <el-image class="shou" :src="rightImg" @click.native="goDetail"></el-image>
    </div>
    <p class="content-p">{{content(data.content, 200)}}</p>
    <div class="btn-div">
      <span class="time">{{data.time}}</span>
      <el-button class="btn" type="primary" @click="contribution">捐款</el-button>
    </div>
  </div>
</template>

<script>
import mixins from "common/mixin";
export default {
  name: "charitable-index",
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  mixins: [mixins],
  data() {
    return {
      rightImg: require("assets/image/information/right.png")
    };
  },
  created() {},
  mounted() {},
  methods: {
    goDetail() {
      this.$router.push({
        name: "information-detail",
        params: {
          id: this.data.id
        }
      });
    },
    contribution() {
      this.$emit("contribution", this.data);
    }
  }
};
</script>

<style lang='scss' scoped>
.list-div {
  height: 240px;
  padding: 28px 0 20px 0;
  border-bottom: 1px solid $color-eb;
}
.title-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 24px;
    line-height: 40px;
  }
}
.content-p {
  font-size: 16px;
  line-height: 28px;
  height: 80px;
  margin-top: 24px;
  color: $color-66;
}
.btn-div {
  margin-top: 7px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-88;
}
.btn {
  width: 120px;
  height: 40px;
  font-size: 18px;
  padding: 0 20px;
}
</style>
