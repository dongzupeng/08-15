<template>
  <div class="register">
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
          <van-field v-model="nickname" required clearable label="昵称" placeholder="请输入昵称" error />
          <van-field v-model="phone" required clearable label="手机号" placeholder="请输入手机号" error />

          <van-field
            v-model="password"
            required
            label="密码"
            type="password"
            placeholder="请输入密码"
            error
          />
          <van-field v-model="captcha" required clearable label="验证码" placeholder="请输入验证码" error />
          <div>
             <van-button plain type="info" size="normal" @click="sendcaptcha">发送验证码</van-button>
          </div>

          <van-button type="info" size="large" @click="register">注册</van-button>
        </van-cell-group>
      </div>
    </transition>
  </div>
</template>

<script>
import navigation from "../Common/Navigation";
export default {
  name: "register",
  components: {
    navigation,
  },

  data() {
    return {
      title: "注册账号",
      phone: "",
      password: "",
      captcha: "",
      nickname: "",
    };
  },
  methods:{
      //发送验证码
      sendcaptcha(e){
          if(this.phone ==''){
              this.$dialog.alert({
                  message:'手机号不能为空！',
              })
          }else{
              let num = 60;
              let timer = setInterval(function(){
                  num --;
                  e.target.innerHTML = num + '秒后重新获取';
                  e.target.disabled = 'disabled';
                  if(num ===0){
                      e.target.disabled='';
                      e.target.innerHTML='发送验证码';
                      clearInterval(timer);
                  }
              },1000);

              this.axios.get('/captcha/sent?phone='+this.phone).then(
                  res =>{
                      if(res.data.code ==200){
                          this.$notify({type:'primary',message:'发送验证码成功！'});
                      }
                  }
              )
          }
      },

      //注册
      register(){
          if(this.phone=='' || this.password=='' || this.nickname=='' ||this.captcha==''){
              this.$dialog.alert({
                  message:'请填写完整信息!'
              })
          }else{
              //验证手机号是否通过
              this.axios.get('/cellphone/existence/check?phone='+this.phone).then(
                  res =>{
                      if(res.data.exist == 1 || res.data.exist ==2){
                          this.$dialog.alert({
                              message:'该手机号已经被注册,您可以登录试试！'
                          }).then( ()=>{
                              this.$router.push('/login');
                          })
                      }else{
                        //验证验证码
                        this.axios.get('/captcha/verify?phone='+this.phone 
                                        +'&captcha='+this.captcha
                        ).then( res =>{
                            if(res.data.code == !200){
                                this.$dialog.alert({
                                    message:'验证码错误'
                                });
                            }else{
                                //注册
                                this.axios.get('/register/cellphone?phone='+
                                this.phone+
                                '&password='+
                                this.password+
                                '&captcha='+
                                this.captcha+
                                '&nickname='+
                                this.nickname
                                ).then( res=>{
                                    this.$dialog.alert({
                                        message:'注册账号成功！'
                                    }).then( ()=>{
                                        this.$router.push('/login');
                                    })
                                })
                            }
                        })
                      }
                  }
              )
          }
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
    top: 40%;
    width: 100%;
}
.center{
    margin-left: 30%;
}
button{
    margin-top: 1rem;
    width: 100%;
    border-radius: 10px;
}
span{
    font-size: 1rem;
}
</style>