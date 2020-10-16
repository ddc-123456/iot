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

const Document = () => import('views/document/Document')
const DocumentCriterion = () => import('views/document/childComps/DocumentCriterion')
const DocumentPlan = () => import('views/document/childComps/DocumentPlan')
const DocumentTalent = () => import('views/document/childComps/DocumentTalent')
const DocumentView = () => import('views/document/childComps/DocumentView')

const Register = () => import('views/register/Register')
const TeacherProfile = () => import('views/teacher/childComps/teacherProfile/TeacherProfile')
const Profile = () => import('views/profile/Profile')
const PersonalCourse = () => import('views/profile/childComps/ProfileMainCourse')
const PersonalProfile = () => import('views/profile/childComps/ProfileMainPersonalProfile')
const PersonalHomePage = () => import('views/profile/childComps/ProfileMainHomePage')
const PersonalPasswordManager = () => import('views/profile/childComps/ProfileMainPassWordManager')
const ProfileChangeHomePage = () => import('views/profile/childComps/ProfileChangeHomePage')


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
    path: '/document',
    component: Document,
    name: 3,
    children: [
      {
        path: '',
        redirect: 'DocumentTalent'
      },
      {
        path: 'DocumentTalent',
        component: DocumentTalent,
        name: 'DocumentTalent'
      },
      {
        path: 'DocumentCriterion',
        component: DocumentCriterion,
        name: 'DocumentCriterion'
      },
      {
        path: 'DocumentPlan',
        component: DocumentPlan,
        name: 'DocumentPlan'
      },
      {
        path: 'DocumentView',
        component: DocumentView,
        name: 'DocumentView'
      }
    ]
  },
  {
    path: '/news',
    component: News,
    name: 4
  },
  {
    path: '/course',
    component: Course,
    name: 5
  },
  {
    path: '/project',
    component: Project,
    name: 6
  },
  {
    path: '/match',
    component: Match,
    name: 7
  },
  {
    path: '/forum',
    component: Forum,
    name: 8
  },
  {
    path: '/student',
    component: Student,
    name: 9
  },
  {
    path: '/teacherProfile',
    component: TeacherProfile,
    name: 10
  },
  {
    path: '/login',
    component: Login,
    name: 11
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
        redirect: 'PersonalCourse'
      },
      {
        path: 'PersonalCourse',
        component: PersonalCourse,
        name: 'PersonalCourse'
      },
      {
        path: 'PersonalProfile',
        component: PersonalProfile,
        name: 'PersonalProfile'
      },
      {
        path: 'PersonalHomePage',
        component: PersonalHomePage,
        name: 'PersonalHomePage',
      },
      {
        path: 'PersonalPasswordManager',
        component: PersonalPasswordManager,
        name: 'PersonalPasswordManager'
      }
    ]
  },
  {
    path: '/ChangeProfilePage',
    component: ProfileChangeHomePage,
    name: 'ChangeProfilePage'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
