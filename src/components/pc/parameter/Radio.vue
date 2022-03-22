<template>
  <el-radio-group @change="change" v-model="value">
    <el-radio
      v-for="item in itemInfo.options"
      :label="item.value"
      :key="item.value"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  props: ["itemInfo"],
  mounted() {
    this.$emit("change", this.value);
  },
  data() {
    return {
      value: 0,
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
</style>