<template>
  <div class="detail-box">
    <div class="show"></div>
    <div class="load">
      <button type="button" class="button1" @click="uploadpic">上传照片</button>
      <button type="button" class="button2">
        <img src="@/assets/mobile/download.png" alt="" />
        下载成图
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadpic() {},
  },
};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.show {
  width: compute(335);
  height: compute(251);
  background: #f3f3f3;
  border-radius: 1px;
  border: 2px solid #e2e2e2;
  margin-left: compute(20);
  margin-bottom: compute(17);
}
.load {
  width: 100vw;
  height: compute(66);
  background: #f3f3f3;
  border-radius: 1px;
  button {
    width: compute(145);
    height: compute(37);
    border-radius: compute(4);
    font-size: compute(12);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    margin-top: compute(15);
  }
  .button1 {
    background: #fd4538;
    color: #ffffff;
    border: 0px;
    margin-left: compute(20);
  }
  .button2 {
    background: #ffffff;
    border: compute(1) solid #fd4538;
    color: #fd4538;
    margin-left: compute(45);
  }
}
</style>