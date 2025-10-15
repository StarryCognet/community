<template>
  <el-aside width="200px">
    <!-- <ul>
      <li>
        <i class="iconfont icon-qitafeiyong"></i>
        <p>缴费</p>
      </li>
      <li>
        <i class="iconfont icon-renshu"></i>
        <p>居民</p>
      </li>
      <li>
        <i class="iconfont icon-wuyeguanli"></i>
        <p>保修</p>
      </li>
      <li>
        <i class="iconfont icon-complain"></i>
        <p>投诉</p>
      </li>
      <li>
        <i class="iconfont icon-qiyeguanli_yuangongguanli"></i>
        <p>职员</p>
      </li>
      <li>
        <i class="iconfont icon-gonggao"></i>
        <p>公告</p>
      </li>
      <li>
        <i class="iconfont icon-mendian"></i>
        <p>门店</p>
      </li>
      <li>
        <i class="iconfont icon-tupian"></i>
        <p>图片</p>
      </li>
      <li>
        <i class="iconfont icon-guanliyuan1"></i>
        <p>会员</p>
      </li>
    </ul> -->
    <ul>
      <li v-for="(item, index) in getLeftMenu" :key="index">
        <i :class="['iconfont', item.ico]"></i>
        <p>{{ item.name.substr(0, 2) }}</p>
      </li>
    </ul>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AsideView',
  
  data() {
    return {
      tabPosition: 'left',
    }
  },
  methods: {},
  created() { },
      computed: {
        ...mapGetters([
            'getLeftMenu'
        ])
    },
}
</script>

<style lang="less" scoped>
@import url(../assets/css/aside.less);
</style>
