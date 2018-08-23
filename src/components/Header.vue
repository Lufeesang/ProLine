<template>
  <div class="header">
    <router-link to="/" class="banner"><img src="../assets/img/panda.png" alt="" title="ProLine"></router-link>
    <span class="title"><router-link to="/">ProLine</router-link></span>

    <ul class="nav_left">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/profind">找项目</router-link></li>
      <li><router-link to="proPost">发布项目</router-link></li>
      <li><router-link to="/userinfo">我的工作</router-link></li>
    </ul>

    <ul class="nav_right">
      <li><a href="#">消息</a></li>
      <li><a href="#">登陆</a></li>
      <li><a href="#">注册</a></li>
    </ul>
  </div>

</template>

<script>
  export default{
        data () {
            return {
                hello:''
            }
        }
    }
</script>

<style>
  @import "../assets/css/navHeader.css";
</style>
