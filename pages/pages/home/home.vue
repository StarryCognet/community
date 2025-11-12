<template>
  <view class="page-container">
    <uni-nav-bar
      leftWidth="110rpx"
      rightWidth="110rpx"
      height="110rpx"
      :border="false"
      style="position: relative; z-index: 2"
      color="#fff"
      background-color="transparent"
      title="智慧社区"
    ></uni-nav-bar>

    <view class="content">
      <view class="header">
        <view class="header-top">
          <view class="top-dw" @click="goAboutus">
            <uni-icons color="#fff" custom-prefix="iconfont" type="icon-dizhi" style="font-size: 30rpx"></uni-icons>
            <picker @change="bindPickerChange" :value="index" :range="userBuilding">
              <span>{{ userBuilding[index] }}</span>
            </picker>
          </view>
          <view class="top-ss">
            <uni-icons custom-prefix="iconfont" type="icon-sousuo" style="font-size: 30rpx" class="search-icon"></uni-icons>
            <input type="text" placeholder="搜索关键字" />
          </view>
        </view>
        <view class="header-mian">
          <view class="mian-item">
            <view class="item-img" @click="goLivingpayment">
              <image src="/static/img/top-1.png" alt="" mode="widthFix"></image>
            </view>
            <p>生活缴费</p>
          </view>
          <view class="mian-item">
            <view class="item-img" @click="goWarranty">
              <image src="/static/img/top-2.png" alt="" mode="widthFix"></image>
            </view>
            <p>物业报修</p>
          </view>
          <view class="mian-item">
            <view class="item-img" @click="goProblemfeedback">
              <image src="/static/img/top-3.png" alt="" mode="widthFix"></image>
            </view>
            <p>问题反馈</p>
          </view>
          <view class="mian-item">
            <view class="item-img" @click="goRelation">
              <image src="/static/img/top-4.png" alt="" mode="widthFix"></image>
            </view>
            <p>我要帮助</p>
          </view>
        </view>
      </view>
    </view>

    <view class="content-bot">
      <view class="con">
        <view class="con-top" @click="goConsult">
          <image src="/static/img/totiao.png" alt="" mode="widthFix"></image>
          <p>
            <swiper style="height: 40rpx" class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" vertical>
              <swiper-item style="display: flex" v-for="(item, index) in Data" :key="index" @click="dynamicdetails(item.id)">
                <p class="text" style="font-size: 30rpx">{{ item.title }}</p>
                <span v-if="item.isnew" class="red"></span>
              </swiper-item>
            </swiper>
          </p>
          <p @click="dynamicdetails" style="width: 90rpx">
            更多
            <uni-icons custom-prefix="iconfont" type="icon-youjiantou" style="font-size: 30rpx"></uni-icons>
          </p>
        </view>
        <swiper style="" class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-dots="true">
          <swiper-item v-for="(item, index) in Data" :key="index" @click="dynamicdetails(item.id)">
            <image style="width: 100%; height: 250rpx" :src="item.picture ? IMAGE_BASE + item.picture : '/static/img/zhong.png'" mode=""> </image>
          </swiper-item>
        </swiper>
      </view>
      <view class="lift">
        <h2>生活门店</h2>
        <view class="lift-img" @click="goStorelist">
          <image src="/static/img/zhong2.png" alt="" mode="widthFix"></image>
        </view>
      </view>
      <view class="zx">
        <h2>
          资讯
          <uni-icons custom-prefix="iconfont" type="" size="20"></uni-icons>
        </h2>
        <view class="zx-items">
          <view class="item" @click="goConsult" v-for="(item, index) in newData" :key="index">
            <view class="item-title">
              <h2>{{ item.title }}</h2>
              <p>{{ item.addtime }}</p>
            </view>
            <image :src="IMAGE_BASE + item.picture" mode=""></image>
          </view>
        </view>
      </view>
    </view>

    <!-- 		<view class="tap">
			<view class="tap-item">
				<image src="/static/img/bot-1.png" alt="" mode="widthFix"></image>
				<p>主页</p>
			</view>
			<view class="tap-item">
				<image src="/static/img/bot-2.png" alt="" mode="widthFix"></image>
				<p>主页</p>
			</view>
			<view class="tap-item">
				<image src="/static/img/bot-3.png" alt="" mode="widthFix"></image>
				<p>主页</p>
			</view>
			<view class="tap-item">
				<image src="/static/img/bot-4.png" alt="" mode="widthFix"></image>
				<p>主页</p>
			</view>
		</view> -->
  </view>
</template>

<script>
import { VUE_APP_IMAGE_BASE } from "@/config/index.js";
import store from "@/store/index.js";
import { newsList } from "@/apis/index.js";

