<template>
  <div class="detail-box">
    <!-- 参数模块 -->
    <Parameter
      :isloading="isloading"
      :type="parseInt($route.query.selected)"
      @confirm="handle"
    ></Parameter>
    <!-- 展示模块 -->
    <div class="show">
      <div class="loading" v-show="isloading"></div>
      <img class="originalpic" :src="picurl" alt="" v-show="picurl" />
      <div class="newpic-box" v-show="iscomparing" ref="newpicbox">
        <img class="newpic" :src="newpicurl" alt="" />
      </div>
      <img
        v-if="iscomparing"
        src="@/assets/mobile/comparison.png"
        class="comparison"
        alt=""
        @touchstart="move"
        draggable="false"
      />
      <div class="origin" v-show="iscomparing" ref="origin">原图</div>
      <div class="result" v-show="iscomparing" ref="result">效果图</div>
    </div>
    <!-- 网络连接模块 -->
    <div class="search">
      <el-input
        placeholder="请输入图片地址"
        v-model="input"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchpic"
        ></el-button>
      </el-input>
    </div>
    <!-- 上传下载模块 -->
    <div class="load">
      <button type="button" class="button1" @click="uploadpic">上传照片</button>
      <button type="button" class="button2" @click="downloadpic">
        <img src="@/assets/mobile/download.png" alt="" />
        下载成图
      </button>
      <input
        class="default-btn"
        type="file"
        ref="defaultbtn"
        @change="showpic"
        accept="image/*"
      />
    </div>
  </div>
</template>

<script>
import Parameter from "@/components/mobile/Parameter.vue";
export default {
  components: { Parameter },
  data() {
    return {
      input: "",
      picurl: "",
      newpicurl: "",
      file: null,
      isloading: false,
      iscomparing: false,
      ajaxpath: [
        "/tencentApi/changeAging",
        "/tencentApi/swapGender",
        "/alyApi/humananime",
        "/alyApi/segmentbody",
        "/alyApi/facemakeup",
        "/alyApi/facetidyup",
        "/alyApi/swapfacial",
        "/alyApi/facefilter",
        "/alyApi/facebeauty",
      ],
    };
  },
  methods: {
    uploadpic() {
      this.$refs["defaultbtn"].click();
      this.input = "";
    },
    showpic(e) {
      this.$refs.newpicbox.style.width = "44.133vw";
      this.newpicurl = "";
      this.iscomparing = false;
      const file = e.target.files[0];
      if (file.size > 1024 * 1024 * 3) {
        alert("图片大小不能超过3M!");
        return false;
      }
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
    handle(value) {
      // 判断file是否是空对象,不是空对象才发送ajax请求并显示loading
      if (this.file != null) {
        const fd = new FormData();
        fd.append("image", this.file);
        fd.append("json", "json");
        if (value.hasOwnProperty("api")) {
          // 如果用户选择了素描化则进行专门处理
          if (value.api === 1) this.ajaxpath[2] = "/alyApi/facesketch";
        } else {
          for (let key in value) {
            fd.append(key, value[key]);
          }
        }
        const num = parseInt(this.$route.query.selected);
        this.$axios.post(this.ajaxpath[num], fd).then((res) => {
          if (res.data.status == "fail") {
            this.isloading = false;
            this.iscomparing = false;
            return this.$message.error("所选图片无法处理，请重新上传！");
          }
          const url = res.data.body.ImageURL;
          this.newpicurl = url;
          this.isloading = false;
          this.iscomparing = true;
        });
        this.isloading = true;
        this.newpicurl = "";
        this.iscomparing = false;
        this.$refs.newpicbox.style.width = "44.133vw";
        this.$refs.result.style.left = "49.333vw";
      }
    },
    move(e) {
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = ((e.touches[0].clientX - odiv.offsetLeft) / 375) * 100;
      // let disY = e.clientY - odiv.offsetTop;
      document.ontouchmove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = (e.touches[0].clientX / 375) * 100 - disX;
        // let top = e.clientY - disY;
        //移动当前元素
        if (left < 0) {
          odiv.style.left = 0 + "vw";
        } else if (left > 82.4) {
          odiv.style.left = 82.4 + "vw";
        } else {
          odiv.style.left = left + "vw";
        }
        if (left < 29.333) {
          this.$refs.origin.style.visibility = "hidden";
        } else {
          this.$refs.origin.style.visibility = "visible";
        }
        let diffdata = 41.333 - left;
        let width = 44.133 + diffdata;
        let resultleft = 49.333 - diffdata < 8.933 ? 8.933 : 49.33 - diffdata;
        if (resultleft > 72) {
          this.$refs.result.style.visibility = "hidden";
        } else {
          this.$refs.result.style.visibility = "visible";
        }
        this.$refs.result.style.left = resultleft + "vw";
        this.$refs.newpicbox.style.width = width + "vw";
      };
      document.ontouchend = (e) => {
        document.ontouchmove = null;
        document.ontouchend = null;
      };
    },
    downloadpic() {
      let a_link = document.createElement("a");
      a_link.style.display = "none";
      a_link.href = this.newpicurl;
      a_link.setAttribute("id", "codeLink");
      a_link.setAttribute("download", "pic");
      document.body.appendChild(a_link);
      a_link.click();

      let objLink = document.getElementById("codeLink");
      document.body.removeChild(objLink);
    },
    searchpic() {
      this.$message.error("该地址不支持，图片加载错误");
      if (this.iscomparing == true) {
        this.$refs.newpicbox.style.width = "580.5px";
      }
      this.newpicurl = "";
      this.picurl = "";
      this.file = null;
      this.iscomparing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@function compute($number) {
  @return $number/375 * 100vw;
}
.detail-box {
  margin-top: compute(64);
}
.show {
  width: compute(335);
  height: compute(251);
  background: #f3f3f3;
  border-radius: 1px;
  border: compute(2) solid #e2e2e2;
  margin-left: compute(20);
  margin-bottom: compute(17);
  text-align: center;
  position: relative;
  .loading {
    width: 100%;
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    background: linear-gradient(#fff, #fd4538);
    animation: Loading 1.2s linear infinite;
  }
  .originalpic {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .newpic-box {
    position: absolute;
    overflow: hidden;
    width: compute(165.5);
    height: 100%;
    top: 0;
    right: 0;
    .newpic {
      width: compute(331);
      height: compute(247);
      object-fit: contain;
      position: absolute;
      right: 0;
      background-color: #f3f3f3;
    }
  }
  .comparison {
    height: compute(247);
    position: absolute;
    z-index: 1;
    top: 0;
    left: compute(155);
  }
  .origin {
    position: absolute;
    top: compute(10);
    left: compute(10);
    width: compute(57);
    height: compute(20);
    line-height: compute(20);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: compute(4);
    font-size: compute(7);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fff;
  }
  .result {
    position: absolute;
    top: compute(10);
    left: compute(185);
    width: compute(57);
    height: compute(20);
    line-height: compute(20);
    text-align: center;
    background-color: rgba(253, 69, 56, 0.2);
    border-radius: compute(4);
    font-size: compute(7);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fd4538;
  }
}
.search {
  border-top: 1px solid #ffbab5;
  padding: compute(15) compute(20) compute(12);
  /deep/ .el-input__inner {
    height: compute(37);
    font-size: compute(12);
  }
  /deep/ .el-input-group__append {
    padding: 0 compute(15);
  }
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
  .default-btn {
    visibility: hidden;
  }
}

@keyframes Loading {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
    opacity: 0;
  }
}
</style>