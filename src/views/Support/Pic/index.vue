<template>
  <div>
    <div class="wrap">
      <img src="./images/1.jpg" />
      <img src="./images/6.jpg" />
      <img src="./images/7.jpg" />
      <img src="./images/9.jpg" />
      <img src="./images/2.jpg" />
      <img src="./images/3.jpg" />
      <img src="./images/10.jpg" />
      <img src="./images/11.jpg" />
      <img src="./images/12.jpg" />
      <img src="./images/13.jpg" />
      <img src="./images/14.jpg" />
      <img src="./images/15.jpg" />
      <img src="./images/8.jpg" />
      <img src="./images/5.jpg" />
      <img src="./images/16.jpg" />
      <img src="./images/17.jpg" />
      <img src="./images/4.jpg" />
      <img src="./images/18.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.wrap {
  width: 1200px;
  margin: 0 auto;
  columns: 5;
  padding-top: 40px;
  padding-bottom: 40px;

  img {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 8px;
    box-shadow: 4px 4px 5px rgb(231, 231, 231);
  }
}
</style>