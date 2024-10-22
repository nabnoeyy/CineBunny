import { createRouter, createWebHistory } from 'vue-router'
import appcine from '../views/appcine.vue';
import LoginPage from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import UserN1 from '../views/UserN1.vue';
import MenuN from '../views/MenuN.vue';
import MovieN from '../views/MovieN.vue';
import Notification1 from '../views/Notification1.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/appcine',
      name: 'appcine',
      component: appcine,
    },

    {
        path: '/Login',
        name: 'LoginPage',
        component: LoginPage,
      },
     
      {
        path: '/Home',
        name: 'Home',
        component:  Home,
      },

      {
        path: '/UserN1',
        name: 'UserN1',
        component:  UserN1,
      },

      {
        path: '/MenuN',
        name: 'MenuN',
        component: MenuN,
      },

      {
        path: '/MovieN',
        name: 'MovieN',
        component: MovieN,
      },

      {
        path: '/Notification1',
        name: 'Notification1',
        component: Notification1,
      },

      
     


      
     

    
  ],
});

export default router
