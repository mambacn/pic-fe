<template>
  <div class="header-box">
    <div class="logo" @click="returnhome">
      <img src="@/assets/pc/logo.png" alt="" />
    </div>
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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
  width: 100vw;
  height: compute(64);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  background-color: #fff;
  .logo {
    width: compute(118);
    height: compute(30);
    margin-left: compute(20);
    img {
      height: 100%;
    }
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