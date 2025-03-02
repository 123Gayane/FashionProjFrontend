import { createRouter, createWebHistory } from 'vue-router'
import AboutAbout from '@/views/AboutAbout.vue';
import ContactsCon from '@/views/ContactsCon.vue';
import ShopShop from '@/views/ShopShop.vue';
import FashionsFa from '@/views/FashionsFa.vue';
import HomePage from '@/views/HomePage.vue';
import CardPage from '@/views/CardPage.vue';
import FashionFa2 from '@/views/FashionFa2.vue';
import SignIn from '@/views/SignIn.vue';

// import store from '@/store'


const routes = [
  {
    path:"/",
    component:HomePage,
    name:"home",
    // meta: { requiresAuth: true }
  },

  {
    path:"/about",
    component:AboutAbout,
    name:"about",
    // meta: { requiresAuth: true }
  },

  {
    path:"/contact",
    component:ContactsCon,
    name:"contact",
    // meta: { requiresAuth: true }
  },

  {
    path:"/shop",
    component:ShopShop,
    name:"shop",
    // meta: { requiresAuth: true }
  },

  {
    path:"/fashion",
    component:FashionsFa,
    name:"fashion",
    // meta: { requiresAuth: true }
  },
  {
    path:"/card",
    component:CardPage,
    name:'card',
    // meta: { requiresAuth: true }
  },

  {
    path:"/fashion2",
    component:FashionFa2,
    name:"fashion2"
  },

  {
    path:"/signin/admin/",
    component:SignIn,
    name:"signin",
    // meta: { requiresAuth: true }
  }


]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
