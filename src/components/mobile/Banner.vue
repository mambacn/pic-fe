<template>
  <div class="banner-box">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="pic-box">
      <img class="pic" src="@/assets/pc/banner1.png" alt="" />
      <div class="changebox">
        <img class="pic2" src="@/assets/pc/banner2.png" alt="" />
      </div>
    </div>
    <div class="word"><img src="@/assets/pc/banner-word.png" alt="" /></div>
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
  margin-top: compute(64);
  width: 100vw;
  height: compute(284);
  position: relative;
  overflow: hidden;
  .circle {
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    animation: mymove 6s ease-in-out infinite;
  }
  .circle:first-of-type {
    width: compute(132);
    height: compute(132);
    background: #ffd5c8;
    opacity: 0.5;
    left: compute(-42);
    bottom: compute(-10);
  }
  .circle:nth-of-type(2) {
    height: compute(162);
    width: compute(162);
    background: #ffac92;
    opacity: 0.5;
    right: compute(-50);
    top: compute(5);
  }
  .pic-box {
    width: compute(182);
    height: compute(220);
    margin-top: compute(32);
    margin-left: compute(19);
    position: relative;
    img {
      width: compute(182);
      height: compute(220);
    }
    .changebox {
      position: absolute;
      top: 0;
      left: 0;
      width: compute(182);
      height: compute(220);
      border-right: compute(2) solid #fff;
      overflow: hidden;
      animation: pic-change 2.4s ease infinite;
      .pic2 {
        vertical-align: bottom;
      }
    }
  }
  .word {
    position: absolute;
    border-radius: compute(2);
    overflow: hidden;
    padding: compute(4);
    top: compute(125);
    left: compute(159);
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    img {
      width: compute(200);
      height: compute(100);
    }
  }
}
@keyframes pic-change {
  0%,
  100% {
    width: 0;
  }
  50% {
    width: compute(182);
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