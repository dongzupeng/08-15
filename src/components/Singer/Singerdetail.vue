<template>
  <div id="songerdetail">
    <div class="loading" v-show="isloading">
      <van-loading type="spinner" color="#1989fa" />
      <div class="jiazai">加载中</div>
    </div>
    <div class="show" v-show="isshow">
      <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />

      <div class="gedan">
        <img v-lazy="details.img1v1Url" />
      </div>
      <div class="title">{{details.name}}</div>

      <div class="wrap">
        <van-tabs animated swipeable>
          <van-tab title="主页">
            <resolve />
          </van-tab>
          <van-tab title="歌曲">
            <hotsong :gid="gid" />
          </van-tab>
          <van-tab title="专辑">
            <album :gid="gid" />
          </van-tab>
          <van-tab title="视频">
            <mv :gid="gid" />
          </van-tab>
          <van-tab title="个人信息">
            <personaldetail :gid="gid" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import personaldetail from "./Singerdetail/Personaldetail";
import resolve from "./Singerdetail/Resolve";
import hotsong from "./Singerdetail/Hotsong";
import album from "./Singerdetail/Album";
import mv from "./Singerdetail/Mv";
export default {
  name: "songerdetail",
  components: {
    personaldetail,
    resolve,
    hotsong,
    album,
    mv,
  },

  data() {
    return {
      details: [],
      gid: "",
      isshow: false,
      isloading: true,
    };
  },

   


  methods: {
    getsonger(id) {
      this.axios.get("/artists?id=" + id).then(res => {
        this.details = res.data.artist;
        this.gid = res.data.artist.id;
      });
    },

    //返回
    onClickLeft() {
      this.$router.back();
    },

    onload() {
      if (this.details == "") {
        return;
      } else {
        this.isshow = true;
        this.isloading = false;
      }
    },
  },

  mounted() {
    this.getsonger(this.$route.params.id);
    if (this.details == "") {
      setInterval(() => {
        this.onload();
      });
    } else {
      return;
    }
  },
  

 
};
</script>

<style scoped>
.show {
  margin-bottom: 100px;
}
.loading {
  position: absolute;
  left: 2%;
  right: 0;
  top: 50%;
  bottom: 0;
  font-size: 2rem;
  text-align: center;
  color: rgb(164, 236, 255);
}
.jiazai {
  font-size: 1.4rem;
}

.van-hairline--bottom {
  background: none;
}
.van-hairline--bottom div,
span {
  color: #fff;
  font-size: 1rem;
}
.van-nav-bar__left i {
  color: #fff;
}
.gedan {
  position: absolute;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: -50px;
}
.gedan img {
  width: 100%;
  display: block;
  height: 20rem;
}
.title {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  top: 193px;
  left: 17px;
}
.wrap {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 13rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-tabs--line {
  width: 100%;
}
.van-tabs__nav--line {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.wrap /deep/ .van-tabs__line {
  background-color: skyblue;
}
</style>