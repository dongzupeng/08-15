<template>
    <div class="display">
        <div class="box">
            <navigation :title="title"></navigation>
        </div>

        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch(value)"
                @cancel="onCancel"
            />
        </form>

        <div class="title">
            <span class="danqu">单曲</span>
        </div>

        <!-- 展示 -->
        <div class="wrap" v-for="(item,index) in songarr" :key="index">
            <div class="searchsong" @click="play(item.id)">
                <div class="name">{{item.name}}</div>
                <div class="songer">{{item.artists[0].name}}--{{item.album.name}}</div>
            </div>

            <div class="details">
                <van-icon name="ellipsis"  class="ellipsis"/>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from '../Common/Navigation'
    export default {
        name:"display",
        components:{
            navigation
        },

        data(){
            return{
                title:'搜索',
                songarr:[],
                value:''
            }
        },
        inject:['iffooter','playaudio'],
        methods:{
            //从其余地方搜索的结果
            getsongs(value){
                this.axios.get('/search?keywords='+value).then(
                    res =>{
                        this.songarr = res.data.result.songs;
                    }
                )
            },

            //搜索结果
            onSearch(value){
                if(this.value == ''){
                    console.log('null')
                }else{
                    this.axios.get('/search?keywords=' + value).then(
                        res =>{
                            this.songarr = res.data.result.songs;
                        }
                    )
                }
            },
            onCancel(){
                this.value='';
            },
            goreturn(){
                this.$router.go(-1);
            },
            //音乐url
            getsongurl(id){
                this.axios.get('/song/url?id='+id).then(
                    res =>{
                        this.$store.state.src = res.data.data[0].url;
                    }
                )
            },

            play(id){
                this.getsongurl(id);
                this.playaudio(id);
            }
        },

        mounted(){
            this.getsongs(this.$route.params.value);
        }
    }
</script>

<style scoped>
.box{
    border-bottom: 2px solid skyblue;
}
.title{
    font-weight: bold;
    width: 100%;
    font-size: 1rem;
    border-bottom: 2px solid #ccc;
}
.danqu{
    margin: 2rem;
    text-shadow: 0 5px 5px #aaa;
}

/* 列表 */
.wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}
.wrap:hover{
    background:linear-gradient(45deg,#fff,skyblue);
}
.searchsong{
    margin: 1rem;
    flex: 8;
}
.name{
    font-size: .8rem;
    font-weight: 300;
    color: skyblue;
}
.songer{
    font-size: .2rem;
    opacity: .5;
}
.details{
    font-size: 1rem;
    flex: 2;
    color: tomato;
}
.ellipsis{
    margin: 0 auto;
}
</style>