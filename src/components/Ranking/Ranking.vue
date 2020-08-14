<template>
    <div id="ranking">
        <div class="content">
            <transition-group
            enter-active-class="animated zoomInRight"
            leave-active-class="animated rotateInDownRight"
            delay-2s
            tag="div"
            >
                <div class="wrap" v-for="(item,index) in rankarr" :key="index">
                    <router-link :to="'/ranking/' +item.id">
                        <div class="img">
                            <img v-lazy="item.coverImgUrl">
                            <div class="title">{{item.updateFrequency}}</div>
                        </div>
                    </router-link>
                </div>

            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ranking",
        data(){
            return{
                rankarr:[]
            }
        },

        methods:{
            //所有榜单内容
            getDetail(){
                this.axios.get('/toplist/detail').then(
                    res =>{
                        this.rankarr=res.data.list;
                        console.log('toplist==>',res);
                    }
                )
            },
        },

        activated(){
            this.getDetail();
        }
    }
</script>

<style scoped>
#ranking{
    width: 100%;
    height: 100vh;
    
}
.content > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -2rem;
}
.wrap{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.img{
    position: relative;
    flex: 5;
}
.img img {
    width: 9rem;
    margin-left: 22px;
}
.title{
    font-size: 14px;
    color: #fff;
    text-align: center;
    position: absolute;
    left: 3.8rem;
    bottom: 0.6rem;
}
</style>