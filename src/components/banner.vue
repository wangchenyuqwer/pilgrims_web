<template>
  <div>
    <el-carousel :height="imgHeight+'px'" trigger="click" :autoplay="false">
      <el-carousel-item v-for="item in bannerList" :key="item.url">
        <a class="img-a" :href="item.goUrl">
          <img ref="image" :height="imgHeight+'px'" :src="item.url" alt="轮播图" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",
  components: {},
  props: {
    imgHeight: {
      type: String,
      default: "600"
    },
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.img-a {
  display: flex;
  justify-content: center;
}
</style>