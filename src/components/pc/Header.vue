<template>
  <div class="box">
    <div class="mainContent headerbox">
      <div class="logo" @click="returnhome">企业logo</div>
      <div class="btns">
        <div class="btn allfunction">
          所有功能<i class="el-icon-arrow-down"></i>
          <div class="nav-function">
            <div class="triangle"></div>
            <div class="function-one">
              <h2>人脸人体</h2>
              <ul>
                <li
                  v-for="(p, index) in portraits"
                  :key="index"
                  @click="todetail(p.type)"
                >
                  {{ p.title }}
                </li>
              </ul>
            </div>
            <div class="function-two">
              <h2>拼图贴图</h2>
              <ul>
                <li>照片拼图</li>
                <li>照片滤镜</li>
                <li>海量贴图</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btn">开通会员</div>
        <el-popover placement="bottom" width="214" trigger="hover">
          <img class="adimg" src="@/assets/pc/Android.png" alt="" />
          <img class="iosimg" src="@/assets/pc/ios.png" alt="" />
          <div class="btn" slot="reference">下载应用</div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portraits: [
        {
          title: "人脸年龄化",
          type: 0,
        },
        {
          title: "性别转换",
          type: 1,
        },
        {
          title: "人脸动漫化/素描化",
          type: 2,
        },
        {
          title: "人体分割",
          type: 3,
        },
        {
          title: "人脸美妆",
          type: 4,
        },
        {
          title: "人脸美型",
          type: 5,
        },
        {
          title: "五官编辑",
          type: 6,
        },
        {
          title: "人脸滤镜",
          type: 7,
        },
        {
          title: "人脸美颜",
          type: 8,
        },
      ],
    };
  },
  methods: {
    todetail(type) {
      this.$router.push({
        path: "/detail",
        query: { selected: type },
      });
      this.$router.go(0);
    },
    returnhome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss">
// 强制修改elementui组件样式（popper组件）
.el-popper {
  border-radius: 14px !important;
}
// .popper__arrow::after {
//   top: -24px !important;
//   margin-left: -12px !important;
// }
// .popper__arrow::after {
//   border-width: 18px !important;
// }
.adimg {
  margin: 20px 12px;
  cursor: pointer;
}
.iosimg {
  margin: 0px 12px 18px 12px;
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
.box {
  height: 84px;
  border-bottom: 1px solid #e9e9e9;
  .headerbox {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
      width: 270px;
      height: 55px;
      margin-left: 46px;
      background-color: #ffeae3;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #f88987;
      line-height: 55px;
      text-align: center;
      border-radius: 5px;
    }
    .btns {
      margin-right: 50px;
      display: flex;
      align-items: center;
      .btn {
        height: 84px;
        line-height: 84px;
        font-size: 18px;
        cursor: pointer;
        margin-left: 64px;
        position: relative;
        i {
          margin-left: 16px;
          transition: all 0.2s linear 0.2s;
        }
        .nav-function {
          transition: all 0.2s linear 0.2s;
          opacity: 0;
          visibility: hidden;
          z-index: 1;
          position: absolute;
          top: 96px;
          left: -852px;
          height: 160px;
          width: 1280px;
          border-radius: 25px;
          // 盒子阴影写法 box-shadow: h-shadow v-shadow blur spread color inset;
          box-shadow: 0px 0px 10px 12px rgba(216, 0, 0, 0.022);
          background-color: #fff;
          line-height: 80px;
          .triangle {
            position: absolute;
            left: 875px;
            top: -24px;
            border: 12px solid transparent;
            border-bottom-color: #fff;
          }
          .function-one {
            display: flex;
            h2 {
              margin-left: 67px;
              margin-right: 52px;
              font-size: 17px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #fd4538;
            }
            ul {
              width: 1000px;
              display: flex;
              justify-content: space-between;
              li {
                cursor: pointer;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #444444;
              }
              li:hover {
                color: #fd4538;
              }
            }
          }
          .function-two {
            display: flex;
            margin-top: -10px;
            h2 {
              margin-left: 67px;
              margin-right: 52px;
              font-size: 17px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #fd4538;
            }
            ul {
              width: 300px;
              display: flex;
              justify-content: space-between;
              li {
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #444444;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
.allfunction:hover .nav-function {
  visibility: visible !important;
  opacity: 1 !important;
}
.allfunction:hover i {
  transform: rotate(180deg) !important;
}
</style>