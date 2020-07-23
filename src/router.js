import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer'
import MenberContainer from './components/tabbar/SystemSettings'
import SearchContainer from './components/tabbar/BasicInformation'
import ShoppingCartsContainer from './components/tabbar/MoldManagement'
import LoginPage from './components/tabbar/LoginContainer'
import HomePage from './components/home/home-contain'
import RoleManagementPage from './components/systemSetting/RoleManagement'
import UserManagementPage from './components/systemSetting/UserManagement'
import LogQueryPage from './components/systemSetting/LogQuery'
import ExceptionLogPage from './components/systemSetting/ExceptionLog'
import TopologyManagementPage from './components/systemSetting/TopologyManagement'
import KanbanConfigurationPage from './components/systemSetting/KanbanConfiguration'
import HomePageConfigurationPage from './components/systemSetting/HomePageConfiguration'




//创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/LoginPage'},
        {path:'/LoginPage',component:LoginPage},
        {path:'/HomeContainer',component:HomeContainer,
            children:[
                {path:'/HomeContainer',component:HomePage},
                {path:'/RoleManagementPage',component:RoleManagementPage},
                {path:'/UserManagementPage',component:UserManagementPage},
                {path:'/LogQueryPage',component:LogQueryPage},
                {path:'/ExceptionLogPage',component:ExceptionLogPage},
                {path:'/TopologyManagementPage',component:TopologyManagementPage},
                {path:'/KanbanConfigurationPage',component:KanbanConfigurationPage},
                {path:'/HomePageConfigurationPage',component:HomePageConfigurationPage}
            ]
        },
        {path:'/MenberContainer',component:MenberContainer},
        {path:'/SearchContainer',component:SearchContainer},
        {path:'/ShoppingCartsContainer',component:ShoppingCartsContainer},
    ]
});
export default router