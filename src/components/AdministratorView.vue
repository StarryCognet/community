<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="active">管理员列表</span>
      </div>

      <el-row>
        <el-col :span="24">
          <span>关键字：</span>
          <el-input class="searchInp" placeholder="请输入内容" v-model="query.key"></el-input>
          <el-button type="primary" class="searchbtn" size="small" @click="search">查询</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="btns">
        <el-button @click="dialogVisible = true" type="primary" class="searchbtn" size="small">添加</el-button>
      </el-row>

      <!--  表格 -->

      <BaseTable 
        :tableColumn="tableColumn" 
        :tableData="tableData" 
        :loading="loading"
        @edit="handleClick"
        @delete="handleDelete">
      </BaseTable>

      <!-- 分页 -->
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.page"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="query.psize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
      >
      </el-pagination>
    </el-card>
    <!-- 添加 -->
    <DialogAdministrator :dialogVisible="dialogVisible" @handleCancel="handleCancel"></DialogAdministrator>
  </div>
</template>

<script>
import { list, del } from '../api/administrator'
import BaseTable from '@/components/BaseTable.vue'
import DialogAdministrator from '@/components/DialogAdministrator.vue'
export default {
  name: 'AdministratorView',
  components: {
    BaseTable,
    DialogAdministrator,
  },
  data() {
    return {
      dialogVisible: false,
      loading: true,
      query: {
        page: 1,
        psize: 8,
        key: '',
      },
      counts: 0,
      tableColumn: [
        {
          prop: 'id',
          label: 'ID',
          width: 180,
        },
        {
          prop: 'username',
          label: '登录账号',
          width: 180,
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'tel',
          label: '手机号',
        },
        {
          prop: 'typeName',
          label: '类型',
        },
      ],
      gridData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: '',
        region: '',
      },
      tableData: [],
      multipleSelection: [],
    }
  },

  methods: {
    handleCancel(dialogVisible) {
      this.dialogVisible = dialogVisible
    },
    async getList() {
      this.loading = true
      try {
        let {
          data: { counts, list: listData },
        } = await list(this.query)
        this.counts = counts
        this.tableData = listData
        this.loading = false
        console.log('获取到的数据:', listData)
      } catch (error) {
        console.error('获取数据失败:', error)
      }
    },
    onSubmit() {
      console.log('查询表单提交:', this.formInline)
      // 这里可以添加实际的查询逻辑
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log('选中项发生变化:', val)
    },
    handleClick(row) {
      console.log('编辑操作:', row)
      // 这里可以添加编辑逻辑
    },
    async handleDelete(row) {
      try {
        await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await del({ id: row.id })
        await this.getList()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      } catch (error) {
        if (error === 'cancel') {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        } else {
          console.error('删除失败:', error)
        }
      }
    },
    handleSizeChange(val) {
      this.query.psize = val
      this.query.page = 1 // 重置到第一页
      this.getList()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getList()
    },
    search() {
      this.query.page = 1 // 查询时重置到第一页
      this.getList()
    }
  },
  mounted() {
    this.getList()
  },
}
</script>

<style lang="less" scoped>
@import url(../assets/css/administrator.less);
</style>