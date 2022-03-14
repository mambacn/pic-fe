<template>
  <div class="collage-box">
    <!-- 拼图功能标题模块 -->
    <div class="titile-box">
      <img src="@/assets/mobile/ornament.png" alt="" />
      <h2>拼图贴纸</h2>
      <img src="@/assets/mobile/ornament.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>