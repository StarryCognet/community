import { VUE_APP_API_BASE } from "@/config/index.js";
import store from "@/store/index.js"; //需要引入store
export const http = (url, data = {}, method = "get") => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data,
      header: {
        Authorization: store.state.token,
      },
      method,
      success: (res) => {
        // console.log(res.data);
        // resolve(res.data)
        if (res.data.errCode != 10000) {
          uni.showToast({
            title: res.data.errMsg,
            // duration: 2000
            icon: "error",
          });
          reject(res.data.errMsg);
        }
        resolve(res.data);
      },
      fail: (error) => {
        console.log(error);
        reject(error);
      },
      complete: () => {},
    });
  });
};

export const get = (url, data) => {
  return http(url, data, "get");
};

export const post = (url, data) => {
  return http(url, data, "post");
};

uni.request({
  url: "request/login", //仅为示例，并非真实接口地址。
  success: (res) => {},
});

uni.addInterceptor("request", {
  invoke(args) {
    // request 触发前拼接 url
    args.url = args.url.replaceAll(VUE_APP_API_BASE, "");
    args.url = VUE_APP_API_BASE + args.url;
    // if (!args.header["Authorization"]) {
    // 	args.header["Authorization"] = store.store.token
    // }
  },
  success(args) {
    // 请求成功后，修改code值为1
    // args.data.code = 1
  },
  fail(err) {
    // console.log('interceptor-fail', err)
  },
  complete(res) {
    // console.log('interceptor-complete', res)
  },
});

uni.addInterceptor({
  returnValue(args) {
    // 只返回 data 字段
    return args.data;
  },
});
