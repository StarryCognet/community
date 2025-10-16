<template>
  <div class="container" style="width: 100%; height: 100%;">
    <el-card class="box-card" style="height: 100%;">
      <div slot="header" class="clearfix">
        <span class="active">管理员列表</span>
      </div>

      <el-row>
        <el-col :span="24">
          <span>关键字：</span>
          <el-input class="searchInp" placeholder="请输入内容"></el-input>
          <el-button type="primary" class="searchbtn" size="small">查询</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="btns">
        <el-button type="primary" class="searchbtn" size="small">添加</el-button>
      </el-row>

      <!--  表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="username" label="登录账号" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="tel" label="手机号"> </el-table-column>
        <el-table-column prop="typeName" label="类型"> </el-table-column>
        
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="success">修改</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.page"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { list } from "../api/administrator";
export default {
  name: "AdministratorView",
  data() {
    return {
      query: {
        page: 2,
        psize: 5,
        key: "",
      },
      counts: 0,
      // currentPage4:4,
      gridData: [
      ],
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
      tableData: [
       
      ],
      multipleSelection: [],
    };
  },

  methods: {
    async getList() {
      let {data:{counts,list:listData}} = await list(this.query);
      this.counts = counts;
      this.tableData = listData;
      console.log(listData);
      
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
    handleDelete(index, row) {
      console.log("删除操作:", index, row);
      // 这里可以添加删除逻辑
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.query.page = val;
      this.getList();
    },
  },

  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
@import url(../assets/css/administrator.less);
</style>
