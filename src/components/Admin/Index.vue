<template lang="html">
  <el-row class="panel">
    <el-row class="top">
      <el-col :span='23' class="panel-top" :push="1">
        <!-- push就是相对定位了 -->
        <!--  offset设置的是margin-lef-->
          <el-col :span="20" style='font-size:26px'>
            <span>AD<i style="color:#20a0ff">MIN</i></span>
          </el-col>
          <el-col :span='4' class='rightbar'>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;font-weight:700">
                更多操作<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided >退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
      </el-col>
    </el-row>
    <!-- 顶部导航结束 -->
    <el-row  class="panel-center">
      <el-col :span="3">
        <el-menu default-active="3" class="el-menu-vertical-demo"  background-color="#324057" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
                    <i class="icon iconfont icon-iconfont-wo" style="vertical-align:moddle"></i>
                    <span slot="title">用户列表</span>
            </el-menu-item>
            <el-submenu index="2">
                <span slot="title" >
                     <i class="icon iconfont icon-xiangmu"></i>
                     <span>项目管理</span>
                </span>
                <el-menu-item-group>
                     <el-menu-item index="2-1"> <i class="icon iconfont icon-liebiao1"></i>项目列表</el-menu-item>
                     <el-menu-item index="2-2"><i class="icon iconfont icon-leimupinleifenleileibie"></i>项目分类</el-menu-item>
                     <el-menu-item index="2-3"><i class="icon iconfont icon-jindu"></i>项目进度</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
           <el-submenu index="3">
                <span slot="title">
                  <i class="icon iconfont icon-api"></i>
                  <span>接口管理</span>
                </span>
              <el-menu-item-group>
                 <el-menu-item index="3-1"><i class="icon iconfont icon-liebiao1"></i>完成接口列表</el-menu-item>
                 <el-menu-item index="3-2"><i class="icon iconfont icon-jiekou2"></i>测试接口列表</el-menu-item>
                 <el-menu-item index="3-3"><i class="icon iconfont icon-fuwujiekou"></i>开发接口列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-col>
        <!-- 左侧导航结束 -->
      <el-col :span='21' class="panel-c-c">
        <el-row>
          <el-col :span='24' class="breadcrumb">
           
          </el-col>
        </el-row>
        <router-view></router-view>
      </el-col>
      <!--  面包屑导航结束-->
    </el-row>
  </el-row>
</template>

<script>
</script>

<style lang="css" scoped>
i {
  font-size: 10px;
  color: #999999;
  margin-left: 0.4rem;
  margin-right: 0.5rem;
}
.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #1f2d3d;
}
.panel-top {
  height: 60px;
  line-height: 60px;
  background: #1f2d3d;
  color: #c0ccda;
}
.panel-top .rightbar {
  text-align: right;
  padding-right: 70px;
}
.panel-center {
  background: #324057;
  position: absolute;
  top: 60px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  /*最外层要hidden*/
  /*这是行，绝对定位之后没有宽度因此必须设置width*/
}
.breadcrumb {
  margin-bottom: 15px;
}
.panel-c-c {
  /*这是列，因为已经有了列的宽度因此无需设置width*/
  background: #f1f2f7;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow-y: scroll;
  /*内层设置滚动*/
  padding: 30px;
}
</style>
