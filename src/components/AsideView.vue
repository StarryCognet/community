<template>
  <el-aside width="200px">
    <ul>
      <li v-for="(item, index) in getLeftMenu" :key="index" @click="handleMenuClick(item)">
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
  methods: {
    handleMenuClick(item) {
      // 根据菜单项的url或者name进行路由跳转
      if (item.url) {
        this.$router.push(item.url)
      } else if (item.name.includes('管理员')) {
        this.$router.push('/administrator')
      } else {
        // 可以根据实际需求添加更多判断逻辑
        console.log('未知的菜单项:', item)
      }
    },
  },
  created() {},
  computed: {
    ...mapGetters(['getLeftMenu']),
  },
}
</script>

<style lang="less" scoped>
@import url(../assets/css/aside.less);
</style>
