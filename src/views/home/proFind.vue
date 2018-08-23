<template>
    <div>
       <Header></Header>
       <div class="banner_proList">
         <h2>这些项目都在等你来完成</h2>
       </div>
       <div class="div_pro">
        <div class="content">
          <div class="select_pro">
            <label>
              <span class="info_name_index">项目类别</span>
              <select name="proType" class="input_style_index">
                <option>所有</option>
                <option>软件开发</option>
                <option>后端开发</option>
                <option>前端开发</option>
                <option>APP开发</option>
                <option>微信开发</option>
                <option>小程序开发</option>
                <option>Web网站开发</option>
              </select>
            </label>
          </div>
          <ul class="lists_pro">
            <router-link to="/proInfo">
              <li class="item_pro">
                <p class="state_pro">招募中</p>
                <h3>安卓下电话、短信检测服务软件</h3>
                <p class="price_pro">￥10000-20000</p>
                <span class="tec_pro">c++</span>
                <ul class="ul_status">
                  <li class="status_pro">
                    <p class="status_name">待招聘</p>
                    <p class="status_value">2人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已申请</p>
                    <p class="status_value">5人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已浏览</p>
                    <p class="status_value">66人</p>
                  </li>
                </ul>
                <p class="date_pro">已发布1天</p>
              </li>

            </router-link>
            <router-link to="/proInfo">
              <li class="item_pro">
                <p class="state_pro">招募中</p>
                <h3>安卓下电话、短信检测服务软件</h3>
                <p class="price_pro">￥10000-20000</p>
                <span class="tec_pro">c++</span>
                <ul class="ul_status">
                  <li class="status_pro">
                    <p class="status_name">待招聘</p>
                    <p class="status_value">2人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已申请</p>
                    <p class="status_value">5人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已浏览</p>
                    <p class="status_value">66人</p>
                  </li>
                </ul>
                <p class="date_pro">已发布1天</p>
              </li>

            </router-link>
            <router-link to="/proInfo">
              <li class="item_pro">
                <p class="state_pro">招募中</p>
                <h3>安卓下电话、短信检测服务软件</h3>
                <p class="price_pro">￥10000-20000</p>
                <span class="tec_pro">c++</span>
                <ul class="ul_status">
                  <li class="status_pro">
                    <p class="status_name">待招聘</p>
                    <p class="status_value">2人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已申请</p>
                    <p class="status_value">5人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已浏览</p>
                    <p class="status_value">66人</p>
                  </li>
                </ul>
                <p class="date_pro">已发布1天</p>
              </li>

            </router-link>
            <router-link to="/proInfo">
              <li class="item_pro">
                <p class="state_pro">招募中</p>
                <h3>安卓下电话、短信检测服务软件</h3>
                <p class="price_pro">￥10000-20000</p>
                <span class="tec_pro">c++</span>
                <ul class="ul_status">
                  <li class="status_pro">
                    <p class="status_name">待招聘</p>
                    <p class="status_value">2人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已申请</p>
                    <p class="status_value">5人</p>
                  </li>
                  <li class="status_pro">
                    <p class="status_name">已浏览</p>
                    <p class="status_value">66人</p>
                  </li>
                </ul>
                <p class="date_pro">已发布1天</p>
              </li>

            </router-link>
          </ul>
        </div>
      </div>
        <h2>Test</h2>
        <Footer></Footer>
    </div>
</template>

<script>
    import '../../assets/css/proListBody.css'
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
