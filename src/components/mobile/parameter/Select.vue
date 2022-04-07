<template>
  <el-select v-model="value" @change="change" placeholder="请选择" size="mini">
    <el-option
      v-for="(item, index) in itemInfo.options"
      :key="index"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: ["itemInfo"],
  mounted() {
    this.$emit("change", this.value);
  },
  data() {
    return {
      value: this.itemInfo.name == "图片风格" ? "默认" : 0,
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