<template>
  <div class="collage-box">
    <!-- 拼图功能标题模块 -->
    <div class="titile-box">
      <img src="@/assets/mobile/ornament.png" alt="" />
      <h2>拼图贴纸</h2>
      <img src="@/assets/mobile/ornament.png" alt="" />
    </div>
    <!-- 人像功能图片入口模块 -->
    <div class="opts">
      <div
        v-for="(p, index) in collages"
        :key="index"
        class="opt"
        :class="{ selected: isselected[index] }"
        @click="select(index, p)"
      >
        {{ p.title }}
      </div>
    </div>
    <div class="entrance" @click="todetail">
      <div class="picbox">
        <img :src="picsrc" alt="" />
      </div>
      <h4>功能体验</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collages: [
        {
          src: require("@/assets/pc/collage/collage1.png"),
          title: "拼图",
        },
        {
          src: require("@/assets/pc/collage/collage2.png"),
          title: "图片滤镜",
        },
        {
          src: require("@/assets/pc/collage/collage3.png"),
          title: "海量贴图",
        },
      ],
      isselected: [true, false, false],
      picsrc: require("@/assets/pc/collage/collage1.png"),
    };
  },
  methods: {
    select(index, p) {
      this.isselected = this.isselected.map(() => {
        return false;
      });
      this.isselected[index] = true;
      this.picsrc = p.src;
    },
    todetail() {
      this.$message.error("该功能体验暂未开放，可下载app使用！");
    },
  },
};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.collage-box {
  width: 100vw;
  height: compute(498);
  background-color: #fff4f4;
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
  .opts {
    margin-top: compute(23);
    margin-bottom: compute(23);
    display: flex;
    justify-content: center;
    .opt {
      margin-left: compute(12);
      margin-right: compute(12);
      width: compute(80);
      height: compute(30);
      background: #ffffff;
      border-radius: compute(10);
      border: 1px solid #c6c6c6;
      text-align: center;
      line-height: compute(30);
      font-size: compute(14);
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #444444;
    }
    .selected {
      border: 1px solid #fd4538;
      color: #e9675f;
    }
  }
  .entrance {
    margin: 0 compute(20);
    .picbox {
      height: compute(285);
      overflow: hidden;
      img {
        width: 100%;
        // 调整img图片与下面盒子的缝隙
        vertical-align: bottom;
      }
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