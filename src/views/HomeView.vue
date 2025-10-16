<template>
  <div class="home">
    <el-container>
      <HeaderView />
      <el-container>
        <AsideView />
        <el-main>
          <!-- <MainView /> -->
           <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from '@/components/HeaderView.vue';
import AsideView from '@/components/AsideView.vue';
// import MainView from '@/components/MainView.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      tabPosition: 'left',
    }
  },
  components: {
    HeaderView,
    AsideView,
    // MainView,
  },
}
</script>

<style lang="less" scoped>
@import url(../assets/css/home.less);
@import url(../assets/iconfont/iconfont.css);
</style>
