// 页面路径：store/index.js
import Vue from "vue";
import Vuex from "vuex";
import VuexAlong from "vuex-along";

Vue.use(Vuex);
Vue.use(VuexAlong);

const store = new Vuex.Store({
  state: {
    // 初始状态
    buildingState: 0,
    buildings: null,
    member: {},
    token: null,
    buildingData: [],
    selecthouse: null,
    selecthouseId: null,
  },
  mutations: {
    setbuildingState(state, State) {
      state.buildingState = State;
    },
    setbuildings(state, buildings) {
      state.buildings = buildings;
    },
    setmember(state, member) {
      state.member = member;
    },
    settoken(state, token) {
      state.token = token;
    },
    setbuildingData(state, buildingData) {
      state.buildingData = buildingData;
    },
    setselecthouse(state, selecthouse) {
      state.selecthouse = selecthouse;
    },
    setselecthouseid(state, selecthouseid) {
      state.selecthouseId = selecthouseid;
    },
  },
  plugins: [
    VuexAlong({
      // vuex-along配置
      name: "vuex-along", // 存放在localStorage或sessionStorage中的key名
      local: {
        // 需要持久化的状态，默认全部持久化
        token: true,
        member: true,
        buildingData: true,
        selecthouse: true,
        selecthouseId: true,
      },
      session: false, // 不使用sessionStorage
    }),
  ],
});

export default store;
