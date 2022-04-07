<template>
  <el-slider
    @change="change"
    v-model="value"
    :min="itemInfo.min"
    :max="itemInfo.max"
    :step="itemInfo.step ? itemInfo.step : 1"
  ></el-slider>
</template>

<script>
export default {
  props: ["itemInfo"],
  mounted() {
    this.$emit("change", this.value);
  },
  data() {
    return {
      value: this.itemInfo.default,
    };
  },
  methods: {
    change(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style lang='scss' scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.el-slider {
  min-width: compute(100);
}
</style>