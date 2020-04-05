<template>
  <m-wrapper>
    <div>详情{{vid}}</div>
  </m-wrapper>
</template>

<script>
export default {
  name: "visa-detail",
  components: {},
  props: {},
  data() {
    return {
      vid: 0
    };
  },
  created() {
    this.vid = this.$route.params.id;
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>