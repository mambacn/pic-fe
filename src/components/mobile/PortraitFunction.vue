<template>
  <div class="portrait-box">
    <!-- 人像功能标题模块 -->
    <div class="titile-box">
      <img src="@/assets/mobile/ornament.png" alt="" />
      <h2>人像功能</h2>
      <img src="@/assets/mobile/ornament.png" alt="" />
    </div>
    <!-- 人像功能图片入口模块 -->
    <div class="opts">
      <div
        v-for="(p, index) in portraits"
        :key="index"
        class="opt"
        :class="{ selected: type == index }"
        @click="select(index, p)"
      >
        {{ p.title }}
      </div>
    </div>
    <div class="entrance" @click="todetail">
      <img :src="picsrc" alt="" />
      <h4>功能体验</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portraits: [
        {
          src: require("@/assets/pc/portrait/portrait1.png"),
          title: "人脸年龄化",
        },
        {
          src: require("@/assets/pc/portrait/portrait2.png"),
          title: "性别转换",
        },
        {
          src: require("@/assets/pc/portrait/portrait3.png"),
          title: "人脸动漫化/素描化",
        },
        {
          src: require("@/assets/pc/portrait/portrait4.png"),
          title: "人体分割",
        },
        {
          src: require("@/assets/pc/portrait/portrait5.png"),
          title: "人脸美妆",
        },
        {
          src: require("@/assets/pc/portrait/portrait6.png"),
          title: "人脸美型",
        },
        {
          src: require("@/assets/pc/portrait/portrait7.png"),
          title: "五官编辑",
        },
        {
          src: require("@/assets/pc/portrait/portrait8.png"),
          title: "人脸滤镜",
        },
        {
          src: require("@/assets/pc/portrait/portrait9.png"),
          title: "人脸美颜",
        },
      ],
      picsrc: require("@/assets/pc/portrait/portrait1.png"),
      type: 0,
    };
  },
  methods: {
    select(index, p) {
      this.picsrc = p.src;
      this.type = index;
    },
    todetail() {
      this.$router.push({
        path: "/detail",
        query: { selected: this.type },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.portrait-box {
  width: 100vw;
  height: compute(585);
  background-image: url("@/assets/mobile/portraitbackground.png");
  background-size: cover;
  // 标题样式
  .titile-box {
    padding-top: compute(25);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: compute(21);
      height: compute(19);
    }
    h2 {
      display: inline-block;
      margin: 0px compute(12);
      height: compute(25);
      font-size: compute(18);
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: compute(25);
    }
  }
  // #region
  // .opts {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  //   margin: compute(23) compute(17) 0 compute(20);
  //   .opt {
  //     white-space: nowrap;
  //     margin-right: compute(3);
  //     margin-bottom: compute(18);
  //     float: left;
  //     padding: 0 compute(12) compute(1.5) compute(12);
  //     background: #ffffff;
  //     border-radius: compute(10);
  //     border: 1px solid #c6c6c6;
  //     font-size: compute(14);
  //     line-height: compute(30);
  //     font-family: PingFangSC-Regular, PingFang SC;
  //     font-weight: 400;
  //     color: #444444;
  //   }
  //   .opt:first-child {
  //     padding: 0 compute(10);
  //   }
  //   .opt:nth-child(3) {
  //     padding: 0 compute(8);
  //   }
  //   .opt:nth-child(3n + 5) {
  //     position: relative;
  //     left: compute(-22);
  //   }
  //   .opt:nth-child(3n + 6) {
  //     position: relative;
  //     left: compute(-53);
  //   }
  //   .opt:nth-child(n + 4) {
  //     width: compute(82);
  //   }
  //   .selected {
  //     border: 1px solid #fd4538;
  //     color: #e9675f;
  //   }
  // }
  // #endregion
  .opts {
    margin: compute(23) compute(17) 0 compute(20);
    .opt {
      width: compute(80);
      height: compute(30);
      background: #ffffff;
      border-radius: compute(10);
      border: 1px solid #c6c6c6;
      float: left;
      font-size: compute(14);
      text-align: center;
      line-height: compute(28);
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #444444;
      margin-bottom: compute(18);
    }
    .opt:nth-child(1) {
      width: compute(90);
    }
    .opt:nth-child(2) {
      margin-left: compute(13);
      margin-right: compute(15);
    }
    .opt:nth-child(3) {
      width: compute(136);
    }
    .opt:nth-child(3n + 5) {
      margin-left: compute(23);
      margin-right: compute(15);
    }

    .selected {
      border: 1px solid #fd4538;
      color: #e9675f;
    }
  }
  .entrance {
    margin: 0 compute(20);
    img {
      width: 100%;
      // 调整img图片与下面盒子的缝隙
      vertical-align: bottom;
    }
    h4 {
      font-size: compute(18);
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      line-height: compute(57);
      width: 100%;
      height: compute(57);
      background: #ff958d;
      box-shadow: 0px compute(5) compute(10) 0px rgba(83, 83, 83, 0.16);
      border-radius: 0px 0px compute(9) compute(9);
    }
  }
}
</style>