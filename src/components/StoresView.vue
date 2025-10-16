<template>
  <!-- <div class="container" style="width: 100%; height: 100%;"> -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="active">门店列表</span>
    </div>

    <el-row>
      <el-col :span="24">
        <span>关键字：</span>
        <el-input class="searchInp" placeholder="请输入内容" v-model="query.key"></el-input>
        <el-button type="primary" class="searchbtn" size="small" @click="search">查询</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="btns">
      <el-button type="primary" class="searchbtn" size="small">添加</el-button>
      <el-button type="primary" class="searchbtn ico" size="small">批量删除</el-button>

    </el-row>

    <!--  表格 -->

    <BaseTable :tableColumn="tableColumn" :tableData="tableData" :loading="loading">
      <template #options="{ row }">
        <el-button size="small" @click="handleClick(row)" type="success">修改</el-button>
        <el-button size="small" @click="handleDelete(row)" type="danger">删除</el-button>
      </template>
    </BaseTable>

    <!-- 分页 -->
    <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="query.page" :page-sizes="[5, 10, 20, 50]" :page-size="query.psize"
      layout="total, sizes, prev, pager, next, jumper" :total="counts">
    </el-pagination>
  </el-card>
  <!-- </div> -->
</template>

<script>
import { list, del } from "../api/stores";
import BaseTable from '@/components/BaseTable.vue'
export default {
  name: "NewsView",
  components: {
    BaseTable,
  },
  data() {
    return {
      loading: true,
      query: {
        page: 1,
        psize: 5,
        key: "",
        type: "",
      },
      counts: 0,
      tableColumn: [
        {
          prop: "id",
          label: "ID",
          width: 180,
        },
        {
          prop: "name",
          label: "门店",
          width: 180,

        },
        {
          prop: "address",
          label: "地址",
        },
        {
          prop: "logo",
          label: "门店logo",
          slotname: "logo"

        },
        {
          prop: "services",
          label: "服务范围",
        },
        {
          prop: "username",
          label: "店主",

        },
        {
          prop: "tel",
          label: "联系电话",
        },
          {
          prop: "endTime",
          label: "营业时间",
        },
        {
          prop: "options",
          label: "操作",
          slotname: 'options'
        },

      ],
      gridData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: "",
        region: "",
      },
      tableData: [],
      multipleSelection: [],
    };
  },

  methods: {
    handleDelete(row) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await del({ id: row.id })
        await this.getList()
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      console.log("row:", row);
    },

    async getList() {
      this.loading = true;
      try {
        let { data: { counts, list: listData } } = await list(this.query);
        this.counts = counts;
        this.tableData = listData;
        this.loading = false;
        console.log('获取到的数据:', listData);
      } catch (error) {
        console.error('获取数据失败:', error);
      }
    },
    onSubmit() {
      console.log("查询表单提交:", this.formInline);
      // 这里可以添加实际的查询逻辑
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("选中项发生变化:", val);
    },
    handleEdit(index, row) {
      console.log("编辑操作:", index, row);
      // 这里可以添加编辑逻辑
    },
    handleSizeChange(val) {
      this.query.psize = val;
      this.query.page = 1; // 重置到第一页
      this.getList();

    },
    handleCurrentChange(val) {
      this.query.page = val;
      this.getList();
    },
    search() {
      this.query.page = 1;
      this.getList();
    },
  },

  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
@import url(../assets/css/search.less);
.ico{
    background-color: red;
}
</style>