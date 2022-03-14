<template>
  <div class="portrait-box">
    <!-- 人像功能标题模块 -->
    <div class="titile-box">
      <img src="@/assets/mobile/ornament.png" alt="" />
      <h2>人像功能</h2>
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
}
</style>