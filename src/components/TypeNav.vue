<template>
  <div class="header">
    <div class="logo"><h1>ikun星球</h1></div>
    <div class="nav">
      <div
        v-for="(item, index) in title"
        :key="index"
        @click="activeNav(index)"
      >
        <a>{{ item }}</a>
      </div>
      <span :style="activeTitle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeNav",
  components: {},
  data() {
    return {
      title: ["首页", "新闻", "应援", "律师函", "表白墙", "加入我们"],
      activeTitle: "left: 25px;",
    };
  },
  mounted() {},
  methods: {
    activeNav(index) {
      if (index == 0) {
        this.activeTitle = "left: 27px;";
        this.$router.push({
          name: "home",
        });
      } else if (index == 1) {
        this.activeTitle = "left: 102px;";
        this.$router.push({
          name: "news",
        });
      } else if (index == 2) {
        this.activeTitle = "left: 178px;";
        this.$router.push({
          name: "support",
        });
      } else if (index == 3) {
        this.activeTitle = "left: 267px;";
        this.$router.push({
          name: "lawyer",
        });
      } else if (index == 4) {
        this.activeTitle = "left: 362px;";
        location.href='https://young-pangdun.github.io/love/'
        // location.href='../hello/index.html'
      } else if (index == 5) {
        this.activeTitle = "left: 467px;";
        this.$router.push({
          name: "join",
        });
      }
    },
  },
};
</script>

<style scoped lang='less'>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 1000px;
  height: 60px;
  padding: 0 10vw;
  background: #e02303;
}
.logo {
  color: #fff;
  cursor: pointer;
  h1 {
    font-family: "YouShe";
    letter-spacing: 2px;
  }
}
.nav {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  span {
    position: absolute;
    // left: 25px;
    bottom: 6px;
    display: block;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background-color: #fff;
    // transition: all .3 ease-in;
    transition: left 0.5s ease 0.1s;
  }
}
</style>