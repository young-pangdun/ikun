<template>
  <div class="home">
    <div class="banner"></div>
    <Introduce />
    <Success />
    <Fans />
    <Work />
  </div>
</template>

<script>
import Introduce from "./Introduce";
import Success from "./Success";
import Work from "./Work";
import Fans from "./Fans";

export default {
  name: "Home",
  components: {
    Introduce,
    Success,
    Work,
    Fans,
  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 580px;
  background: url(./images/banner.png) no-repeat top center;
  background-size: cover;
}
</style>
