<template>
  <div class="join">
    <div class="banner">
      <!-- <h3>欢迎加入ikun星球</h3>
      <span>立即加入</span> -->
    </div>
    <div class="chance">
      <h1>认识一群有趣的人</h1>
      <p>迷宫中心的每一位玫瑰色的女孩，都愿你“Be my lover” 与KUN同在</p>
      <div class="box">
        <p>
          As you know , there's some famous words " Singing ,dancing ,rapping
          and basketball." My favorite idol is Cai xukun.
        </p>
        <span>——ikuner</span>
      </div>
    </div>
    <div class="thing">
      <div>
        <h1>做一些有意义的事情</h1>
        <span>
          蔡徐坤用孤注一掷的勇气与单枪匹马的出击，踏过荆棘与山海。<br />
          他告诉我们坚持与努力是会有成果的，他告诉我们做喜欢的事情是不会疲倦的。<br />
          蔡徐坤，加油，遇见更好的自己。
        </span>
      </div>
    </div>
    <div class="art">
      <div class="content">
        <h1>如果你也喜欢</h1>
        <div class="first">
          <img src="./images/ichang.png" alt="" />
          <div>
            <h3>唱歌</h3>
            <p>
              舞台上，他是火力全开魅力四射的王者；舞台下，他是温柔细腻认真努力的少年。这是一个颜值与才华并存，谦虚努力向上的温柔男孩，C位队长的正能量偶像蔡徐坤，期待蔡徐坤给我们带来的更多惊喜
            </p>
          </div>
        </div>
        <div class="first two">
          <div class="right">
            <h3>跳舞</h3>
            <p>
              那欢畅淋漓的舞姿，那优美娴熟的动作，那千般娇姿，那万般变化，似孔雀开屏，似莲花绽放，似飞龙穿梭。台下雷动的掌声，不单是对美的愉悦，力的喝彩，生的赞叹，更是感化的激动，灵魂的洗礼和放飞！
            </p>
          </div>
          <img src="./images/itiao.png" alt="" />
        </div>
        <div class="first three">
          <img src="./images/irap.png" alt="" />
          <div>
            <h3>RAP</h3>
            <p>
              舞台上，他是火力全开魅力四射的王者；舞台下，他是温柔细腻认真努力的少年。这是一个颜值与才华并存，谦虚努力向上的温柔男孩，C位队长的正能量偶像蔡徐坤，期待蔡徐坤给我们带来的更多惊喜
            </p>
          </div>
        </div>
        <div class="first four">
          <div class="right">
            <h3>篮球</h3>
            <p>
              舞台上，他是火力全开魅力四射的王者；舞台下，他是温柔细腻认真努力的少年。这是一个颜值与才华并存，谦虚努力向上的温柔男孩，C位队长的正能量偶像蔡徐坤，期待蔡徐坤给我们带来的更多惊喜
            </p>
          </div>
          <img src="./images/ilanqiu.png" alt="" />
        </div>
      </div>
    </div>
    <div class="come">
      <div>
        <h1>迈向人生赞新道路</h1>
        <p>
          我们正在寻找充满热情，与众不同、具有长期发展潜力的ikuner，与我们一起踏上充满挑战的道路
          <br />
          待我ikun更强大，定帮坤哥赢天下
        </p>
        <span @click="dialogFormVisible = true">立即加入</span>
      </div>
    </div>
    <el-dialog
      title="真爱粉测试题（通过测试即可加入ikun星球）"
      :visible.sync="dialogFormVisible"
      center
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          1.坤坤喜欢什么穿衣风格？
        </p>
        <el-form-item label="" prop="yifu" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.yifu" label="1">汉服</el-radio>
          <el-radio v-model="ruleForm.yifu" label="3">jk制服</el-radio>
          <el-radio v-model="ruleForm.yifu" label="2">背带裤</el-radio>
          <el-radio v-model="ruleForm.yifu" label="4">Lolita</el-radio>
        </el-form-item>
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          2.坤坤的生日？
        </p>
        <el-form-item label="" prop="time" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.time" label="1">8月1日</el-radio>
          <el-radio v-model="ruleForm.time" label="2">8月2日</el-radio>
          <el-radio v-model="ruleForm.time" label="3">8月3日</el-radio>
          <el-radio v-model="ruleForm.time" label="4">8月4日</el-radio>
        </el-form-item>
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          3.坤坤最喜欢的运动？
        </p>
        <el-form-item label="" prop="sport" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.sport" label="1">篮球</el-radio>
          <el-radio v-model="ruleForm.sport" label="2">排球</el-radio>
          <el-radio v-model="ruleForm.sport" label="3">足球</el-radio>
          <el-radio v-model="ruleForm.sport" label="4">乒乓球</el-radio>
        </el-form-item>
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          4.蔡徐坤以前加入过的团叫什么？
        </p>
        <el-form-item label="" prop="tuan" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.tuan" label="1">TWICE</el-radio>
          <el-radio v-model="ruleForm.tuan" label="2">少女时代</el-radio>
          <el-radio v-model="ruleForm.tuan" label="3">BLACKPINK</el-radio>
          <el-radio v-model="ruleForm.tuan" label="4">SWIN</el-radio>
        </el-form-item>
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          5.蔡徐坤第一次参加的综艺是什么?
        </p>
        <el-form-item label="" prop="zongyi" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.zongyi" label="1">星动亚洲</el-radio>
          <el-radio v-model="ruleForm.zongyi" label="2">创造101</el-radio>
          <el-radio v-model="ruleForm.zongyi" label="3"
            >乘风破浪的姐姐</el-radio
          >
          <el-radio v-model="ruleForm.zongyi" label="4">青春有你2</el-radio>
        </el-form-item>
        <p style="font-size: 16px; line-height: 40px; margin-left: 60px">
          6.坤坤的英文名是？
        </p>
        <el-form-item label="" prop="name" :label-width="formLabelWidth">
          <el-radio v-model="ruleForm.name" label="1">KUN</el-radio>
          <el-radio v-model="ruleForm.name" label="2">August</el-radio>
          <el-radio v-model="ruleForm.name" label="3">Chick</el-radio>
          <el-radio v-model="ruleForm.name" label="4">litchi</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeChance">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "join",
  components: {},
  data() {
    return {
      loading: true,
      // 单选
      ruleForm: {
        yifu: "",
        time: "",
        sport: "",
        tuan: "",
        name: "",
        zongyi: "",
      },
      rules: {
        yifu: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        time: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        sport: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        tuan: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        zongyi: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "60px",
    };
  },
  methods: {
    closeChance() {
      this.$confirm("成为ikun即可免费吃哥哥下的蛋, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "error",
            message: "小黑子是吧，哥哥下的蛋有种别吃",
          });
          this.dialogFormVisible = false;
        })
        .catch(() => {
          this.$message({
            type: "success",
            message: "ikun，继续答题吧",
          });
        });
    },
    submit() {
      // this.$refs[ruleForm].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      // loading加载
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loading.close();
          this.dialogFormVisible = false;
          this.$message.success(
            "恭喜你成为ikun星球的一份子，今天哥哥下的蛋你多吃两个！"
          );
        }, 2000);
    },
  },
};
</script>

