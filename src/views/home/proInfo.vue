<template>
    <div>
       <Header></Header>
      <div class="info_pro">
        <div class="banner_infoPro">
          <div class="content_body">
            <a href="#"><span class="banner_title1">项目列表</span></a>
            <span class="direction_right">&gt;</span>
            <span class="banner_title2">项目信息</span>
          </div>
          <div class="content_infoPro">
            <div class="content_body">
              <div >
                <h2 class="name_pro">安卓下电话、短信检测服务软件</h2> <span class="state_pro_info">招募中</span>
                <div class="clearfix"></div>
              </div>
              <ul class="lists_info">
                <li class="item_info">
                  <span class="icon_info"><img src="../../assets/img/name_pro.png" alt=""></span>
                  <span class="title_info">项目类型:</span>
                  <span class="value_info">软件</span>
                </li>
                <li class="item_info">
                  <span class="icon_info"><img src="../../assets/img/company_pro.png" alt=""></span>
                  <span class="title_info">项目方名:</span>
                  <span class="value_info">上海欧仙文化传播有限公司</span>
                </li>
                <li class="item_info">
                  <span class="icon_info"><img src="../../assets/img/time_pro.png" alt=""></span>
                  <span class="title_info">发布时间:</span>
                  <span class="value_info">2018-04-17 18:53:45</span>
                </li>
                <li class="item_info">
                  <span class="icon_info"><img src="../../assets/img/type_pro.png" alt=""></span>
                  <span class="title_info">所需技术:</span>
                  <span class="value_info">c++</span>
                </li>
              </ul>
              <div class="clearfix"></div>
              <p class="protrayTitle_pro">详细描述</p>
              <p class="protray_pro">要求：1、我们已有c4d的模型及动画，需要场景的灯光及材质设置及渲染；<br>
                2、熟练Maya或c4d的渲染</p>
              <div class="other_info">
                <p class="other_title_info">项目预算</p>
                <p class="other_value_info">￥10000-20000</p>
                <p class="other_title_info">时间周期</p>
                <p class="other_value_info">30天</p>
                <a href="#" class="send_req">申请开发项目</a>
                <ul class="status_infoPro">
                  <li class="item_status">
                    <p class="status_name">待招聘</p>
                    <p class="status_value">2人</p>
                  </li>
                  <li class="item_status">
                    <p class="status_name">已申请</p>
                    <p class="status_value">6人</p>
                  </li>
                  <li class="item_status">
                    <p class="status_name">已浏览</p>
                    <p class="status_value">215人</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
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

<style scoped>
  @import "../../assets/css/proInfo.css";
</style>
