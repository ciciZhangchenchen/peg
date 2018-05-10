<template>
    <el-container>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
        <div class="hello">
          <div class="title" v-if="!isCollapse">后台管理系统</div>
          <div class="user">
            <div class="picture" :class="{ small: isCollapse }">
              <img src="../assets/default-avatar.png">
            </div>
            <div class="user-name" v-if="!isCollapse">布布</div>
          </div>
        </div>
        <el-submenu index="1">
          <template slot="title"><i class="iconpet-homepage" style="margin: 0 10px"></i><span slot="title">商城</span></template>
          <el-menu-item-group>
            <el-menu-item index="Product">商品管理</el-menu-item>
            <el-menu-item index="1-3">商品自定义分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="iconpet-order" style="margin: 0 10px"></i><span slot="title">订单管理</span></template>
          <el-menu-item-group>
            <el-menu-item index="2-1">商户端下单</el-menu-item>
            <el-menu-item index="2-2">历史订单查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="iconpet-businesscard" style="margin: 0 10px"></i><span slot="title">预约管理</span></template>
          <el-menu-item-group>
            <el-menu-item index="3-1">预约列表</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="iconpet-people" style="margin: 0 10px"></i><span slot="title">会员管理</span></template>
          <el-menu-item-group>
            <el-menu-item index="Member">会员列表</el-menu-item>
            <el-menu-item index="4-2">自定义会员积分抵扣规则</el-menu-item>
            <el-menu-item index="4-3">Option 3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="iconpet-headlines" style="margin: 0 10px"></i><span slot="title">报表</span></template>
          <el-menu-item-group>
            <el-menu-item index="5-1">营业额查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="iconpet-group" style="margin: 0 10px"></i><span slot="title">多账号管理</span></template>
          <el-menu-item-group>
            <el-menu-item index="6-1">多账号管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="iconpet-group" style="margin: 0 10px"></i><span slot="title">会员日</span></template>
          <el-menu-item-group>
            <el-menu-item index="6-1">会员日</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-container>
        <el-header>
          <div class="header-left">
            <div class="btn-collapse" @click="isCollapse = !isCollapse">
              <span class="close iconpet-other" v-if="isCollapse"></span>
              <span class="open iconpet-switch" v-if="!isCollapse"></span>
            </div>
          </div>
          <div class="header-right" style="padding-top: 22px">
            <el-dropdown>
              <i class="el-icon-setting"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
export default {
  name: 'home',
  data () {
    return {
      isCollapse: false
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

<style lang="scss">
  @import "../sass/home.scss";
</style>
