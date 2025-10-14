<template>
  <div class="home">
    <el-container>
      <HeaderView />
      <el-container>
        <AsideView />
        <el-main>
          <div class="left">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
              </div>
              <div class="nr">
                <div>
                  <p>
                    房间总数:
                    <span>24</span>
                  </p>
                  <p>
                    居民总数:
                    <span>390</span>
                  </p>
                  <p>
                    商店总数:
                    <span>14</span>
                  </p>
                </div>
                <div>
                  <p>
                    保修总数:
                    <span>1772</span>
                  </p>
                  <p>
                    投诉总数:
                    <span>165</span>
                  </p>
                </div>
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
              </div>
              <div class="nr">
                <div class="bor">
                  <p>
                    新增修理:
                    <span>0</span>
                    处
                  </p>
                  <p>
                    未修理处:
                    <span>1699</span>
                    处
                  </p>
                  <p>
                    新增投诉:
                    <span>0</span>
                    处
                  </p>
                  <p>
                    未处理投诉处:
                    <span>126</span>
                    处
                  </p>
                </div>
              </div>
            </el-card>
            <div class="ins-top">
              <div class="top-title" style="position: relative">
                <h2>数据显示</h2>
                <div><img src="../assets/images/shuju1.png" alt="" />保修总数 <img src="../assets/images/shuju2.png" alt="" />投诉总数</div>
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px; margin-right: 25px">
                  <el-radio-button label="right">最近30天</el-radio-button>
                  <el-radio-button label="bottom">最近半年</el-radio-button>
                  <el-radio-button label="left">本年</el-radio-button>
                </el-radio-group>
                <i style="position: absolute; right: 0" class="iconfont icon-xiazai"></i>
              </div>

              <el-tabs :tab-position="tabPosition">
                <!-- <el-tab-pane label="用户管理">用户1管理</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
                <img src="../assets/images/shuju.png" alt="" />
              </el-tabs>
            </div>
          </div>
          <div class="right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
              </div>
              <div v-for="o in 5" :key="o" class="text item">
                {{ o }}
                <span><a href="#">橡树湾 南区 12号楼1单元</a>:单元门禁系统无法正常关闭，存在.</span>
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
              </div>
              <div v-for="o in 5" :key="o" class="text item">
                {{ o }}
                <span><a href="#">橡树湾 南区 12号楼1单元</a>:单元门禁系统无法正常关闭，存在.</span>
              </div>
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from '@/components/HeaderView.vue';
import AsideView from '@/components/AsideView.vue';

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
  },
}
</script>

<style lang="less" scoped>
@import url(../assets/css/home.less);
@import url(../assets/iconfont/iconfont.css);
</style>
