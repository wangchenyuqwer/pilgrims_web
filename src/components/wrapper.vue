<template>
  <div class="wrapper-body" :style="bodyStyle">
    <div class="wrapper-div" :style="divStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrapper",
  components: {},
  props: {
    bColor: {
      type: String,
      default: "#fff"
    },
    dColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    bodyStyle() {
      return {
        backgroundColor: this.bColor
      };
    },
    divStyle() {
      let color = this.dColor ? this.dColor : this.bColor;
      return {
        backgroundColor: color
      };
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.wrapper-body {
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  .wrapper-div {
    width: 1200px;
    // margin: auto;
  }
}
</style>