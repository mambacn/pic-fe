<template>
  <div class="collage-box">
    <div class="mainContent collageMain">
      <!-- 拼图功能标题模块 -->
      <div class="titile-box">
        <img src="@/assets/pc/ornament.png" alt="" />
        <h2>拼图贴图</h2>
        <img src="@/assets/pc/ornament.png" alt="" />
      </div>
      <!-- 拼图功能图片入口模块 -->
      <div class="picture-box">
        <CollageUnit
          v-for="(c, index) in collages"
          :src="c.src"
          :funtionTitle="c.title"
          :key="index"
        ></CollageUnit>
      </div>
    </div>
  </div>
</template>

<script>
import CollageUnit from "./CollageUnit.vue";
export default {
  data() {
    return {
      collages: [
        {
          src: require("@/assets/pc/collage/collage1.png"),
          title: "人脸年龄化",
        },
        {
          src: require("@/assets/pc/collage/collage2.png"),
          title: "性别转换",
        },
        {
          src: require("@/assets/pc/collage/collage3.png"),
          title: "人脸动漫化/素描化",
        },
      ],
    };
  },
  components: { CollageUnit },
};
</script>

<style lang="scss" scoped>
.collage-box {
  height: 1007px;
  background-color: #fff4f4;
  .collageMain {
    // 标题样式
    .titile-box {
      padding-top: 91px;
      display: flex;
      justify-content: center;
      img {
        padding-top: 4px;
      }
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
      justify-content: space-between;
      margin-top: 70px;
    }
  }
}
</style>