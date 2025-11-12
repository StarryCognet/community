import store from "@/store/index.js";

// 成功
export const success = (title, duration = 1500) => {
  return uni.showToast({
    title,
    duration,
    icon: "success",
  });
};

//失败
export const error = (title, duration = 1500) => {
  return uni.showToast({
    title,
    duration,
    icon: "error",
  });
};

//无图标
export const none = (title, duration = 1500) => {
  return uni.showToast({
    title,
    duration,
    icon: "none",
  });
};

// 公共跳转
const getPagesJsonConfig = () => {
  const appInstance = getApp();
  const pagesConfig = require("@/pages.json"); // 假设 pages.json 在项目根目录下
  const globalData = appInstance.globalData;
  globalData.pagesConfig = pagesConfig; // 保存到 globalData 中
  return globalData;
};
export const go = (url) => {
  let token = store.state.token;
  if (!token) {
    uni.navigateTo({
      url: "/pages/login/login",
    });
    return;
  }

  // 规范化URL路径，确保以/开头且不重复
  let normalizedUrl = url;
  if (!normalizedUrl.startsWith("/")) {
    normalizedUrl = "/" + normalizedUrl;
  }

  let globalData = getPagesJsonConfig();
  let tabarlist = globalData.pagesConfig.default.tabBar.list;
  let tabbar = tabarlist.map((item) => "/" + item.pagePath);

  if (tabbar.includes(normalizedUrl)) {
    uni.switchTab({
      url: normalizedUrl,
    });
  } else {
    uni.navigateTo({
      url: normalizedUrl,
    });
  }
};

export default {
  success,
  error,
  none,
  go,
};
