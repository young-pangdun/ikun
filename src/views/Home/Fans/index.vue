<template>
  <div class="fans">
    <div class="content">
      <!-- 左边 -->
      <div class="left">
        <!-- 第一层 -->
        <div class="box1">
          <div class="name">
            <h3>悠悠球琛总</h3>
            <p>悠悠球全国冠军</p>
            <a href="https://space.bilibili.com/259358419">查看主页</a>
          </div>
          <div class="pic">
            <img src="./chen.jpg" alt="" />
          </div>
        </div>
        <div class="box1 box2">
          <div class="name">
            <h3>汤姆的混乱空间</h3>
            <p>铁山靠舞步创始人</p>
            <a href="https://space.bilibili.com/11643866">查看主页</a>
          </div>
          <div class="pic">
            <img src="./tie.jpg" alt="" />
          </div>
        </div>
        <div class="box1 box3">
          <div class="name">
            <h3>Yaw自律</h3>
            <p>ikun健身教练</p>
            <a
              href="https://space.bilibili.com/382953284?from=search&seid=8013793724859348580&spm_id_from=333.337.0.0"
              >查看主页</a
            >
          </div>
          <div class="pic">
            <img src="./yaw.jpg" alt="" />
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="mid"></div>
      <!-- 右边 -->
      <div class="right">
        <!-- 第一层 -->
        <div class="box1">
          <div  class="pic">
            <img src="./zhuo.jpg" alt="" />
          </div>
          <div class="name">
            <h3>卓卓脑婆</h3>
            <p>ikun头号女粉</p>
            <a href="https://space.bilibili.com/1726597059">查看主页</a>
          </div>
        </div>
        <div class="box1 box2">
          <div class="pic">
            <img src="./tu.jpg" alt="" />
          </div>
          <div class="name">
            <h3>兔兔不会秃秃</h3>
            <p>新晋热门女ikun</p>
            <a href="https://space.bilibili.com/91373845">查看主页</a>
          </div>
        </div>
        <div class="box1 box3">
          <div class="pic">
            <img src="./tian.jpg" alt="" />
          </div>
          <div class="name">
            <h3>恬欣欣的成长日记</h3>
            <p>超甜活力元气少女</p>
            <a
              href="https://space.bilibili.com/2804493?from=search&seid=8368321037836086567&spm_id_from=333.337.0.0"
              >查看主页</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fans",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.fans {
  width: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  // background: url(./header.png) no-repeat center;

  .mid {
    width: 320px;
    height: 320px;
    margin-top: 90px;
    display: block;
    border-radius: 50%;
    // background-color: chocolate;
    cursor: pointer;
    background: url(./header.png) no-repeat center;
    transition: all 0.4s ease;
  }
  .mid:hover {
    background: url(./kunbg.png) no-repeat center;
  }
  .left {
    display: flex;
    flex-direction: column;
    width: 440px;
    margin-top: 40px;

    .box1 {
      float: right;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      margin-right: 20px;

      .name {
        text-align: right;
        margin-right: 6px;
        H3 {
          font-size: 20px;
          line-height: 36px;
          margin-top: 4px;
        }
        p {
          font-size: 16px;
          margin-right: 10px;
          color: #666;
        }
        a {
          font-size: 14px;
          line-height: 28px;
          color: #999;
          cursor: pointer;
        }
      }
      .pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .box2 {
      margin-top: 30px;
      margin-right: 100px;
    }
    .box3 {
      margin-top: 30px;
      margin-right: 20px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 440px;
    margin-top: 40px;

    .box1 {
      float: left;
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      margin-left: 20px;

      .name {
        text-align: left;
        margin-left: 6px;
        H3 {
          font-size: 20px;
          line-height: 36px;
          margin-top: 4px;
        }
        p {
          font-size: 16px;
          margin-left: 10px;
          color: #666;
        }
        a {
          font-size: 14px;
          line-height: 28px;
          color: #999;
          cursor: pointer;
        }
      }
       .pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .box2 {
      margin-top: 30px;
      margin-left: 100px;
    }
    .box3 {
      margin-top: 30px;
      margin-left: 20px;
    }
  }
}
</style>