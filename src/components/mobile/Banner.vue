<template>
  <div class="banner-box">
    <img src="@/assets/mobile/banner1.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.banner-box {
  width: 100vw;
  height: compute(284);
  img {
    width: 100%;
  }
}
</style>