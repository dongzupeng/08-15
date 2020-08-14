<template>
    <div id="appheader">
        <div class="flex">
            <div class="icon">
                <van-cell @click="showPopup">
                   <van-icon name="wap-nav" />
                </van-cell>
                <van-popup v-model="show" round position="left"
                 :style="{width:'70%',height:'100%'}">
                   <sidebar/>
                </van-popup>
            </div>
            <div class="title">My music</div>

            <div class="icon">
                <router-link to="/search">
                    <van-icon name="search" />
                </router-link>
            </div>
        </div>

        <div class="wrap">
            <van-row>
                <router-link to="/sheet" tag="div">
                    <van-col>推荐</van-col>
                </router-link>

                <router-link to="/ranking" tag="div">
                    <van-col>排行</van-col>
                </router-link>

                <router-link to="/singer" tag="div">
                    <van-col>歌手</van-col>
                </router-link>

            </van-row>
        </div>

        <div class="cover">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import sidebar from './Popup/Sidebar'
    export default {
        name:'appheader',
        components:{
            sidebar
        },

        data(){
            return{
                color:'#fff',
                active:1,
                show:false,
                
            }
        },

        methods:{
            showPopup(){
                this.show=true;
                
            }
        }
    }
</script>

<style scoped>
.flex{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(164,236,255);
}
.van-col{
    font-size: 1rem;
}
.icon .van-cell{
    background-color: rgb(164,236,255);
}
.icon i {
    font-size: 2rem;
    cursor: pointer;
}
.title{
   font-weight: 600;
   color: #fff;
}
.wrap{
    width: 100%;
    background: rgb(164,236,255);
    font-size: 0.8rem;
    height: 2rem;
}
.van-row{
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #fff;
    
}
.van-row div {
    margin-left: 1.5rem;
}
.cover{
    height: 100vh;
    width: 100%;
    margin-top: 3rem;
}

</style>