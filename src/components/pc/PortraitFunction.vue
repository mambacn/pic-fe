<template>
  <div class="portrait-box">
    <div class="mainContent portraitMain">
      <!-- 人像功能标题模块 -->
      <div class="titile-box">
        <img src="@/assets/pc/ornament.png" alt="" />
        <h2>人像功能</h2>
        <img src="@/assets/pc/ornament.png" alt="" />
      </div>
      <!-- 人像功能图片入口模块 -->
      <div class="picture-box">
        <PortraitUnit
          v-for="(p, index) in portraits"
          :src="p.src"
          :funtionTitle="p.title"
          :key="index"
        ></PortraitUnit>
      </div>
    </div>
  </div>
</template>

<script>
import PortraitUnit from "./PortraitUnit.vue";
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
    };
  },
  components: { PortraitUnit },
};
</script>

<style lang="scss" scoped>
.portrait-box {
  height: 1502px;
  background-image: url("@/assets/pc/portraitbackground.png");
  .portraitMain {
    // 标题样式
    .titile-box {
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        display: inline-block;
        margin: 0px 32px;
        height: 45px;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 45px;
      }
    }
    // 功能图片样式
    .picture-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>