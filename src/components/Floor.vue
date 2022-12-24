<template>
  <div class="footer">
    <div class="footer-main">
      <div class="fm-1">
        <div class="fm-1-1">
          <img :src="fm01" alt=" " />
          <p>荔枝保护协会</p>
        </div>
        <div class="fm-1-1">
          <img :src="fm02" alt=" " />
          <p>你的专属kunkun</p>
        </div>
        <div class="fm-1-1">
          <img :src="fm03" alt=" " />
          <p>高性价比周边</p>
        </div>
        <div class="fm-1-1">
          <img :src="fm04" alt=" " />
          <p>ikun恋爱物语</p>
        </div>
        <div class="fm-1-1">
          <img :src="fm05" alt=" " />
          <p>7*24小时服务</p>
        </div>
      </div>
      <div class="fm-2">
        <div class="fm-2m">
          <div class="fm-2m-logo">
            <img :src="logo_w" alt=" " />
          </div>
          <dl>
            <dt>ikun星球</dt>
            <dd><a href="# ">关于我们</a></dd>
            <dd><a href="# ">开放平台</a></dd>
            <dd><a href="# ">特色功能</a></dd>
            <dd><a href="# ">帮助中心</a></dd>
          </dl>
          <dl>
            <dt>联系方式</dt>
            <dd><a href="# ">在线咨询</a></dd>
            <dd>客服热线：6666-666-666</dd>
            <dd>合作邮箱：ikuner@kun.com</dd>
            <dd>反kun热线：6666-88888888（工作日9：00-18:00）</dd>
            <dd>联系地址：深圳市南山区南海大道粤海路深圳动漫园</dd>
          </dl>
          <div class="fm-2m-ewm">
            <img :src="xbswgzh" alt=" " />
          </div>
        </div>
      </div>
      <div class="fm-3">
        <p>
          友情链接：<a href="# ">KFC</a><a href="# ">肯德基</a
          ><a href="# ">麦当劳</a><a href="# ">慕百味轰炸鸡</a><a href="# ">炸鸡叔叔</a>
        </p>
      </div>
      <div class="fm-4">
        <p>
          粤ICP备66666666号 粤公网安备   6666666666666666工商网监   Copyright
          ©2006-2023 ikun经纪有限公司 版权所有
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fm01 from "@/assets/images/fm01.png";
import fm02 from "@/assets/images/fm02.png";
import fm03 from "@/assets/images/fm03.png";
import fm04 from "@/assets/images/fm04.png";
import fm05 from "@/assets/images/fm05.png";
import logo_w from "@/assets/images/logo_w.png";
import xbswgzh from "@/assets/images/xbswgzh.png";
export default {
  name: "",
  components: {},
  data() {
    return {
      fm01,
      fm02,
      fm03,
      fm04,
      fm05,
      logo_w,
      xbswgzh,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang='less'>
.footer {
  width: 100%;
  height: 390px;
  background: #2D2D2D;
}

.footer-main {
  width: 1200px;
  height: 390px;
  margin: 0 auto;
}

.fm-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #333d5b;
}

.fm-1 div {
  float: left;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
  text-align: center;
}

.fm-1 p {
  display: inline-block;
  margin-left: 20px;
  color: #fff;
  font-size: 14px;
}

.fm-1 .fm-1-1 {
  display: flex;
  justify-content: flex-start;
  width: 200px;
  height: 30px;
  text-align: left;
  border-right: 1px solid #333d5b;
}

/* .fm-1-1 img{
    display: inline-block;
} */

.fm-1-2 {
  width: 265px;
  height: 30px;
  border-right: 1px solid #333d5b;
}

.fm-1 .fm-1-3 {
  width: 200px;
  height: 30px;
  text-align: right;
  border-right: none;
}

.fm-2 {
  width: 1200px;
  height: 214px;
  border-bottom: 1px solid #333d5b;
}

.fm-2m {
  width: 1200px;
  height: 120px;
  padding-top: 30px;
}

.fm-2m-logo {
  padding-top: 30px;
  width: 200px;
  height: 120px;
  float: left;
  border-right: 1px solid #333d5b;
  margin-right: 50px;
}

.fm-2m dl {
  float: left;
  margin-right: 100px;
}

.fm-2m dl dt {
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-bottom: 18px;
}

.fm-2m dl dd {
  font-size: 14px;
  line-height: 28px;
  color: #999da5;
}

.fm-2m dl dd a {
  color: #999da5;
}

.fm-2m-ewm {
  float: right;
  margin-top: 10px;
}

.fm-2m-ewm img {
  width: 110px;
  height: 110px;
}

.fm-3 {
  width: 1200px;
  height: 60px;
  border-bottom: 1px solid #333d5b;
}

.fm-3 p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  line-height: 60px;
  font-size: 12px;
  color: #fff;
}

.fm-3 p a {
  color: #bdc0c9;
  font-size: 13px;
  margin-left: 44px;
}

.fm-4 {
  width: 1200px;
  height: 40px;
  text-align: center;
}

.fm-4 p {
  font-size: 11px;
  line-height: 24px;
  color: #bdc0c9;
  margin-top: 16px;
}
</style>