<template>
    <div class="user">
        <navigation :title="message" :search="search"></navigation>
        <div class="gedan">收藏的歌单</div>
        <div class="user" v-for="(item,index) in userarr" :key="index">
            <div class="wrap">
                <router-link :to="'/sheet/'+item.id">
                    <div class="img">
                        <img v-lazy="item.coverImgUrl">
                    </div>
                </router-link>
                <div class="message">
                    <p>{{item.name}}</p>
                    <p>播放：{{item.playCount | count}}</p>
                    <p>创建者：{{item.creator.nickname}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from '../Common/Navigation'
    export default {
        name:'user',
        components:{
            navigation
        },
        data(){
            return{
                message:'个人信息',
                search:'',
                userarr:[],
            }
        },

        filters:{
            count(value){
                if(value > 10000){
                    return Math.floor(value/10000)+'万';
                }else{
                    return value;
                }
            }
        },

        computed:{
            //获取用户信息
            getuserInfo(){
                if(!sessionStorage.getItem('uid')){
                    this.$dialog.alert({
                        message:'您还没有登录,请登录！'
                    }).then( () =>{
                        this.$router.push('/login');
                    })
                }
                if(this.$store.state.uid == ''){
                    this.$store.state.uid = JSON.parse(sessionStorage.getItem('uid'));
                }
                this.axios.get('/user/playlist?uid='+this.$store.state.uid).then(
                    res =>{
                        this.userarr = res.data.playlist;
                        console.log(res)
                    }
                )
            }
        },

        mounted(){
            this.getuserInfo;
        }
    }
</script>

<style scoped>
.gedan{
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem;
}
.user{
    margin: 1rem;
}
.wrap{
    display: flex;
}
.img img{
    width: 9rem;
    margin-right: .5rem;
}

p{
    display: block;
    width: 150px;
    margin: 30px auto;
    font-size: .8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>