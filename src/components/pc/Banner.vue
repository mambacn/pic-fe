<template>
  <div class="banner-box">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="mainContent bannerMain">
      <div class="pic-box">
        <img class="pic" src="@/assets/pc/banner1.png" alt="" />
        <div class="changebox">
          <img class="pic2" src="@/assets/pc/banner2.png" alt="" />
        </div>
      </div>
      <img class="word" src="@/assets/pc/banner-word.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 775px;
  position: relative;
  overflow: hidden;
  .circle {
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    animation: mymove 6s ease-in-out infinite;
  }
  .circle:first-of-type {
    width: 600px;
    height: 600px;
    background: #ffd5c8;
    opacity: 0.5;
    left: -127px;
    bottom: -224px;
  }
  .circle:nth-of-type(2) {
    height: 460px;
    width: 460px;
    background: #ffac92;
    opacity: 0.5;
    right: -57px;
    top: -39px;
  }
  .bannerMain {
    height: 100%;
    .pic-box {
      width: 558px;
      height: 675px;
      display: inline-block;
      margin-top: 51px;
      position: relative;
      border-radius: 29px;
      overflow: hidden;
    }
    .changebox {
      position: absolute;
      top: 0;
      left: 0;
      width: 558px;
      height: 675px;
      border-right: 3.5px solid #fff;
      overflow: hidden;
      animation: pic-change 2.4s ease infinite;
      .pic2 {
        vertical-align: bottom;
      }
    }

    .word {
      vertical-align: top;
      margin-top: 228px;
      margin-left: 92px;
    }
  }
}
@keyframes pic-change {
  0%,
  100% {
    width: 0;
  }
  50% {
    width: 558px;
  }
}
@keyframes mymove {
  0%,
  100% {
    -webkit-transform: translateX(-5%) translateY(0);
    transform: translateX(-5%) translateY(0);
  }
  25% {
    -webkit-transform: translateX(0) translateY(-5%);
    transform: translateX(0) translateY(-5%);
  }
  50% {
    -webkit-transform: translateX(5%) translateY(0);
    transform: translateX(5%) translateY(0);
  }
  75% {
    -webkit-transform: translateX(0) translateY(5%);
    transform: translateX(0) translateY(5%);
  }
}
</style>