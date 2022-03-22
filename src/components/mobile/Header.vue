<template>
  <div class="header-box">
    <div class="logo" @click="returnhome">企业logo</div>
    <div class="more"><img src="@/assets/mobile/more.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  methods: {
    returnhome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.header-box {
  width: 100vw;
  height: compute(64);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  .logo {
    width: compute(157);
    height: compute(32);
    background: #ffeae3;
    border-radius: compute(3);
    font-size: compute(12);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #f88987;
    line-height: compute(32);
    text-align: center;
    margin-left: compute(20);
  }
  .more {
    img {
      width: compute(20);
      height: compute(20);
      margin-right: compute(24);
    }
  }
}
</style>