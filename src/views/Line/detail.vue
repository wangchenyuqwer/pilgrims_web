<template>
  <m-wrapper>线路详情</m-wrapper>
</template>

<script>
import { lineDetail } from "network/line";
export default {
  name: "line-detail",
  components: {},
  props: {},
  data() {
    return {
      lid: ""
    };
  },
  created() {
    this.lid = this.$route.params.id;
  },
  mounted() {},
  methods: {
    lineDetail() {
      let para = {
        id: this.lid
      };
      lineDetail(para).then(msg => {
        console.log(msg);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>