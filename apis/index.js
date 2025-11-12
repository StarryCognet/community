import { get, post } from "../utils/request.js";

// 发送验证码
export const sendcode = (data) => post("/api/member/sendcode", data);

//验证码登录
export const loginByCode = (data) => post("/api/member/loginByCode", data);

//密码登录
export const login = (data) => post("/api/member/login", data);

//会员注册手机号验证
export const regByCode = (data) => post("/api/member/regByCode", data);

//会员注册
export const reg = (data) => post("/api/member/reg", data);

//获取楼栋信息
export const building = (data) => get("api/user/building/list", data);
//获取居民类型
export const userinfotypelist = (data) => get("/api/user/userinfotype/list", data);
//获取房间列表
export const houseslist = (data) => get("/api/user/houses/list", data);
//添加居民
export const userinfo = (data) => post("/api/user/userinfo/add", data);
// 搜索单条公告
export const newsget = (data) => get("/api/user/news/get", data);

export const newsList = (data) => get("/api/user/news/list", data);

// 获取门店列表
export const storesList = (data) => get("/api/user/stores/list", data);
// 门店的经营类型
export const storesType = (data) => get("/api/user/storeservices/list", data);
