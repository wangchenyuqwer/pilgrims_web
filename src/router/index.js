import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('views/Home/index')

// 资讯
const Information = () => import('views/Information/index')
const InforMessageIndex = () => import('views/Information/message') // 朝圣信息
const InforMessageDetail = () => import('views/Information/detail') // 朝圣慈善
const InforVideoIndex = () => import('views/Information/video') // 朝圣视频
const InforCustomizedIndex = () => import('views/Information/customized') // 定制朝圣
const InforCharitableIndex = () => import('views/Information/charitable') // 朝圣慈善

// 个人中心
const Profile = () => import('views/Profile/index')
const ProfileEdit = () => import('views/Profile/edit/index')
const ProfileConsumption = () => import('views/Profile/consumption/index')
const ProfileLine = () => import('views/Profile/line/index')

// 签证
const Visa = () => import('views/Visa/index')
const VisaDetail = () => import('views/Visa/visaDetail')

// 线路
const Line = () => import('views/Line/index')
const LineDetail = () => import('views/Line/detail')

// 登录
const Login = () => import('views/Login/login')
// 注册
const Register = () => import('views/Login/register')
// 完善信息
const PerfectMsg = () => import('views/Login/perfectMsg')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'index',
    component: Home
  }, {
    path: '/information',
    name: 'information',
    component: Information
  }, {
    path: '/information/detail/:id',
    name: 'information-detail',
    component: InforMessageDetail
  }, {
    path: '/information/message',
    name: 'information-message',
    component: InforMessageIndex
  }, {
    path: '/information/video',
    name: 'information-video',
    component: InforVideoIndex
  }, {
    path: '/information/customized',
    name: 'information-customized',
    component: InforCustomizedIndex
  }, {
    path: '/information/charitable',
    name: 'information-charitable',
    component: InforCharitableIndex
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/profile/edit',
    name: 'profile-edit',
    component: ProfileEdit
  }, {
    path: '/profile/consumption',
    name: 'profile-consumption',
    component: ProfileConsumption
  }, {
    path: '/profile/line',
    name: 'profile-line',
    component: ProfileLine
  }, {
    path: '/visa',
    name: 'visa',
    component: Visa
  }, {
    path: '/visa/detail/:id',
    name: 'visa-detail',
    component: VisaDetail
  }, {
    path: '/line',
    name: 'line',
    component: Line
  }, {
    path: '/line/detail/:id',
    name: 'line-detail',
    component: LineDetail
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      showHead: false
    }
  }, {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      showHead: false
    }
  }, {
    path: '/perfectMsg/:id',
    name: 'perfectMsg',
    component: PerfectMsg,
    meta: {
      showHead: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
