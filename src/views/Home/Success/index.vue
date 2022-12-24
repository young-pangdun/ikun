<template>
  <div class="success">
    <div class="top">
      <div class="topcontent">
        <div class="box">
          8月19日，获得出道后首个个人音乐类奖项亚洲新歌榜2018年度盛典“最受欢迎潜力男歌手”。
          8月23日，发行原创单曲《Wait Wait
          Wait》，并携手格莱美奖最佳MV获奖导演戴夫·迈尔斯打造了歌曲MV
        </div>
      </div>
    </div>
    <div class="mid">
      <div>
        <h3>2020年5月24日</h3>
        <p>
          发布原创单曲《情人》，该曲刷新了15项音乐榜单冠军，抖音相关话题播放量过30亿，QQ音乐单平台收藏量达到1400万；
          7月19日，获得第27届东方风云榜最佳男歌手、亚洲人气歌手及网络影响力三个奖项
        </p>
      </div>
      <img src="./minikun.png" alt="" />
    </div>
    <div class="bottom">
      <div>
        <h3>或张狂或稳重，或成熟或顽皮</h3>
        <p>
          2021年1月23日，蔡徐坤出席第二届TMEA腾讯音乐娱乐盛典，
          并获得年度最具影响力唱作歌手和年度最具号召力歌手两个奖项，
          而单曲《情人》则获得了年度十大金曲奖
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.top {
  width: 100%;
  height: 260px;
  background: url(./longkun.png) no-repeat;
  background-color: #2d2d2d;
  position: relative;

  .topcontent {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    width: 914px;
    height: 260px;
  }
  .box {
    float: right;
    position: relative;
    width: 305px;
    height: 260px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #e02303;
    font-size: 14px;
    color: #fff;
    line-height: 30px;
    overflow: hidden;
  }
  .box::after {
    position: absolute;
    left: -22px;
    bottom: -96px;
    display: block;
    content: "";
    width: 200px;
    height: 200px;
    background: url(./kun.png) no-repeat;
  }
}
.mid {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 914px;
  height: 200px;
  margin: 0 auto;

  div {
    width: 614px;
    height: 200px;
    box-sizing: border-box;
    padding: 40px 60px;
    background: #f2f2f2;

    h3 {
      font-size: 18px;
      color: #666;
      line-height: 40px;
    }
    p {
      font-size: 14px;
      color: #999;
      line-height: 30px;
    }
  }
  .img {
    width: 300px;
    height: 200px;
    overflow: hidden;
  }
}
.bottom {
  position: relative;
  width: 100%;
  height: 240px;
  background: #f2f2f2;

  div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    width: 914px;
    height: 240px;
    box-sizing: border-box;
    padding: 40px 60px;

    background: url(./ddd.png) no-repeat;
    background-color: #fff;
    background-size: cover;

    h3 {
      font-size: 22px;
      font-weight: 900;
      line-height: 60px;
      color: #333;
    }
    p {
      font-size: 16px;
      line-height: 30px;
      color: #999;
    }
  }
}
</style>