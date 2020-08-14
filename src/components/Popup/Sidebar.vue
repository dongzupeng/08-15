<template>
    <div id="sidebar">
        <div class="header">

            <div class="img">
                <img ref="img" :src="user.avatarUrl" alt="">
            </div>

            <div ref="name" class="name">{{user.signature}}</div>
        </div>
        <div ref="nickname" class="nickname">{{user.nickname}}</div>

        <div class="icon">
            <div class="added" @click="nohave">
                <van-icon name="comment-o" />
                <div class="iconname">我的消息</div>
            </div>

            <div class="added" @click="nohave">
               <van-icon name="friends-o" />
                <div class="iconname">我的好友</div>
            </div>

            <div class="added" @click="nohave">
                <van-icon name="music-o" />
                <div class="iconname">听歌识曲</div>
            </div>

            <div class="added" @click="nohave">
                <van-icon name="star-o" />
                <div class="iconname">个性装扮</div>
            </div>
        </div>

        <div class="nav">
            <router-link to="/user">
                <div class="user">用户信息</div>
            </router-link>
            <div class="tool" @click="nohave">工具</div>
            <div class="scan" @click="nohave">扫一扫</div>
            <router-link to="/login">
                <div class="login">切换账号</div>
            </router-link>
            <router-link to="">
                <div class="about">关于我们</div>
            </router-link>
            <div class="setting" @click="nohave">设置</div>
        </div>

        <footer>
            <div class="imgicon" @click="signout">
                <i class="iconfont">&#xe61b;</i>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'sidebar',
        
        data(){
            return{
                user:[]
            }
        },

        inject:['reload'],
        methods:{
            nohave(){
                this.$toast('暂未开发');
            },

            //退出
            signout(){
                this.$dialog.confirm({
                    message:'您确定要退出当前账号吗?',
                    confirmButtonText: "退出", //改变确认按钮上显示的文字
                    cancelButtonText: "取消" //改变取消按钮上显示的文字
                }).then( ()=>{
                    sessionStorage.removeItem('uid');
                    this.reload();
                    this.$router.push('/login');
                }).catch( ()=>{
                    console.log(err)
                });
            },

            //获取用户信息
            getuserInfo(){
                if(!JSON.parse(sessionStorage.getItem('uid'))){
                    //默认，没有登录时
                    this.$refs.img.src = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2740682934,631914803&fm=26&gp=0.jpg';
                    this.$refs.name.innerHTML='未登录！';
                    this.$notify({
                        type:'danger',
                        message:'请登录再试试!'
                    })
                }else{
                    if(this.$store.state.uid==''){
                        this.$store.state.uid=JSON.parse(sessionStorage.getItem('uid'));
                    }
                    //去vuex的id获取信息
                    this.axios.get('/user/detail?uid='+this.$store.state.uid).then(
                        res =>{
                            this.user = res.data.profile;
                        }
                    )
                }
            }

            
        },

        mounted(){
            this.getuserInfo();
        }
    }
</script>

<style scoped>
#sidebar{
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}
.img img{
    display: block;
    margin: 0 auto;
    width: 4rem;
    border-radius: 50%;
}
.name{
    font-size: 0.8rem;
    text-indent: 2rem;
    margin-left: 0.4rem;
    color: rgb(164,236,255);
}
.nickname{
    width: 80px;
    margin: 0 auto;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-weight: 500;
    
}
.icon {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin-top: 1rem;
}
.added .van-icon {
    font-size: 1.8rem;
    padding: 0px 10px;
    color: rgb(164,236,255);
    opacity: 0.9;
}
.iconname{
    font-size: 0.2rem;
    text-align: center;
}

.nav{
    margin-top: 1.8rem;

}
.nav div{
    width: 100%;
    height: 2rem;
    background: #e8e8e8;
    text-align: center;
    margin-top: 10%;
    border-radius: 1rem;
    line-height: 2rem;
    color: gray;
    font-weight: bold;
}
footer{
    position: fixed;
    bottom: 0;
    left: 40%;
}
.iconfont {
    font-size: 3rem;
    color: gray;
}
</style>