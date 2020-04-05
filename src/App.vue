<template>
  <div id="app">
    <w-header v-if="showHead"></w-header>
    <router-view />
    <w-footer v-if="showHead"></w-footer>
  </div>
</template>
<script>
import wHeader from "./components/webHeader";
import wFooter from "./components/webFooter";
export default {
  components: {
    wHeader,
    wFooter
  },
  computed: {
    showHead() {
      if (this.$route.meta.showHead === undefined) {
        return true;
      }
      return this.$route.meta.showHead;
    }
  }
};
</script>
<style lang="scss">
@import url("~assets/css/base.scss");
</style>
