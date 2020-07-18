import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('views/index/Index')
const Feature = () => import('views/feature/Feature')
const Teacher = () => import('views/teacher/Teacher')
const News = () => import('views/news/News')
const Course = () => import('views/course/Course')
const Project = () => import('views/project/Project')
const Match = () => import('views/match/Match')
const Forum = () => import('views/forum/Forum')
const Student = () => import('views/student/Student')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')
const TeacherProfile = () => import('views/teacher/childComps/teacherProfile/TeacherProfile')
const Profile = () => import('views/profile/Profile')
const PersonalCourse = () => import('views/profile/childComps/ProfileMainCourse')
const PersonalProfile = () => import('views/profile/childComps/ProfileMainPersonalProfile')
const PersonalHomePage = () => import('views/profile/childComps/ProfileMainHomePage')
const PersonalPasswordManager = () => import('views/profile/childComps/ProfileMainPassWordManager')

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
    name: 0
  },
  {
    path: '/feature',
    component: Feature,
    name: 1
  },
  {
    path: '/teacher',
    component: Teacher,
    name: 2,
  },
  {
    path: '/news',
    component: News,
    name: 3
  },
  {
    path: '/course',
    component: Course,
    name: 4
  },
  {
    path: '/project',
    component: Project,
    name: 5
  },
  {
    path: '/match',
    component: Match,
    name: 6
  },
  {
    path: '/forum',
    component: Forum,
    name: 7
  },
  {
    path: '/student',
    component: Student,
    name: 8
  },
  {
    path: '/teacherProfile',
    component: TeacherProfile,
    name: 9
  },
  {
    path: '/login',
    component: Login,
    name: 10
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '',
        redirect:'PersonalCourse'
      },
      {
        path: 'PersonalCourse',
        component: PersonalCourse
      },
      {
        path: 'PersonalProfile',
        component: PersonalProfile
      },
      {
        path: 'PersonalHomePage',
        component: PersonalHomePage
      },
      {
        path: 'PersonalPasswordManager',
        component: PersonalPasswordManager
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
