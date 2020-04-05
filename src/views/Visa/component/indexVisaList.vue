<template>
  <div class="list-body">
    <p class="title shou" v-text="data.title" @click="goDetail"></p>
    <p class="content" v-text="content()"></p>
    <div class="time-div">
      <span class="time">日期:{{' '+data.time}}</span>
      <span @click="goDetail" class="shou">
        <img src="~assets/image/visa/right.png" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "visa-list",
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
        name: "visa-detail",
        params: {
          id: this.data.id
        }
      });
    },
    content() {
      let str = this.data.content;
      if (str && str.length > 220) {
        str = str.substr(0, 220);
        str += "...";
      }
      return str;
    }
  }
};
</script>

<style lang='scss' scoped>
.list-body {
  border-bottom: 1px solid $color-eb;
  padding: 30px 0 20px 0;
}
.title {
  color: $color-2d;
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
}
.content {
  color: $color-66;
  font-size: 16px;
  line-height: 28px;
  margin-top: 30px;
}
.time-div {
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
  img {
    height: 10px;
    width: 73px;
  }
}
.time {
  color: $color-88;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>