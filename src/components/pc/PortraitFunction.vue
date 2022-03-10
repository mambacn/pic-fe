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
        <!-- <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait1.png" alt="" />
          <div class="function-title"><h4>人脸年龄化</h4></div>
        </div> -->
        <FunctionEntrance1
          :src="require('@/assets/pc/portrait/portrait1.png')"
          funtionTitle="人脸年龄化"
        ></FunctionEntrance1>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait2.png" alt="" />
          <div class="function-title"><h4>性别转换</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait3.png" alt="" />
          <div class="function-title"><h4>人脸动漫化/素描化</h4></div>
        </div>
      </div>
      <div class="picture-box">
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait4.png" alt="" />
          <div class="function-title"><h4>人体分割</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait5.png" alt="" />
          <div class="function-title"><h4>人脸美妆</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait6.png" alt="" />
          <div class="function-title"><h4>人脸美型</h4></div>
        </div>
      </div>
      <div class="picture-box">
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait7.png" alt="" />
          <div class="function-title"><h4>五官编辑</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait8.png" alt="" />
          <div class="function-title"><h4>人脸滤镜</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/portrait/portrait9.png" alt="" />
          <div class="function-title"><h4>人脸美颜</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FunctionEntrance1 from "./FunctionEntrance1.vue";
export default {
  components: { FunctionEntrance1 },
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
      margin-top: 45px;
      .function-entrance {
        cursor: pointer;
        img {
          // 调整img图片与下面盒子的缝隙
          vertical-align: bottom;
        }
        .function-title {
          width: 365px;
          height: 91px;
          background: #ffffff;
          box-shadow: 0px 5px 11px 0px rgba(83, 83, 83, 0.16);
          border-radius: 0px 0px 10px 10px;
          overflow: hidden;
          h4 {
            height: 28px;
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #444444;
            line-height: 28px;
            text-align: center;
            margin-top: 35px;
          }
        }
      }
    }
  }
}
</style>