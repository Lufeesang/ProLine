<template>
  <div class="footer">
    <div class="banner_footer">
      <router-link to="/" class="banner"><img src="../assets/img/panda.png" alt="" title="ProLine"></router-link>
      <router-link to="/"><span class="title_footer">ProLine</span></router-link>
    </div>
    <ul class="info_footer">
      <li class="item_footer"><a href="#">关于ProLine</a></li>
      <li class="item_footer"><a href="#">新手指南</a></li>
      <li class="item_footer"><a href="#">用户协议</a></li>
      <li class="item_footer"><a href="#">意见反馈</a></li>
      <li class="item_footer"><a href="#">帮助中心</a></li>
      <li class="item_footer"><a href="#">联系我们</a></li>
    </ul>
    <div class="info2_footer">
      <p>首选的IT项目在线交易平台</p>
      <p>服务热线：xxx-xxx-xxxx</p>
    </div>
  </div>
</template>

<script>
    export default{
        data () {
            return {}
        }
    }
</script>

<style scoped>
  @import "../assets/css/footer.css";
</style>
