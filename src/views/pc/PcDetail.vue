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
          <div class="newpic-box" ref="newpicbox" v-show="iscomparing">
            <img class="newpic" :src="newpicurl" alt="" />
          </div>
          <img
            v-if="iscomparing"
            src="@/assets/pc/comparison.png"
            class="comparison"
            alt=""
            @mousedown="move"
            draggable="false"
          />
          <div class="origin" v-show="iscomparing" ref="origin">原图</div>
          <div class="result" v-show="iscomparing" ref="result">效果图</div>
        </div>
        <!-- 上传下载模块 -->
        <div class="upload">
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
          <span>或</span>
          <button type="button" class="button2" @click="downloadpic">
            <img src="@/assets/mobile/download.png" alt="" />
            下载成图
            <!-- <a :href="newpicurl ? newpicurl : '#'" download="pic"> 下载成图</a> -->
          </button>
          <button type="button" class="button1" @click="uploadpic">
            上传照片
          </button>
          <input
            class="default-btn"
            type="file"
            ref="defaultbtn"
            @change="showpic"
            accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parameter from "@/components/pc/Parameter.vue";

export default {
  components: { Parameter },
  data() {
    return {
      input: "",
      // 原图片地址
      picurl: "",
      // 效果图地址
      newpicurl: "",
      // 上传文件
      file: null,
      // 是否正在加载效果图
      isloading: false,
      // 是否正在比较
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
    },
    showpic(e) {
      // console.log(e.target.files);
      if (this.iscomparing == true) {
        this.$refs.newpicbox.style.width = "580.5px";
      }
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
        // console.log(value);
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
        this.$refs.newpicbox.style.width = "580.5px";
        this.$refs.result.style.left = "592px";
      } else {
        this.$message.error("该请先上传照片");
      }
    },
    move(e) {
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      // let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        // let top = e.clientY - disY;
        //移动当前元素
        if (left < 0) {
          odiv.style.left = 0 + "px";
        } else if (left > 1117) {
          odiv.style.left = 1117 + "px";
        } else {
          odiv.style.left = left + "px";
        }
        if (left < 110) {
          this.$refs.origin.style.visibility = "hidden";
        } else {
          this.$refs.origin.style.visibility = "visible";
        }
        let diffdata = 557 - left;
        let width = 580.5 + diffdata;
        let resultleft = 595 - diffdata < 33.5 ? 33.5 : 595 - diffdata;
        if (resultleft > 1040) {
          this.$refs.result.style.visibility = "hidden";
        } else {
          this.$refs.result.style.visibility = "visible";
        }
        this.$refs.result.style.left = resultleft + "px";
        this.$refs.newpicbox.style.width = width + "px";
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    // #region
    // downloadIamge(imgsrc, name) {
    //   //下载图片地址和图片名
    //   var image = new Image();
    //   // 解决跨域 Canvas 污染问题
    //   image.setAttribute("crossOrigin", "*");
    //   image.src = imgsrc;
    //   image.onload = function () {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = image.width;
    //     canvas.height = image.height;
    //     var context = canvas.getContext("2d");
    //     context.drawImage(image, 0, 0, image.width, image.height);
    //     var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
    //     var a = document.createElement("a"); // 生成一个a元素
    //     var event = new MouseEvent("click"); // 创建一个单击事件
    //     a.download = name || "photo"; // 设置图片名称
    //     a.href = url; // 将生成的URL设置为a.href属性
    //     a.dispatchEvent(event); // 触发a的单击事件
    //   };
    // },
    // downloadpic() {
    //   this.downloadIamge(this.newpicurl, "pic");
    // },
    // #endregion
    downloadpic() {
      if (this.newpicurl) {
        let a_link = document.createElement("a");
        a_link.style.display = "none";
        a_link.href = this.newpicurl;
        a_link.setAttribute("id", "codeLink");
        a_link.setAttribute("download", "pic");
        document.body.appendChild(a_link);
        a_link.click();

        let objLink = document.getElementById("codeLink");
        document.body.removeChild(objLink);
      }
    },
    //#region
    // searchpic() {
    //   try {
    //     this.checkUrl(this.input)
    //       .then((res) => {
    //         if (res) {
    //           alert("有效");
    //         } else {
    //           alert("无效");
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // checkUrl(url) {
    //   const _this = this;
    //   const promise = new Promise(function (resolve, reject) {
    //     if (!url) reject("无效路径");
    //     _this.$axios.get(url).then((res) => {
    //       if (res.status == 200) resolve(true);
    //       else resolve(false);
    //     });
    //   });
    //   return promise;
    // },
    //#endregion
    searchpic() {
      // this.checkCross(this.input);
      this.$message.error("该地址不支持，图片加载错误");
      if (this.iscomparing == true) {
        this.$refs.newpicbox.style.width = "580.5px";
      }
      this.newpicurl = "";
      this.picurl = "";
      this.file = null;
      this.iscomparing = false;
    },
    checkCross(url) {
      let img = new Image();
      img.src = url;
      img.onload = () => {
        this.picurl = this.input;
      };
      img.onerror = () => {
        this.$message.error("该地址不支持，图片加载错误");
        this.picurl = "";
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-box {
  height: 953px;
  background-color: #fff8f8;
  margin-top: 84px;
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
        position: relative;
        text-align: center;
        overflow: hidden;
        .loading {
          width: 1161px;
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
          width: 580.5px;
          height: 100%;
          top: 0;
          right: 0;
          .newpic {
            width: 1161px;
            height: 499px;
            object-fit: contain;
            position: absolute;
            right: 0;
            //position: absolute;
            //right: 580.15px;
            //transform: translateX(50%);
            background-color: #f3f3f3;
          }
        }
        .comparison {
          cursor: pointer;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 557px;
        }
        .origin {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 113px;
          height: 39px;
          line-height: 39px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 7px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
        }
        .result {
          position: absolute;
          top: 10px;
          left: 592px;
          width: 113px;
          height: 39px;
          line-height: 39px;
          text-align: center;
          background-color: rgba(253, 69, 56, 0.2);
          border-radius: 7px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fd4538;
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
          /deep/ .el-input-group__append {
            padding: 0;
          }
          button {
            margin: 0;
          }
        }
        span {
          display: inline-block;
          margin-top: 41px;
          margin-left: 25px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: #3d3d3d;
        }
        .button1,
        .button2 {
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
          color: #fd4538;
          border: 1px solid #fd4538;
          margin-right: 56.5px;
          margin-left: 34px;
          position: relative;
          img {
            position: absolute;
            top: 16px;
            left: 30px;
            width: 15px;
          }
          a {
            color: #fd4538;
          }
        }
        .default-btn {
          visibility: hidden;
        }
      }
    }
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