export default {
  data() {
    return {
      name: 'mixin'
    }
  },
  created() {
  },
  mounted() { },
  methods: {
    content(str, len) {
      if (str && str.length >= len) {
        str = str.substr(0, len);
        str += '...';
      }
      return str;
    }
  }
}