<template>
  <el-header>
    <img class="logo" src="../assets/images/logo.jpg" alt="" />
    <i class="iconfont icon-shouye">首页</i>
    <p>admin,上午好！今天你看上去好精神哦！</p>
    <div class="top-r">
      {{ getTopMenu }}
      <el-dropdown trigger="click">
        <i class="iconfont icon-shezhi">设置</i>
        <!-- <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> </span> -->
        <el-dropdown-menu slot="dropdown" style="padding: 10px">
          <el-dropdown-item v-for="(item,index) in getTopMenu" :key="index" icon="el-icon-plus">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="iconfont icon-tuichudenglu1">退出登录</i>
    </div>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  data() {
    return {}
  },
  methods: {},
  created() {
    // const topMenu = 
  },
  computed: {
    ...mapGetters(['getTopMenu'])

  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/header.less);
</style>