<style scoped lang='less'>
.banner {
  display: flex;
  flex-direction: column;
  // justify-content:space-around;
  align-items: center;
  width: 100%;
  height: 580px;
  background: url(./images/banner2.png) no-repeat center center;
  background-size: cover;

  h3 {
    font-size: 60px;
    color: #fff;
    margin-top: 220px;
  }
  span {
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 6px;
    margin-top: 20px;
    background-color: chartreuse;
  }
}
.chance {
  width: 100%;
  padding: 60px 0;
  text-align: center;
  h1 {
    font-size: 32px;
  }
  p {
    width: 400px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 30px;
    color: #666;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .box {
    width: 880px;
    height: 210px;
    margin: 0 auto;
    padding: 40px 0;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);

    p {
      width: 640px;
      margin: 0;
      margin-left: 118px;
      font-size: 22px;
      line-height: 40px;
    }
    span {
      float: right;
      font-size: 22px;
      margin-right: 118px;
      margin-top: 20px;
      color: #666;
    }
  }
}
.thing {
  width: 100%;
  padding: 60px 0;
  text-align: center;
  background-color: #fafbff;
  div {
    position: relative;
    width: 1000px;
    margin: 0 auto;
  }
  div::before {
    content: "“";
    position: absolute;
    top: -30px;
    left: 120px;
    font-size: 136px;
    color: #999;
  }
  div::after {
    content: "”";
    position: absolute;
    bottom: -100px;
    right: 120px;
    font-size: 136px;
    color: #999;
  }
  h1 {
    font-size: 32px;
    line-height: 60px;
  }
  span {
    width: 800px;
    line-height: 32px;
  }
}
.art {
  width: 100%;
  padding: 60px 0 20px;
  text-align: center;
  .content {
    width: 1000px;
    margin: 0 auto;
    .first {
      position: relative;
      display: flex;
      justify-content: space-around;
      padding: 40px 0;
      .right {
        text-align: right;
        h3 {
          padding-right: 10px;
        }
        P {
          text-align: left;
        }
      }
      img {
        display: block;
        width: 446px;
        height: 264px;
        border-radius: 10px;
      }
      img:hover {
        content: url("./images/ikun1.png");
      }
      div {
        width: 446px;
        padding: 40px 0;
        text-align: left;
        z-index: 99;
        h3 {
          font-size: 24px;
          line-height: 54px;
          font-family: "MiNi";
          letter-spacing: 4px;
          color: #e02303;
        }
        p {
          font-size: 16px;
          line-height: 32px;
        }
      }
    }
    .first::after {
      content: "SING";
      font-size: 140px;
      font-family: "YouShe";
      color: #e02303;
      opacity: 0.1;
      position: absolute;
      top: 110px;
      right: -120px;
      z-index: 0;
    }
    .two {
      img:hover {
        content: url("./images/ikun2.png");
      }
    }
    .two::after {
      content: "DANCE";
      top: 110px;
      right: 610px;
    }
    .three {
      img:hover {
        content: url("./images/ikun3.png");
      }
    }
    .three::after {
      content: "RAP";
      top: 110px;
      right: -74px;
    }
    .four {
      img:hover {
        content: url("./images/ikun4.png");
      }
    }
    .four::after {
      content: "NBA";
      top: 110px;
      right: 754px;
    }
  }
}
.come {
  width: 100%;
  padding: 60px 0;
  text-align: center;
  background-color: #fafbff;
  div {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
      font-size: 32px;
      line-height: 60px;
    }
    p {
      width: 800px;
      padding: 20px 100px;
      line-height: 32px;
    }
    span {
      display: block;
      width: 160px;
      height: 30px;
      line-height: 30px;
      padding: 10px;
      color: #fff;
      border-radius: 4px;
      background-color: #409eff;
    }
  }
}
</style>