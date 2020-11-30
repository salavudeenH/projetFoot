import Vue from 'vue'
import VueRouter from 'vue-router'
import VActu from '../components/VActu.vue'
import VBillettrie from '../components/VBilletterie.vue'
import VCalendrier from '../components/VCalendrier.vue'
import VClassement from '../components/VClassement.vue'
import VBoutique from '../components/VBoutique.vue'
import VSlide from '../components/VSlide.vue'
import VBilleterieInfo from '../components/VBilleterieInfo.vue'
import VArticle from '../components/VArticle.vue'
import VLogin from '../components/VLogin.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import VProduct from '../components/VProduct.vue'
import VMenuMobile from '../components/VMenuMobile.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/slide',
    name: 'VSlide',
    component: VSlide
  },
  {
    path: '/VActu',
    name: 'Actualités',
    component: VActu
  },
  {
    path: '/VBilleterieInfo',
    name: 'VBilleterieInfo',
    component: VBilleterieInfo
  },
  {
    path: '/VBillettrie',
    name: 'Billetterie',
    component: VBillettrie
  },
  {
    path: '/VCalendrier',
    name: 'Calendrier',
    component: VCalendrier
  },
  {
    path: '/VClassement',
    name: 'Classement',
    component: VClassement
  },
  {
    path: '/VBoutique',
    name: 'Boutique',
    component: VBoutique
  },
  {
    path: '/VActu/VArticle',
    name: 'Article',
    component: VArticle
  },
  {
    path: '/login',
    name: 'login',
    component: VLogin
  },
  {
    path: '/VProduct',
    name: 'Product',
    component: VProduct
  },
  {
    path: '/VMenuMobile',
    name: 'MenuMobile',
    component: VMenuMobile
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router