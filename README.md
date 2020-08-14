
### 本项目使用的技术栈是:
vue-cil
vue-router
vue
axios
移动端轻量级框架vant



后端接口都是使用的NeteaseCloudMusicApi里面的api


 
 watch:{
    //监听路由变化,解决路由路径不匹配的问题
    '$route':function(newUrl,oldUrl){
      this.appKey = new Date().getTime();
    }
  },