<template>
  <div class="introduce">
    <div class="media">
      <video class="vedio" src="./kun.mp4" poster="./post.png"></video>
      <img src="./play.png" alt="播放" ref="playVedio" />
      <span>Click play vedio</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>2021年1月23日</h3>
        <p>
          蔡徐坤在第二届TMEA腾讯音乐娱乐盛典上获得年度最具影响力唱作歌手和年
          度最具号召力歌手两个奖项，单曲《情人》获年度十大金曲奖。12月11日，第三届TMEA腾讯音
          乐娱乐盛典获得年度最具影响力制作人，歌曲《感受她》获得年度十大金曲奖。
        </p>
      </div>
    </div>
    <div class="timer">
      <ul>
        <li>
          <div class="icon">
            <img src="./hi.png" alt="" />
            <img src="./right.png" alt="" />
          </div>
          <h3>2012年6月6日</h3>
          <p>
            首次出演电视剧
            蔡徐坤担任主演的偶像剧《童话二分之一》播出，他开始步入大众视线。
          </p>
        </li>
        <li>
          <div class="icon">
            <img src="./art.png" alt="" />
            <img src="./right.png" alt="" />
          </div>
          <h3>2015年7月10日</h3>
          <p>
            首次参加青春励志综艺节目
            参加中韩青春励志原创综艺节目《星动亚洲》，进入前三强。
          </p>
        </li>
        <li>
          <div class="icon">
            <img src="./love.png" alt="" />
            <img src="./right.png" alt="" />
          </div>
          <h3>2018年1月18日</h3>
          <p>
            正式出道
            蔡徐坤参加竞演类综艺节目《偶像练习生》，并于同年4月6日以第一名的成绩正式出道。
          </p>
        </li>
      </ul>
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
  methods: {
  },
};
</script>

<style scoped lang='less'>
.introduce {
  position: relative;
  margin-top: 40px;
  padding: 0 10vw;
  height: 736px;
}
.media {
  position: absolute;
  left: 10vw;
  top: 0;
  width: 700px;
  height: 404px;
  text-align: center;
  z-index: 99;
  .vedio {
    width: 700px;
    height: 404px;
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
    cursor: pointer;
  }
  span {
    display: block;
    width: 160px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #e02303;
    margin-top: -9px;
    margin-left: 160px;
  }
}
.content {
  position: absolute;
  left: 24vw;
  top: 34px;

  width: 1100px;
  height: 400px;
  box-sizing: border-box;
  padding: 0 200px;
  background-color: #f5f5f5;

  .box {
    width: 480px;
    margin-left: 340px;
    margin-top: 100px;

    h3 {
      font-size: 22px;
      color: cadetblue;
      line-height: 60px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
.timer {
  position: absolute;
  left: 50%;
  top: 436px;
  transform: translateX(-50%);
  ul {
    display: flex;
    li {
      width: 240px;
      height: 200px;
      padding: 50px 30px;

      .icon {
        display: flex;
        justify-content: space-between;
      }

      h3 {
        line-height: 60px;
        margin-top: 30px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        color: #999;
      }
    }
    li:nth-child(2) {
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
    }
  }
}
</style>