<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :background-color="themeColor"
    text-color="#fff"
    :active-text-color="themeColor"
    route
  >
    <component
      class="cus-menu-item"
      v-for="item in navList"
      :is="componentId(item) ? 'el-submenu': 'el-menu-item'"
      :key="item.id"
      :index="item.url"
    >
      <template slot="title">
        <span class="title">{{item.name}}</span>
      </template>
      <template v-if="componentId(item)">
        <el-menu-item
          class="menu-item"
          v-for="item1 in item.child"
          :key="item1.id"
          :index="item1.url"
        >
          <span slot="title" class="title">{{item1.name}}</span>
        </el-menu-item>
      </template>
    </component>
  </el-menu>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
  props: {},
  data() {
    return {
      activeIndex: "/index",
      navList: [
        {
          id: 1,
          name: "首页",
          url: "/index"
        },
        {
          id: 2,
          name: "资讯",
          url: "/",
          child: [
            // {
            //   id: 3,
            //   name: "朝圣信息",
            //   url: "/information"
            // },
            {
              id: 11,
              name: "朝圣信息",
              url: "/information/message"
            },
            {
              id: 12,
              name: "朝圣慈善",
              url: "/information/charitable"
            },
            {
              id: 13,
              name: "朝圣视频",
              url: "/information/video"
            },
            {
              id: 14,
              name: "定制朝圣",
              url: "/information/customized"
            }
          ]
        },
        {
          id: 4,
          name: "签证",
          url: "/visa"
        },
        {
          id: 5,
          name: "法律法规",
          url: "/code"
        },
        {
          id: 6,
          name: "线路",
          url: "/line"
        },
        {
          id: 7,
          name: "个人中心",
          url: "/profile",
          child: [
            {
              id: 8,
              name: "编辑信息",
              url: "/profile/edit"
            },
            {
              id: 9,
              name: "消费信息",
              url: "/profile/consumption"
            },
            {
              id: 10,
              name: "我的线路",
              url: "/profile/line"
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {},
  computed: {
    path() {
      return this.$route.path;
    }
  },
  methods: {
    handleSelect(data) {
      this.$router.push(data);
    },
    componentId(data) {
      return data.child && data.child.length > 0;
    }
  },
  watch: {
    path(newPath) {
      this.activeIndex = newPath;
    }
  }
};
</script>

<style scoped>
.el-menu-demo {
  border: 0 !important;
  height: 40px;
}
.title {
  font-size: 18px;
}
.el-menu-demo > .cus-menu-item {
  border: 0 !important;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  text-align: center;
}
.el-menu-demo > .cus-menu-item >>> .el-submenu__title {
  border: 0 !important;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  font-size: 18px;
}
.is-active {
  background-color: #fff !important;
}
>>> .is-active .el-submenu__title {
  background-color: #fff !important;
}
>>> .el-submenu__title i {
  color: #fff;
}
>>> .is-active .el-submenu__title i {
  color: #3e92fe;
}
</style>