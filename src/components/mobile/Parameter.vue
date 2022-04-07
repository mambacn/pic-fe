<template>
  <div class="parameter">
    <div class="para">
      <div
        class="para-item"
        v-for="(item, index) in searchOptions[type]"
        :key="index"
      >
        <div class="itemtitle">{{ item.name }}</div>
        <component
          :is="item.type"
          :itemInfo="item"
          @change="
            (e) => {
              searchChange(item.key, e);
            }
          "
        ></component>
      </div>
    </div>
    <button type="button" @click="handle" :disabled="isloading">
      确认参数
    </button>
  </div>
</template>

<script>
import Slider from "./parameter/Slider.vue";
import Radio from "./parameter/Radio.vue";
import Select from "./parameter/Select.vue";

export default {
  props: ["isloading", "type"],
  components: { Slider, Radio, Select },
  data() {
    return {
      searchInfo: {},
      searchOptions: {
        0: [
          {
            type: "Slider",
            name: "转换目标年龄",
            key: "Age",
            min: 10,
            max: 80,
            default: 10,
          },
        ],
        1: [
          {
            type: "Radio",
            name: "性别转换类型",
            key: "Gender",
            options: [
              { label: "男转女", value: 0 },
              { label: "女转男", value: 1 },
            ],
          },
        ],
        2: [
          {
            type: "Radio",
            key: "api",
            name: "类型",
            options: [
              { label: "动漫化", value: 0 },
              { label: "素描化", value: 1 },
            ],
          },
        ],
        3: [],
        4: [
          {
            type: "Select",
            key: "ResourceType",
            name: "美妆效果",
            options: [
              { label: "whole", value: 0 },
              { label: "基础妆", value: 1 },
              { label: "少女妆", value: 2 },
              { label: "活力妆", value: 3 },
              { label: "优雅妆", value: 4 },
              { label: "魅惑妆", value: 5 },
              { label: "梅子妆", value: 6 },
            ],
          },
          {
            type: "Slider",
            name: "强度",
            key: "Strength",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
        ],
        5: [
          {
            type: "Select",
            key: "ShapeType",
            name: "美形部位",
            options: [
              // 颧骨 削脸 瘦脸 脸长 下巴缩短 下巴拉长 瘦下巴 瘦下颚
              // 大眼 眼角1 眼距 拉宽眼距 眼角2 眼睛高度 瘦鼻 鼻翼 鼻长 鼻头长 唇宽 嘴唇大小 唇高 人中
              { label: "颧骨", value: 0 },
              { label: "削脸", value: 1 },
              { label: "瘦脸", value: 2 },
              { label: "脸长", value: 3 },
              { label: "下巴缩短", value: 4 },
              { label: "下巴拉长", value: 5 },
              { label: "瘦下巴", value: 6 },
              { label: "瘦下颚", value: 7 },
              { label: "大眼", value: 8 },
              { label: "眼角1", value: 9 },
              { label: "眼距", value: 10 },
              { label: "拉宽眼距", value: 11 },
              { label: "眼角2", value: 12 },
              { label: "眼睛高度", value: 13 },
              { label: "瘦鼻", value: 14 },
              { label: "鼻翼", value: 15 },
              { label: "鼻长", value: 16 },
              { label: "鼻头长", value: 17 },
              { label: "唇宽", value: 18 },
              { label: "嘴唇大小", value: 19 },
              { label: "唇高", value: 20 },
              { label: "人中", value: 21 },
            ],
          },
          {
            type: "Slider",
            name: "强度",
            key: "Strength",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
        ],
        6: [],
        7: [
          {
            type: "Select",
            key: "ResourceType",
            name: "图片风格",
            options: [
              { label: "默认", value: "默认" },
              { label: "向日葵", value: "向日葵" },
              { label: "垦丁", value: "垦丁" },
              { label: "桔梗 ", value: "桔梗 " },
              { label: "大理", value: "大理" },
              { label: "丽江", value: "丽江" },
            ],
          },
          {
            type: "Slider",
            name: "强度",
            key: "Strength",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
        ],
        8: [
          {
            type: "Slider",
            name: "锐化（清晰度）程度",
            key: "Sharp",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
          {
            type: "Slider",
            name: "平滑程度",
            key: "Smooth",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
          {
            type: "Slider",
            name: "美白程度",
            key: "White",
            min: 0,
            max: 1,
            default: 0.6,
            step: 0.1,
          },
        ],
      },
    };
  },
  methods: {
    searchChange(key, value) {
      this.searchInfo[key] = value;
    },
    handle() {
      this.$emit("confirm", this.searchInfo);
    },
  },
};
</script>

<style lang='scss' scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.parameter {
  font-size: compute(12);
  padding-top: compute(20);
  padding-bottom: compute(20);
  .para {
    margin-left: compute(20);
    .para-item {
      display: flex;
      align-items: center;
      min-height: compute(30);
      .itemtitle {
        font-size: compute(12);
        margin-right: 16px;
      }
    }
  }
  button {
    margin-left: compute(20);
    margin-top: compute(10);
    width: compute(95);
    height: compute(32);
    background: #fd4538;
    border-radius: compute(4);
    border: 0px;
    font-size: compute(12);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>