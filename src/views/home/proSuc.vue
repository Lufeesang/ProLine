<template>
    <div>
      <Header></Header>
      <div class="pro_success">
        <div class="info_div">
          <img src="../../assets/img/success.png" alt="">
          <h3 class="info1_suc">项目发布成功，管理员正在审核</h3>
          <p class="info2_suc">系统将在24小时内将审核结果通知您，请耐心等待</p>
          <router-link to="propost" class="back_style">查看已发布的项目</router-link>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import '../../assets/css/proSuc.css'
  import Header from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
    export default{
        data () {
            return {

            }
        },
        components:{
            Header,
            Footer
        }
    }
</script>
