<template>
  <div class="box">
    <div class="mainContent headerbox">
      <div class="logo">企业logo</div>
      <div class="btns">
        <div class="btn">所有功能<i class="el-icon-arrow-down"></i></div>
        <div class="btn">开通会员</div>
        <el-popover placement="bottom" width="214" trigger="hover">
          <img class="adimg" src="@/assets/pc/Android.png" alt="" />
          <img class="iosimg" src="@/assets/pc/ios.png" alt="" />
          <div class="btn" slot="reference">下载应用</div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// 强制修改elementui组件样式（popper组件）
.el-popper {
  border-radius: 14px !important;
}
.popper__arrow::after {
  top: -24px !important;
  margin-left: -12px !important;
}
.popper__arrow::after {
  border-width: 18px !important;
}
.adimg {
  margin: 20px 12px;
  cursor: pointer;
}
.iosimg {
  margin: 0px 12px 18px 12px;
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
.box {
  height: 84px;
  border-bottom: 1px solid #e9e9e9;
  .headerbox {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 270px;
      height: 55px;
      margin-left: 46px;
      background-color: #ffeae3;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #f88987;
      line-height: 55px;
      text-align: center;
      border-radius: 5px;
    }
    .btns {
      margin-right: 50px;
      display: flex;
      align-items: center;

      .btn {
        height: 84px;
        line-height: 84px;
        font-size: 18px;
        cursor: pointer;
        margin-left: 64px;
        i {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>