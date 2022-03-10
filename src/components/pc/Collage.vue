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
        <div class="function-entrance">
          <img src="@/assets/pc/collage/collage1.png" alt="" />
          <div class="function-title"><h4>拼图</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/collage/collage2.png" alt="" />
          <div class="function-title"><h4>照片滤镜</h4></div>
        </div>
        <div class="function-entrance">
          <img src="@/assets/pc/collage/collage3.png" alt="" />
          <div class="function-title"><h4>海量贴图</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
            height: 33px;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #444444;
            line-height: 33px;
            text-align: center;
            margin-top: 31px;
          }
        }
      }
    }
  }
}
</style>