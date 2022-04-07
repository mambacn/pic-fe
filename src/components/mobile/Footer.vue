<template>
  <div class="footer-box">
    <div class="info">
      <span>所有功能</span><span>开通会员</span><span>联系我们</span>
      <div>© 2022 隐私政策 京ICP证080268号 京ICP备10005211号</div>
    </div>
    <div class="download">
      <img src="@/assets/pc/Android.png" alt="" />
      <img src="@/assets/pc/ios.png" alt="" />
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
.footer-box {
  width: 100vw;
  height: compute(183);
  background-image: url("@/assets/mobile/footer.png");
  background-size: cover;
  .info {
    font-size: compute(12);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    padding-top: compute(33);
    margin-bottom: compute(31);
    text-align: center;
    span {
      display: inline-block;
      height: compute(17);
      margin-left: compute(10);
      margin-right: compute(10);
    }
    div {
      margin-top: compute(15);
      height: compute(17);
    }
  }
  .download {
    text-align: center;
    img {
      width: compute(126);
      height: compute(39);
      margin-left: compute(21);
      margin-right: compute(21);
    }
  }
}
</style>