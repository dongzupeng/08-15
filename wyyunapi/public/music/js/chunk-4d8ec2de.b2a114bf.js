(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d8ec2de","chunk-40d99816"],{"012d":function(t,s,a){"use strict";var i=a("1bcb"),e=a.n(i);e.a},"0418":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"appheader"}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"icon"},[a("van-cell",{on:{click:t.showPopup}},[a("van-icon",{attrs:{name:"wap-nav"}})],1),a("van-popup",{style:{width:"70%",height:"100%"},attrs:{round:"",position:"left"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[a("sidebar")],1)],1),a("div",{staticClass:"title"},[t._v("VUE-MUSIC")]),a("div",{staticClass:"icon"},[a("router-link",{attrs:{to:"/search"}},[a("van-icon",{attrs:{name:"search"}})],1)],1)]),a("div",{staticClass:"wrap"},[a("van-row",[a("router-link",{attrs:{to:"/sheet",tag:"div"}},[a("van-col",[t._v("推荐")])],1),a("router-link",{attrs:{to:"/ranking",tag:"div"}},[a("van-col",[t._v("排行榜")])],1),a("router-link",{attrs:{to:"/singer",tag:"div"}},[a("van-col",[t._v("歌手")])],1)],1)],1),a("div",{staticClass:"cover"},[a("keep-alive",[a("router-view")],1)],1)])},e=[],n=a("bc1a"),o={name:"appheader",components:{sidebar:n["default"]},data:function(){return{active:1,show:!1}},methods:{showPopup:function(){this.show=!0}}},c=o,r=(a("e0e2"),a("2877")),d=Object(r["a"])(c,i,e,!1,null,"2768c36b",null);s["default"]=d.exports},"15a7":function(t,s,a){},"1bcb":function(t,s,a){},bc1a:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"sidebar"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"img"},[a("img",{ref:"img",attrs:{src:t.user.avatarUrl,alt:""}})]),a("div",{ref:"name",staticClass:"name"},[t._v(t._s(t.user.signature))])]),a("div",{ref:"nickname",staticClass:"nickname"},[t._v(t._s(t.user.nickname))]),a("div",{staticClass:"icon"},[a("div",{staticClass:"added",on:{click:t.nohave}},[a("van-icon",{attrs:{name:"comment-o"}}),a("div",{staticClass:"iconname"},[t._v("我的消息")])],1),a("div",{staticClass:"added",on:{click:t.nohave}},[a("van-icon",{attrs:{name:"friends-o"}}),a("div",{staticClass:"iconname"},[t._v("我的好友")])],1),a("div",{staticClass:"added",on:{click:t.nohave}},[a("van-icon",{attrs:{name:"music-o"}}),a("div",{staticClass:"iconname"},[t._v("听歌识曲")])],1),a("div",{staticClass:"added",on:{click:t.nohave}},[a("van-icon",{attrs:{name:"star-o"}}),a("div",{staticClass:"iconname"},[t._v("个信装扮")])],1)]),a("div",{staticClass:"nav"},[a("router-link",{attrs:{to:"/user"}},[a("div",{staticClass:"user"},[t._v("用户信息")])]),a("div",{staticClass:"tool",on:{click:t.nohave}},[t._v("工具")]),a("div",{staticClass:"Scan",on:{click:t.nohave}},[t._v("扫一扫")]),a("router-link",{attrs:{to:"/login"}},[a("div",{staticClass:"login"},[t._v("切换账号")])]),a("router-link",{attrs:{to:"/about"}},[a("div",{staticClass:"about"},[t._v("关于我们")])]),a("div",{staticClass:"setting",on:{click:t.nohave}},[t._v("设置")])],1),a("footer",[a("div",{staticClass:"imgicon",on:{click:t.signout}},[a("i",{staticClass:"iconfont"},[t._v("")])])])])},e=[],n=(a("b0c0"),{name:"sidebar",data:function(){return{user:[]}},inject:["reload"],methods:{nohave:function(){this.$toast("对不起，你所点击的功能暂时还在开发中！,请你关注我们的消息.")},signout:function(){var t=this;this.$dialog.confirm({message:"您确定要退出当前账号吗?",confirmButtonText:"退出",cancelButtonText:"取消"}).then((function(){sessionStorage.removeItem("uid"),t.reload(),t.$router.push("/login")})).catch((function(){}))},getuser:function(){var t=this;JSON.parse(sessionStorage.getItem("uid"))?(""==this.$store.state.uid&&(this.$store.state.uid=JSON.parse(sessionStorage.getItem("uid"))),this.axios.get("/user/detail?uid="+this.$store.state.uid).then((function(s){t.user=s.data.profile}))):(this.$refs.img.src="https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-music/default.jpg",this.$refs.name.innerHTML="当前无账号,请登录!",this.$notify({type:"danger",message:"当前没有登录账号，请登录账号"}))}},mounted:function(){this.getuser()}}),o=n,c=(a("012d"),a("2877")),r=Object(c["a"])(o,i,e,!1,null,"7a085b0c",null);s["default"]=r.exports},e0e2:function(t,s,a){"use strict";var i=a("15a7"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-4d8ec2de.b2a114bf.js.map