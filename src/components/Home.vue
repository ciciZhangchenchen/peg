<template>
  <el-container>
      <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">导航一</span></template>
          <el-menu-item-group>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">Navigator Two</span></template>
          <el-menu-item-group>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i><span slot="title">Navigator Three</span></template>
          <el-menu-item-group>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
  @import "../sass/var";
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: $--color-primary;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px
  }
  .el-menu {
    height: 100%;
    background-color: $--color-primary;
    color: $--color-white;
  }
  .el-radio-button {

  }
  .el-aside {
    & .el-icon-message {
      /*color: red;*/
    }
  }
  .el-submenu__title:hover {
    background-color: $--color-primary-hover;
  }
  .el-submenu__title {
    color: $--color-white;
  }
  .el-menu-item {
    color: $--color-white;
  }
  .el-menu-item.is-active {
    color: $--color-white;
  }
  .el-submenu__title i {
    color: $--color-white;
  }
</style>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item),
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
