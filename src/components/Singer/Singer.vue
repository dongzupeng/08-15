<template>
  <div id="songer">
    <transition-group
      enter-active-class="animated rollIn"
      leave-active-class="animated rotateInDownRight"
      tag="div"
    >
  
      <div class="wrap" v-for="(item,index) in songer" :key="index">
        <router-link :to="'/singer/'+item.id">
          <img v-lazy="item.img1v1Url" />
        </router-link>
        <div class="describle">
          <div class="title">{{item.name}}</div>
          <div class="album">专辑数：{{item.albumSize}}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "songer",
  data() {
    return {
      songer: [],
    };
  },

  mounted() {
    this.getsonger();
    // window.addEventListener("scroll", this.getHeight); // 添加对于滚动事件的监听
    // this.getMsg(this.index);
  },

  // destroyed() {
  //   localStorage.clear()// 清除本地存储里面的数据
  //   window.removeEventListener('scroll', this.getHeight) // 移除对于滚动事件的监听
  // },

   methods: {
    // getMsg(msg) {
    //   this.index = msg;
    //   document.documentElement.scrollTop = localStorage.getItem("scrollTop"); // 让页面滚动到点击之前菜单项的位置
    // },
    // getHeight() {
    //   const scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   this.scrollTop = scrollTop;
    //   localStorage.setItem("scrollTop", this.scrollTop); // 本地存储一下当前页面滚动的位置
    // },
    getsonger() {
      this.axios.get("/top/artists?offset=0&limit=30").then((res) => {
        console.log("artists==>", res);
        this.songer = res.data.artists;
      });
    },
  },
};
</script>

<style scoped>
#songer {
  margin-top: -2rem;
}
#songer >div{
  margin-bottom: 100px;
}
.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0 1px 5px rgb(164, 236, 255);
  margin-left: 1rem;
  margin-right: 1rem;
}
.wrap:hover {
  background-color: rgb(164, 236, 255);
}
.wrap img {
  width: 9rem;
  margin-left: 1rem;
}
.describle {
  width: 200px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.6;
  text-align: center;
  color: cadetblue;
}
</style>