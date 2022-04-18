<template>
  <div class="box">
    <div class="mainContent footerbox">
      <div class="info">
        <span>所有功能</span><span>开通会员</span><span>联系我们</span>
        <div>© 2022 隐私政策 京ICP证080268号 京ICP备10005211号</div>
      </div>
      <div class="download">
        <a
          href="https://play.google.com/store/apps/details?id=sw.superb.faceaging"
          target="_blank"
          ><img src="@/assets/pc/Android.png" alt=""
        /></a>
        <a href="https://apps.apple.com/cn/app/id1603377583" target="_blank"
          ><img src="@/assets/pc/ios.png" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  height: 203px;
  background-image: url("@/assets/pc/footer.png");
  .footerbox {
    display: flex;
    height: 100%;
    justify-content: space-between;
    .info {
      padding-top: 58px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 28px;
      span {
        display: inline-block;
        height: 28px;
        margin-right: 29px;
        cursor: pointer;
      }
      div {
        margin-top: 26px;
        height: 28px;
      }
    }
    .download {
      padding-top: 61px;
      a {
        display: inline-block;
        margin-left: 29px;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>