<template>
  <div class="wrapper-body">
    <c-banner :banner-list="bannerList"></c-banner>
    <m-wrapper>
      <div class="btn-div">
        <btn-item
          v-for="item in btnList"
          :key="item.imgurl"
          :text="item.text"
          :imgurl="item.imgurl"
          @click.native="itemClick(item)"
        />
      </div>
    </m-wrapper>
  </div>
</template>

<script>
import cBanner from "components/banner";
import btnItem from "./component/btnItem";

export default {
  name: "home-index",
  components: {
    cBanner,
    btnItem
  },
  props: {},
  data() {
    return {
      bannerList: [
        {
          // url: "~assets/image/banner.png",
          url: require("assets/image/home/banner.png"),
          goUrl: "http://baidu.com"
        },
        {
          // url: "~assets/image/banner.png",
          url: require("assets/image/home/icon-1.png"),
          goUrl: "http://baidu.com"
        },
        {
          // url: "~assets/image/banner.png",
          url: require("assets/image/home/icon-2.png"),
          goUrl: "http://baidu.com"
        }
      ]
    };
  },
  computed: {
    btnList() {
      return [
        {
          text: "我要报名",
          imgurl: require("assets/image/home/icon-1.png")
        },
        {
          text: "业务资讯",
          imgurl: require("assets/image/home/icon-2.png")
        },
        {
          text: "安卓APP下载",
          imgurl: require("assets/image/home/icon-3.png")
        },
        {
          text: "苹果APP下载",
          imgurl: require("assets/image/home/icon-4.png")
        }
      ];
    }
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(data) {
      console.log(data);
    },
    getHomeDate() {
      console.log("haha");
    }
  }
};
</script>

<style lang='scss' scoped>
.btn-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
</style>