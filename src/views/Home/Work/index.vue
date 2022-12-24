<template>
  <div class="work">
    <div class="content">
      <div class="left">
        <h2>合作企业</h2>
        <span></span>
        <p>
          目前与KUN正式合作的餐饮企业共73家, 其中国企、央企17家、
          重点民营企业36家、航空公司5家、 机场、事业单位12家、 央企控股企业2家,
          外商合资企业1家。为全国人民提供了大量优质蛋白。
        </p>
        <ul>
          <li>
            <h1>90000w</h1>
            <p>忠实客户</p>
          </li>
          <li>
            <h1>6666w</h1>
            <p>优质客户</p>
          </li>
          <li>
            <h1>1632w</h1>
            <p>海外客户</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <img src="./logo1.png" alt="" />
            <img src="./logo2.png" alt="" />
            <img src="./logo3.png" alt="" />
          </li>
          <li>
            <img src="./logo4.png" alt="" />
            <img src="./logo11.png" alt="" />
            <img src="./logo9.png" alt="" />
          </li>
          <li>
            <img src="./logo7.png" alt="" />
            <img src="./logo8.png" alt="" />
            <img src="./logo6.png" alt="" />
          </li>
          <li>
            <img src="./logo10.png" alt="" />
            <img src="./logo5.png" alt="" />
            <img src="./logo12.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.work {
  width: 100%;
  height: 420px;
  background: #f2f2f2;

  .content {
    display: flex;
    width: 1200px;
    height: 340px;
    margin: 0 auto;
    padding: 40px 0;
    .left {
      width: 50%;

      h2 {
        font-size: 42px;
        color: #e02303;
        letter-spacing: 10px;
        font-family: "YouShe";
      }
      span {
        display: block;
        width: 40px;
        height: 6px;
        background: #e02303;
        margin-top: 10px;
        margin-bottom: 42px;
      }
      p {
        width: 600px;
        font-size: 16px;
        line-height: 30px;
        color: #666;
      }
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 38px;
        li {
          width: 200px;
          text-align: center;
          h1 {
            font-size: 48px;
            font-family: "RuiZi";
            color: #666;
          }
          p {
            width: 180px;
            color: #666;
          }
        }
      }
    }
    .right {
      width: 50%;
      padding: 0 20px;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 110px;

        li {
          width: 100px;
          height: 60px;

          img {
            width: 100px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>