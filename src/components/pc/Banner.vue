<template>
  <div class="banner-box">
    <div class="mainContent bannerMain"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 775px;
  background: url("@/assets/pc/banner-bottom.png") no-repeat center;
  background-size: cover;
  .bannerMain {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
  }
}
</style>