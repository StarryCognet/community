<template>
  <el-table v-loading="loading" :data="tableData" style="width: 100%" border>
    <template v-for="(item, index) in tableColumn">
      <el-table-column :key="`if-${index}`" v-if="item.slotname" :label="item.label">
        <template slot-scope="scope">
          <div v-if="item.slotname == 'title'">
            <span class="active">{{ scope.row.title }}</span>
          </div>
          <div v-if="item.slotname == 'picture'">
            <img style="width: 100px" :src="'http://api.quanjiu.net/estate/upload/' + scope.row.picture" alt="" />
          </div>
          <div v-if="item.slotname == 'state'">
            <el-switch v-model="scope.row.state" :active-value="1" :inactive-value="2" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
            <span>{{ scope.row.state == 1 ? '开启' : '关团' }}</span>
          </div>

          <div v-if="item.slotname == 'addtime'">
            {{ scope.row.addtime.substr(0, 19) }}
          </div>
          <div v-if="item.slotname == 'logo'">
      <img style="width: 100px;" :src="'http://api.quanjiu.net/estate/upload/' + scope.row.logo" alt="">
     </div>
        </template>
      </el-table-column>

      <el-table-column v-else :key="`else-${index}`" :prop="item.prop" :label="item.label" :width="item.width"> </el-table-column>
    </template>

    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="small" @click="$emit('edit', scope.row)" type="success">修改</el-button>
        <el-button size="small" @click="$emit('delete', scope.row)" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'BaseTable',
  props: {
    tableColumn: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style>
.active {
  color: blue;
}
</style>