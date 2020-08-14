<template>
  <div class="login">
    <navigation :title="title"></navigation>

    <div class="img">
       <img src="../../assets/img.jpg" alt="">
    </div>

    <transition
      appear
      enter-active-class="animated lightSpeedIn"
      leave-active-class="animated rotateInUpLeft"
      :duration="3000"
    >
      <div class="wrap">
        <van-cell-group>
          <van-field 
          v-model="phone" 
          required clearable label="手机号"
          placeholder="请输入手机号" 
          error
          />
          
          <van-field 
          v-model="password" 
          required 
          label="密码"
          type="password"
          placeholder="请输入密码" 
          error
          />

          <van-button type="info" size="large" @click="userlogin">登录</van-button>
          <van-button type="info" size="large" @click="register">注册</van-button>
          
        </van-cell-group>
      </div>
    </transition>
  </div>
</template>

<script>
import navigation from "../Common/Navigation";
export default {
  name: "login",
  components: {
    navigation,
  },
  data() {
    return {
      title: "登录账号",
      phone: "",
      password: "",
    };
  },

  methods:{
      userlogin(){
          if(this.phone =='' || this.password ==''){
              this.$dialog.alert({
                  message:'手机号或者密码不能为空！'
              });
          }else{
              this.axios.get('/login/cellphone?phone='
              +this.phone+'&password='+this.password).then(
                  res =>{
                      this.$store.state.uid = res.data.account.id;

                      //存入sessionStorage
                      let id = JSON.stringify(res.data.account.id);
                      sessionStorage.setItem('uid',id);
                      this.$dialog.alert({
                          message:'登录成功！'
                      }).then( ()=>{
                          this.$router.push('/sheet');
                      })
                  }
              )
          }
      },

      register(){
          this.$router.push('/register');
      }
  }
};
</script>

<style scoped>

img{
    border-radius: 50%;
    display: block;
    margin: 50px auto;
    width: 100px;
    height: 100px;
    z-index: 999;
}

.wrap{
    position: absolute;
    top: 50%;
    width: 100%;
}
button{
    display: block;
    margin: 20px auto;
    width: 100%;
    border-radius: 10px;
}
span{
    font-size: 1rem;
}

</style>