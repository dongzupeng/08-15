<template>
  <div class="hotsong">
    <h4>推荐歌曲</h4>
    <transition-group
      enter-active-class="animated rotateInUpLeft"
      leave-active-class="animated rotateInDownRight"
      tag="div"
    >
      <div class="wrap" v-for="(item,index) in songs" :key="index">
        <div class="index">{{index+1}}</div>
        <div class="song" @click="play(item.id,songs)">
          <div class="name">{{item.name}}</div>
          <div class="singer">{{item.ar[0].name}}--{{item.al.name}}</div>
        </div>
        <div class="menu">
          <van-icon name="more-o" class="more" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
    name:'hotsong',
    data(){
        return{
            songs:[]
        }
    },

    props:['gid'],

    inject:['iffooter','playaudio'],

    methods:{
        getsongs(id){
            this.axios.get('/artists?id='+id).then(
                res =>{
                    console.log('hotSongs==>',res);
                    this.songs = res.data.hotSongs;
                }
            )
        },

        //音乐url
        getsongurl(id){
            this.axios.get('/song/url?id='+id).then(
                res =>{
                    this.$store.state.src = res.data.data[0].url;
                }
            )
        },

        play(id,songs){
            this.getsongurl(id);
            this.playaudio(id,songs);
        }
    },

    mounted(){
        this.getsongs(this.gid);
    }
};
</script>

<style scoped>
#hotsong{
    margin-left: 1rem;
    margin-bottom: 100px;
}
.wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 4rem;
    border-radius: 5px;
    border-bottom: 1px solid #ccc;
}
.wrap:hover{
    background: linear-gradient(45deg,#f56,skyblue);
}
.index{
    margin-left: -20px;
    color: skyblue;
    font-size: 1rem;
}
.song{
    width: 8rem;
    text-align: center;
}
.name{
    text-align: center;
    margin-left: -20px;
    width: 200px;
    color: black;
    font-size: 12px;
    font-weight: 500;
    left: 100px;
}
.singer{
    margin-left: -20px;
    width: 200px;
    text-align: center;
    font-size: .2rem;
    color:skyblue;
}
.more{
    width: 20px;
    right: -30px;
    
}
</style>