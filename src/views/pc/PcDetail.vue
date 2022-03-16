<template>
  <div class="detail-box">
    <div class="mainContent detalMain">
      <!-- 功能体验标题模块 -->
      <div class="titile-box">
        <img src="@/assets/pc/ornament.png" alt="" />
        <h2>功能体验</h2>
        <img src="@/assets/pc/ornament.png" alt="" />
      </div>
      <!-- 功能体验展示模块 -->
      <div class="experience">
        <div class="parameter">
          <div class="para">
            <div>
              <span> 参数类型1</span>
              <el-radio v-model="radio" label="1">备选项</el-radio>
            </div>
            <div>
              <span> 参数类型2</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="(item, index) in options"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="block">
              <span> 参数类型3</span>
              <el-slider v-model="value2"></el-slider>
            </div>
          </div>
          <button type="button" @click="handle">确认参数</button>
        </div>
        <div class="show">
          <img :src="picurl" alt="" />
        </div>
        <div class="upload">
          <div class="search">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              v-model="input"
            >
            </el-input>
          </div>
          <button type="button" class="button2">
            <img src="@/assets/mobile/download.png" alt="" />
            下载成图
          </button>
          <button type="button" class="button1" @click="uploadpic">
            上传照片
          </button>
          <input
            class="default-btn"
            type="file"
            ref="defaultbtn"
            @change="showpic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      value2: 50,
      options: [
        {
          value: "选项1",
          label: "数据1",
        },
        {
          value: "选项2",
          label: "数据2",
        },
        {
          value: "选项3",
          label: "数据3",
        },
        {
          value: "选项4",
          label: "数据4",
        },
        {
          value: "选项5",
          label: "数据5",
        },
      ],
      value: "",
      input: "",
      picurl: "",
      file: {},
    };
  },
  methods: {
    uploadpic() {
      this.$refs["defaultbtn"].click();
    },
    showpic(e) {
      // console.log(e.target.files);
      const file = e.target.files[0];
      this.file = file;
      const _this = this;
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          const result = reader.result;
          _this.picurl = result;
        };
      }
    },
    handle() {
      const fd = new FormData();
      fd.append("image", this.file);
      fd.append("json", "json");
      this.$axios.post("/alyApi/humananime", fd).then((res) => {
        const url = res.data.body.ImageURL;
        this.picurl = url;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-box {
  height: 953px;
  background-color: #fff8f8;
  .detalMain {
    // 标题样式
    .titile-box {
      padding-top: 45px;
      display: flex;
      justify-content: center;
      img {
        padding-top: 4px;
      }
      h2 {
        display: inline-block;
        margin: 0px 32px;
        height: 45px;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 45px;
      }
    }
    // 功能体验展示样式
    .experience {
      overflow: hidden;
      margin-top: 45px;
      width: 1280px;
      height: 759px;
      background: #ffffff;
      border-radius: 28px;
      border: 2px solid #ffc9c5;
      .parameter {
        margin-top: 42px;
        height: 47px;
        font-size: 15px;
        .para {
          margin-left: 56.5px;
          float: left;
          width: 847px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .block {
            width: 300px;
          }
          span {
            margin-right: 16px;
          }
        }
        button {
          cursor: pointer;
          float: right;
          margin-right: 56.5px;
          width: 154px;
          height: 47px;
          background: #fd4538;
          border-radius: 7px;
          border: 0px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
        }
      }
      .show {
        margin: 26px auto 0px;
        width: 1163px;
        height: 501px;
        background: #f3f3f3;
        border-radius: 1px;
        border: 1px solid #e2e2e2;
        text-align: center;
        img {
          height: 100%;
        }
      }
      .upload {
        margin-top: 36px;
        width: 1280px;
        height: 107px;
        background: #f3f3f3;
        border-radius: 1px;
        border-top: 2px solid #ffc9c5;
        .search {
          float: left;
          margin-left: 56px;
          margin-top: 28px;
          width: 755px;
          height: 47px;
          background: #ffffff;
          /deep/ .el-input__inner {
            height: 47px;
          }
        }
        button {
          cursor: pointer;
          float: right;
          width: 154px;
          height: 47px;
          border-radius: 7px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC, "Helvetica Neue",
            Helvetica, Arial;
          margin-top: 28px;
        }
        .button1 {
          background: #fd4538;
          color: #ffffff;
          border: 0px;
        }
        .button2 {
          border: 1px solid #fd4538;
          color: #fd4538;
          margin-right: 56.5px;
          margin-left: 34px;
          position: relative;
          img {
            position: absolute;
            top: 16px;
            left: 30px;
            width: 15px;
          }
        }
        .default-btn {
          visibility: hidden;
        }
      }
    }
  }
}
</style>