// import moment from "moment";
import { none } from "../../../utils/common";
export default {
  data() {
    return {
      userBuilding: [],
      index: 0,
      query: {
        page: 1,
        psize: 5,
        type: null,
        key: null,
      },
      IMAGE_BASE: VUE_APP_IMAGE_BASE,
      Data: [],
      newData: [],
      pageCounts: 1,
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },

  onLoad() {
    // 请求小区
    this.getUserBUilding();
    // 小区公告
    this.getnews();
    this.getlist();
  },

  onReachBottom() {
    this.query.page++;
    if (this.pageCounts < this.query.page) {
      return none("没有更多了");
    }
    this.getlist();
  },

  onPullDownRefresh() {
    this.query.page = 1;
    this.getlist();
    uni.stopPullDownRefresh();
  },
  methods: {
    livingpayment() {
      // store.commit("setToken", null);
      this.$common.go("/pages/pagesbusiness/livingpayment/livingpayment");
    },

    async getnews() {
      uni.showLoading({
        title: "加载中...",
      });

      let query = {
        page: 1,
        psize: 5,
        type: 1,
      };
      let {
        data: { list },
      } = await newsList(query);
      // list.map(item => {
      // item.isnew = moment(item.addtime).fotmat("YYY-MM-DD") === moment().fotmat("YYY-MM-DD")
      // })
      uni.hideLoading();
      this.Data = list;
      console.log(1236, this.Data);
    },

    getUserBUilding() {
      let buildings = store.state.buildings;
      this.userBuilding = buildings.map((item) => item.Building + item.houseno);
      console.log("123456", buildings);
    },

    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.detail.value);
      this.index = e.detail.value;
    },

    async getlist() {
      this.query.type = 2;

      uni.showLoading({
        title: "加载中...",
      });

      let {
        data: { list, pageCounts },
      } = await newsList(this.query);

      uni.hideLoading();
      this.newData = this.query.page == 1 ? list : [...this.newData, ...list];

      this.pageCounts = pageCounts;

      console.log(list);
    },

    repairs() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/repairs/repairs",
      });
    },
    dynamicdetails(id) {
      uni.navigateTo({
        url: "/pages/pagesbusiness/dynamicdetails/dynamicdetails?id=" + id,
      });
    },
    goLivingpayment() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/livingpayment/livingpayment",
      });
    },
    goWarranty() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/warranty/warranty",
      });
    },
    goProblemfeedback() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/problemfeedback/problemfeedback",
      });
    },
    goRelation() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/relation/relation",
      });
    },
    goStorelist() {
      uni.switchTab({
        url: "/pages/pages/storelist/storelist",
      });
    },
    goConsult() {
      uni.navigateTo({
        url: "/pages/pagesbusiness/consult/consult",
      });
    },
    goAboutus() {
      uni.navigateTo({
        url: "/pages/pagesmember/aboutus/aboutus",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page-container {
  background-image: url("/static/img/bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f6f6f6;
  min-height: 100vh;

  .content {
    padding: 0 24rpx;
    margin-bottom: 40rpx;
    margin-top: 10rpx;

    .header {
      .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10rpx 0;

        .top-dw {
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8rpx;

          span {
            font-size: 32rpx;
            font-weight: 300;
          }
        }

        .top-ss {
          position: relative;

          .search-icon {
            position: absolute;
            left: 20rpx;
            top: 50%;
            transform: translateY(-50%);
            color: #999;
          }

          input {
            border: 0;
            padding: 5rpx 0;
            border-radius: 200rpx;
            width: 220rpx;
            font-size: 26rpx;
            padding-left: 60rpx;
            background-color: rgba(255, 255, 255, 0.9);
          }
        }
      }

      .header-mian {
        background-color: #fff;
        border-radius: 24rpx;
        padding: 40rpx 0;
        margin-top: 30rpx;
        display: flex;
        justify-content: space-around;

        .mian-item:nth-child(1) {
          .item-img {
            background-color: #4f86ed;
          }
        }

        .mian-item:nth-child(2) {
          .item-img {
            background-color: #71b78b;
          }
        }
        .mian-item:nth-child(3) {
          .item-img {
            background-color: #e39e5e;
          }
        }

        .mian-item:nth-child(4) {
          .item-img {
            background-color: #479cf7;
          }
        }

        .mian-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14rpx;

          .item-img {
            width: 100rpx;
            height: 100rpx;
            border-radius: 16rpx;
            display: flex;
            justify-content: center;
            align-items: center;

            image {
              width: 60rpx;
            }
          }

          p {
            font-size: 28rpx;
            color: #6b6b6b;
          }
        }
      }
    }
  }

  .content-bot {
    padding: 24rpx;
    padding-bottom: 200rpx;
    background-color: #fff;
    border-top-left-radius: 30rpx;
    border-top-right-radius: 30rpx;
    margin-top: 20rpx;

    .con {
      .con-top {
        width: 100%;
        padding: 16rpx 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        image {
          width: 100rpx;
          height: 40rpx;
        }

        p {
          width: 330rpx;
          // width: 200px; /* 设置元素宽度 */
          overflow: hidden; /* 隐藏超出部分 */
          text-overflow: ellipsis; /* 使用省略号表示超出部分 */
          white-space: nowrap; /* 强制文本不换行 */
          span {
            background-color: red;
            display: inline-block;
            padding: 8rpx;
            border-radius: 50rpx;
            position: relative;
            left: 10rpx;
            bottom: -2rpx;
            width: 8rpx;
            height: 8rpx;
          }
        }
      }

      image {
        width: 100%;
        border-radius: 16rpx;
      }
    }

    .lift {
      h2 {
        font-size: 34rpx;
        font-weight: 400;
        padding: 16rpx 0;
        padding-bottom: 24rpx;
      }

      image {
        width: 100%;
        border-radius: 16rpx;
      }
    }

    .zx {
      h2 {
        padding: 16rpx 0;
        font-size: 34rpx;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 8rpx;
      }

      .zx-items {
        gap: 20rpx;
        display: flex;
        flex-direction: column;

        .item {
          padding: 20rpx 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f5f5f5;

          &:last-child {
            border-bottom: none;
          }

          .item-title {
            height: 150rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
              padding: 0;
              font-size: 30rpx;
              font-weight: 400;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            p {
              font-size: 24rpx;
              color: #999;
              font-weight: 300;
            }
          }

          image {
            width: 300rpx;
            height: 250rpx;
            border-radius: 10rpx;
          }
        }
      }
    }
  }

  .tap {
    border-top: 1px solid #dddddd;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 16rpx 0;

    .tap-item:nth-child(1) {
      p {
        color: #0387ff;
      }
    }

    .tap-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6rpx;

      image {
        width: 44rpx;
      }

      p {
        font-size: 24rpx;
      }
    }
  }
}
</style>
