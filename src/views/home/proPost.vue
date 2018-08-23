<template xmlns:v="http://www.w3.org/1999/xhtml">
    <div>
       <Header></Header>
       <div class="banner_proPost"></div>
       <div class="form_pro">
        <div>
          <label>
            <span class="info_name">项目名称</span><span class="star">*</span>
            <input type="text" class="input_style" placeholder="输入酷炫的项目名称">
          </label>
        </div>
        <div>
          <label>
            <span class="info_name">项目类型</span><span class="star">*</span>
            <select name="proType" class="input_style">
              <option>选择项目类型</option>
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
        <div>
          <label>
            <span class="info_name">相关技能</span><span class="star">*</span>
            <select name="proType" class="input_style">
              <option>选择相关技能</option>
              <option>Vue</option>
              <option>CSS3</option>
              <option>HTML5</option>
              <option>React</option>
              <option>jQuery</option>
              <option>NodeJS</option>
              <option>Grunt.js</option>
              <option>Bootstrap</option>
              <option>JavaScript</option>
              <option>AngularJS</option>
              <option>ReactNative</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <span class="info_name">项目描述</span><span class="star">*</span>
            <textarea  class="textarea_style" placeholder="描述项目的开发计划、主要功能、人员要求、交付要求以及可参考的产品"></textarea>
          </label>
        </div>
        <div>
          <label>
            <span class="info_name">项目预算</span><span class="star">*</span>
            <input type="text" class="input_style" placeholder="输入项目的预算成本">
          </label>
        </div>
        <div>
          <label>
            <span class="info_name">项目周期</span><span class="star">*</span>
            <input type="text" class="input_style" placeholder="输入项目的时间周期">
          </label>
        </div>
        <input type="submit" name="submit" value="发布项目" class="submit_pro" @click="postPro">
      </div>
       <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../components/Header.vue';
    import Footer from '../../components/Footer.vue';
    import '../../assets/css/proPost.css'
    export default{
        data () {
            return {

            }
        },
      components:{
            Header,
            Footer
      },
      methods:{
            postPro(){
                this.$router.push('/prosuc')
            }
      }
    }
</script>
