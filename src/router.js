import Vue from 'vue'
import Router from 'vue-router'
import store from './store'



Vue.use(store)
Vue.use(Router)

const router=new Router({
    mode:"history",
    // scrollBehavior(to,from,savedPosition){
    //     if(savedPosition){
    //         return savedPosition;
    //     }else{
    //         return{x:0,y:0}
    //     }
    // },
    routes:[
        {path:'/',redirect:'/sheet'},

        {
            path:'/home',component:()=>import('./components/Home.vue'),
            redirect:'/sheet',

            //避免用户在第一次使用时没有songid而报错
            beforeEnter:(to, from, next)=>{
                if(!sessionStorage.getItem('songid')){
                    let songid=[];
                    songid=JSON.stringify(songid);
                    sessionStorage.setItem('songid',songid);
                };
                next();
            }, children:[
                //歌单
                {path:"/sheet",component:() =>import('./components/Gedan/Sheet.vue')},

                //排行
                {path:"/ranking",component:() =>import('./components/Ranking/Ranking.vue')},

                //歌手
                {
                    path:"/singer",
                    component:() =>import('./components/Singer/Singer.vue'),
                    // meta:{
                    //     keepAlive:true
                    // }
                },
            ]
        },
        {
            path:'/header',component:()=>import('./components/Header.vue')
        },
        {
            path:'/footer',component:()=>import('./components/Footer.vue')
        },
        //弹出层
        {
            path:'/sidebar',component:()=>import('./components/Popup/Sidebar.vue')
        },
        {
            path:'/playhistory',component:()=>import('./components/Popup/Playhistory.vue')
        },
        //账号相关
        {
            path:'/user',component:() =>import('./components/User/user.vue')
        },
        //公共组件
        {
            path:'/detail',component:()=>import('./components/Common/Detail.vue')
        },
        {
            path:'/songdetail/:id',
            component:()=>import('./components/Common/Songdetail.vue'),
            beforeEnter:(to,from,next) =>{
                store.state.showfooter=false
                next();
            }
        },
        //歌单详情
        {
            path:'/sheet/:id',component:()=>import('./components/Gedan/sheetdetails.vue')
        },
         //排行榜详情
         {
            path:'/ranking/:id',component:()=>import('./components/Ranking/Rankdetail.vue')
        },
        //歌手详情
        {
            path:'/singer/:id',component:()=>import('./components/Singer/Singerdetail.vue'),

            children:[
                {path:'/personaldetail',component:()=>import('./components/Singer/Singerdetail/Personaldetail.vue')},
                {path:'/resolve',component:()=>import('./components/Singer/Singerdetail/Resolve.vue')},
                {path:'/hotsong',component:()=>import('./components/Singer/Singerdetail/Hotsong.vue')},
                {path:'/album',component:()=>import('./components/Singer/Singerdetail/Album.vue')},
                {path:'/mv',component:()=>import('./components/Singer/Singerdetail/Mv.vue')},
            ]
        },

        //专辑详情
        {
         path: "/album/:id", component: () => import("./components/Common/Albumdetail.vue"),
        },
        //视频详情
        {
         path: "/videoplay/:id", component: () => import("./components/Common/Videoplay.vue"),
        },
        {
            path: "/videoplay2/:id", component: () => import("./components/Common/Videoplay2.vue"),
        },

        //搜索
        {
            path:'/search',component:() =>import('./components/Search/Search.vue')
        },
        {
            path:'/search/:value',name:'searchdetail',component:() =>import('./components/Search/Display.vue')
        },
        
        //404
        {
            path:'/error',component:()=>import('./components/Error.vue')
        },
        {
            path:'/login',component:()=>import('./components/Login/Login.vue')
        },
        {
            path:'/register',component:()=>import('./components/Login/Register.vue')
        },
        {
            path:'*',redirect:'/error'
        }

    ]
})
router.beforeEach((to,from,next) =>{
    if(to.path == '/login' || to.path == 'register' || to.path =='/error' || 
    to.path =='search' || to.name == 'searchdetail' ){
        store.state.showfooter = false
        next();
    }else{
        store.state.showfooter = true
        next();
    }
})

export default router