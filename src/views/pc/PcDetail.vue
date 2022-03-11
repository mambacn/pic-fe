<template>
  <div class="detail-box">
    <div class="mainContent detalMain">
      <!-- 功能体验标题模块 -->
      <div class="titile-box">
        <img src="@/assets/pc/ornament.png" alt="" />
        <h2>功能体验</h2>
        <img src="@/assets/pc/ornament.png" alt="" />
      </div>
      <!-- 功能体验展示模块 -->
      <div class="experience"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.detail-box {
  height: 953px;
  background-color: #fff8f8;
  .detalMain {
    // 标题样式
    .titile-box {
      padding-top: 45px;
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
    // 功能体验展示样式
    .experience {
      margin-top: 45px;
      width: 1280px;
      height: 759px;
      background: #ffffff;
      border-radius: 28px;
      border: 2px solid #ffc9c5;
    }
  }
}
</style>