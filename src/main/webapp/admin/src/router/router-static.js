import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import dongman from '@/views/modules/dongman/list'
    import dongmanCollection from '@/views/modules/dongmanCollection/list'
    import dongmanLiuyan from '@/views/modules/dongmanLiuyan/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shipin from '@/views/modules/shipin/list'
    import shipinCollection from '@/views/modules/shipinCollection/list'
    import shipinLiuyan from '@/views/modules/shipinLiuyan/list'
    import yinyue from '@/views/modules/yinyue/list'
    import yinyueCollection from '@/views/modules/yinyueCollection/list'
    import yinyueLiuyan from '@/views/modules/yinyueLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryDongman from '@/views/modules/dictionaryDongman/list'
    import dictionaryDongmanCollection from '@/views/modules/dictionaryDongmanCollection/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShipin from '@/views/modules/dictionaryShipin/list'
    import dictionaryShipinCollection from '@/views/modules/dictionaryShipinCollection/list'
    import dictionaryYinyue from '@/views/modules/dictionaryYinyue/list'
    import dictionaryYinyueCollection from '@/views/modules/dictionaryYinyueCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryDongman',
        name: '动漫类型',
        component: dictionaryDongman
    }
    ,{
        path: '/dictionaryDongmanCollection',
        name: '收藏表类型',
        component: dictionaryDongmanCollection
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShipin',
        name: '视频类型',
        component: dictionaryShipin
    }
    ,{
        path: '/dictionaryShipinCollection',
        name: '收藏表类型',
        component: dictionaryShipinCollection
    }
    ,{
        path: '/dictionaryYinyue',
        name: '音乐类型',
        component: dictionaryYinyue
    }
    ,{
        path: '/dictionaryYinyueCollection',
        name: '收藏表类型',
        component: dictionaryYinyueCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/dongman',
        name: '动漫',
        component: dongman
      }
    ,{
        path: '/dongmanCollection',
        name: '动漫收藏',
        component: dongmanCollection
      }
    ,{
        path: '/dongmanLiuyan',
        name: '动漫留言',
        component: dongmanLiuyan
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shipin',
        name: '视频',
        component: shipin
      }
    ,{
        path: '/shipinCollection',
        name: '视频收藏',
        component: shipinCollection
      }
    ,{
        path: '/shipinLiuyan',
        name: '视频留言',
        component: shipinLiuyan
      }
    ,{
        path: '/yinyue',
        name: '音乐',
        component: yinyue
      }
    ,{
        path: '/yinyueCollection',
        name: '音乐收藏',
        component: yinyueCollection
      }
    ,{
        path: '/yinyueLiuyan',
        name: '音乐留言',
        component: yinyueLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
