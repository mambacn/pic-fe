<template>
  <div class="function-entrance" @click="todetail">
    <img :src="src" alt="" />
    <div class="function-title">
      <h4>{{ functionTitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "functionTitle", "type"],
  methods: {
    todetail() {
      this.$router.push({
        path: "/detail",
        query: { selected: this.type },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.function-entrance:hover {
  bottom: 8px;
  box-shadow: 0px 12px 36px 0px rgba(83, 83, 83, 0.16);
}
.function-entrance {
  margin-top: 45px;
  position: relative;
  bottom: 0px;
  transition: all 0.3s;
  cursor: pointer;
  img {
    // 调整img图片与下面盒子的缝隙
    vertical-align: bottom;
  }
  .function-title {
    width: 365px;
    height: 91px;
    background: #ffffff;
    box-shadow: 0px 5px 11px 0px rgba(83, 83, 83, 0.16);
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    h4 {
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #444444;
      line-height: 28px;
      text-align: center;
      margin-top: 35px;
    }
  }
}
</style>