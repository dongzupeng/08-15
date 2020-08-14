<template>
    <div class="search">
        <div class="box">
            <navigation :title="title"></navigation>
        </div>

        <form>
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch(value)"
                @cancel="onCancel"
            />
        </form>

        <!-- 展示 -->
        <div class="wrap">
            <van-row type="flex" justify="space-between" v-for="(item,index) in hotsearch" :key="index">
                <van-col span="8">{{index+1}}</van-col>
                <van-col span="8">
                <router-link :to="'/search/'+item.searchWord">
                    <div class="searchWord">{{item.searchWord}}</div>
                    <div class="content">{{item.content}}</div>
                </router-link>
                </van-col>
                <van-col span="8">
                   <img v-lazy="item.iconUrl" alt class="iconurl" />
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import navigation from '../Common/Navigation'
    export default {
        name:"search",
        components:{
            navigation
        },

        data(){
            return{
                title:'热门搜索',
                value:'',
                hotsearch:[]
            }
        },

        methods:{
            //默认搜索
            getdefault(){
                this.axios.get('/search/default').then(
                    res =>{
                        console.log('res==>',res)
                        this.value = res.data.data.showKeyword;
                    }
                )
            },

            gethotsearch(){
                this.axios.get('/search/hot/detail').then(
                    res =>{
                        console.log('res==>',res)
                        this.hotsearch = res.data.data;
                    }
                )
            },

            //搜索
            onSearch(keyword){
                this.$router.push({path:'/search/'+keyword});
            },
            //清除
            onCancel(){
                this.value='';
            }
        },

        mounted(){
            this.gethotsearch();
            this.getdefault();
        }
    }
</script>

<style scoped>
.box{
    border-bottom: 2px solid skyblue;
}
.wrap{
    width: 100%;
    height: 80%;
    margin-bottom: 100px;
}
.van-row--flex{
    margin-top: 1rem;
    text-align: center;
    background: linear-gradient(45deg,skyblue,#fff);
    opacity: .6;
}
.van-col{
    color: gray;
    font-size: 1rem;
}
.van-col--8:nth-child(1) {
  margin-left: -1rem;
  margin-top: 1rem;
}
.van-col .searchWord {
  font-size: 1rem;
  font-weight: 500;
  color: red;
}
.content{
    font-size: .5rem;
    font-weight: 500;
}
.iconurl{
    width: 1.5rem;
}
</style>