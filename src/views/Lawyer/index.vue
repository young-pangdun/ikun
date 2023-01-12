<template>
  <div class="lawyer">
    <div class="banner"></div>
    <div class="introduce">
      <div class="left">
        <h2>律政先锋</h2>
        <span></span>
        <p>
          张伟大律师，法律专业水平非常强，
          二十年起步，最高si刑，义务为各种反社会重刑犯辩护，无一人漏网。
          虽然是“爱情公寓里最倒霉的男人”，但却是“爱情公寓里最有种的男人”。
          孤儿院出身，因此对钱财十分敏感，表现为生活中极度抠门，
          但本性善良正义，重情重义，愿意为朋友付出。今接受坤坤的委托，向小黑子们郑重警告，发出律师函：
          求你们别再黑我哥哥了，哥哥下的蛋我天天吃，有种哥哥下蛋你别吃！
        </p>
      </div>
      <div class="right">
        <img src="./images/dapao.png" alt="" />
      </div>
    </div>
    <div class="casebox">
      <div class="case">
        <div class="left">
          <img src="./images/wanmei.png" alt="" />
        </div>
        <div class="right">
          <p>
            张伟大律师在与“朝阳群众”这一神秘组织的紧密配合下时刻关注身边的风吹草动，战绩赫赫。
            朝阳群众的身影，其实随处可见：他们可能是商场超市里的保安，可能是路边的志愿者，
            又或者仅仅是晨练所见的一个个平凡的路人。警力有限，民力无限。人人都可以成为你所在地区的“朝阳群众”！
          </p>
          <ul>
            <li>
              <img src="./images/fan.png" alt="" />
              <span>加拿大电鳗</span>
            </li>
            <li>
              <img src="./images/xiang.png" alt="" />
              <span>事件管理大师</span>
            </li>
            <li>
              <img src="./images/di.png" alt="" />
              <span>钢琴老瓢虫</span>
            </li>
            <li>
              <img src="./images/feng.png" alt="" />
              <span>勤劳小蜜蜂</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="top">
        <h2>专业团队</h2>
        <span></span>
      </div>
      <ul>
        <li>
          <img src="./images/wei1.png" alt="" />
          <div>
            <h3>张益达</h3>
            <h5>主任律师</h5>
            <p>专业领域：职务犯罪、经济犯罪、传统犯罪、毒品犯罪、刑事辩护</p>
          </div>
        </li>
        <li>
          <img src="./images/wei2.png" alt="" />
          <div>
            <h3>张大炮</h3>
            <h5>主任律师</h5>
            <p>专业领域：经济犯罪、传统犯罪，刑事辩护、行政诉讼</p>
          </div>
        </li>
        <li>
          <img src="./images/wei3.png" alt="" />
          <div>
            <h3>斯内克</h3>
            <h5>主任律师</h5>
            <p>专业领域：职务犯罪、经济犯罪、行政诉讼、管理与培训、公司法务</p>
          </div>
        </li>
        <li>
          <img src="./images/wei4.png" alt="" />
          <div>
            <h3>张奥纳多</h3>
            <h5>主任律师</h5>
            <p>专业领域：传统犯罪、毒品犯罪、刑事辩护、民事业务</p>
          </div>
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
  methods: {},
};
</script>

<style scoped lang='less'>
.lawyer {
  background-color: #fafbff;
}
.banner {
  width: 100%;
  height: 580px;
  background: url(./images/banner.png) no-repeat top center;
  background-size: cover;
}
.introduce {
  display: flex;
  width: 1200px;
  height: 340px;
  margin: 0 auto;
  padding: 80px 0;
  .left {
    width: 50%;
    position: relative;
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
  }
  .left::before {
    content: "律师函";
    font-size: 100px;
    font-family: "YouShe";
    color: #e02303;
    opacity: 0.1;
    position: absolute;
    bottom: 20px;
    right: -80px;
  }
  .right {
    margin: 0 auto;
  }
}
.casebox {
  width: 100%;
  background-color: #fff;
  .case {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    .left {
      width: 500px;
      margin: 0 auto;
    }
    .right {
      p {
        width: 660px;
        font-size: 16px;
        line-height: 30px;
        color: #666;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 30px;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 0 10px;
          img {
            width: 80px;
            height: 80px;
          }
          span {
            padding: 8px;
            color: #999;
          }
        }
      }
    }
  }
}
.team {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;

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
    margin-left: 77px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    li {
      width: 280px;
      height: 400px;
      border-radius: 10px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 4px 4px 5px #e7e7e7;
      margin: 0 10px;

      img {
        width: 280px;
        height: 280px;
      }

      div {
        padding: 20px;
        h3 {
          display: inline-block;
        }
        h5 {
          display: inline-block;
          margin-left: 10px;
        }
        p {
          font-size: 14px;
          color: #999;
          line-height: 24px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>