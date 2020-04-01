import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import IndexDefault from '@/components/IndexDefault'
import Stepper from '@/components/Stepper'
import Checkbox from '@/components/Checkbox'
import Submitted from '@/components/Submitted'
import SelMenu from '@/components/SelMenu'
import Empty from '@/components/Empty'
import Setting from '@/components/Setting'
import OnlyTable from '@/components/OnlyTable'
import DropCourse from '@/components/DropCourse'
import Information from '@/components/Information'
import CourseNoc from '@/components/tabs/CourseNoc'
import SchoolNoc from '@/components/tabs/SchoolNoc'
import SystemNoc from '@/components/tabs/SystemNoc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Login',
      component: Login
    },
    {
      path:'/:id',
      name:'Page',
      component: Index,
      children:[
        {path:'index',component:IndexDefault},
        {path:'select-course',
          component:Empty,
          children:[
            {path:'',component:SelMenu},
            {path:'choose',component:Checkbox},
            {path:'choose2',component:Checkbox},
            {path:'submitted',component:Submitted},
            {path:'selected',component:OnlyTable},
            {path:'drop',component:DropCourse},
            
          ]
        },
        {path:'information',
          component:Information,
          children:[
            {path:'CourseNoc',component:CourseNoc},
            {path:'SchoolNoc',component:SchoolNoc},
            {path:'SystemNoc',component:SystemNoc},
            {path:'CourseNoc',component:Checkbox},
            
          ]
        },
        {path:'setting',
          component:Setting,
          children:[
            {path:'CourseNoc',component:CourseNoc},
            {path:'SchoolNoc',component:SchoolNoc},
            {path:'SystemNoc',component:SystemNoc},
            {path:'CourseNoc',component:Checkbox},
            
          ]
        },
        //{path:'submitted',component:Submitted},
        
      ]
    },/*
    {
      path:'/:id/index',
      name:'Index',
      component: Index,
      children:[
        {path:'',component:IndexDefault},
        {path:'choose2',component:Checkbox},
        {path:'submitted',component:Submitted},
        
      ]
    },    
    {
      path:'/:id/select-course',
      name:'SelectCourse',
      component: Index,
      children:[
        {path:'',component:SelMenu},
        {path:'choose',component:Checkbox},
        {path:'choose2',component:Checkbox},
        {path:'submitted',component:Submitted},
        
      ]
    },    
    {
      path:'/:id/information',
      name:'Information',
      component: Index,
      children:[
        {path:'choose',component:Stepper},
        {path:'choose2',component:Checkbox},
        {path:'submitted',component:Submitted},
        
      ]
    },
    {
      path:'/index',
      name:'Index',
      component: Index,
    },

    {
      path:'/submitted',
      name:'Submitted',
      component: Submitted,
      

    }*/
  ]
})
