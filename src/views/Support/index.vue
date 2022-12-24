<template>
  <div class="support">
    <div class="banner"></div>
    <div class="nav">
      <span :style="activeTitle"></span>
      <div
        v-for="(item, index) in title"
        :key="index"
        @click="activeNav(index)"
      >
        {{ item }}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      title: ["视频", "图片", "表情包", "头像", "情话"],
      activeTitle: "left: 807px;",
    };
  },
  mounted() {},
  methods: {
    activeNav(index) {
      if (index == 0) {
        this.activeTitle = "left:564px";
        this.$router.push({
          name: "video",
        });
      } else if (index == 1) {
        this.activeTitle = "left:679px";
        this.$router.push({
          name: "pic",
        });
      } else if (index == 2) {
        this.activeTitle = "left:807px";
        this.$router.push({
          name: "emote",
        });
      } else if (index == 3) {
        this.activeTitle = "left:933px";
        this.$router.push({
          name: "avatar",
        });
      }else if (index == 4) {
        this.activeTitle = "left:1047px";
        this.$router.push({
          name: "talk",
        });
      }
    },
  },
};
</script>

<style scoped lang='less'>
.support {
  background-color: #fafbff;
}
.banner {
  width: 100%;
  height: 580px;
  background: url(./images/banner.png) no-repeat top center;
  background-size: cover;
}
.nav {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 20px;
    margin: 0 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    z-index: 99;
  }
  span {
    position: absolute;
    top: 15px;
    // left: 622px;
    display: block;
    width: 80px;
    height: 50px;
    border-radius: 8px;
    background-color: #edf2f5;
    transition: all 0.5s ease 0.1s;
  }
  span::before{
    content: url("./images/hot.png");
    position: absolute;
    top: -20px;
    right: -20px;
  }
}
</style>