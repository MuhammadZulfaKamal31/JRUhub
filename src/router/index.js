import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/User/Login.vue';
import Register from '../views/User/Register.vue'
import HalUtama from '../views/Business/HalUtama.vue'
import Profile from '../views/User/Profile.vue'
import Pendapatan from '../views/User/Pendapatan.vue'
import Bisnis from '../views/Business/Bisnis.vue'
import BisnisSaya from '../views/Business/My-Business.vue';
import Layout from '../views/layout/Layeout.vue'
import Pendampingan from '../views/Pendampingan/Pendampingan.vue'
import Circle from '../views/Circle/Circle.vue'
import Komune from '../views/Circle/Komune.vue'
import CrackinCode from '../views/Business/CrackinCode.vue'
import CrackinCodeKaryawan from '../views/Business/CrackinCodeKaryawan.vue'
import CrackinCodePendamping from "../views/Business/CrackinCodePendamping.vue"
import CrackinCodeAsset from "../views/Business/CrackinCodeAsset.vue"

import SideBar from '../components/SideBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/Dashboard/:username',
      name: 'Dashboard',
      component: Layout,
      children: [
        {
          path: "Dashboard",
          name: 'HalUtama',
          component: HalUtama
        },
        {
          path: 'Profile',
          name: 'Profil', 
          component: Profile
        },
        {
          path: 'Pendapatan',
          name: 'Pendapatan',
          component: Pendapatan
        },
        {
          path: 'Bisnis',
          name: 'bisnis',
          component: Bisnis
        },
        {
          path: 'Bisnis_Saya',
          name: 'BisnisSaya',
          component: BisnisSaya
        },
        {
          path: 'pendampingan',
          name: 'Pendampingan',
          component: Pendampingan
        },
        {
          path: 'circle',
          name: 'Circle',
          component: Circle
        },
        {
          path: 'komune',
          name: 'Komune',
          component: Komune
        },
        {
          path: 'CrackinCode',
          name: 'CrackinCode',
          component: CrackinCode
        },
        {
          path: 'CrackinCode_Karyawan',
          name: 'CrackinCodKaryawan',
          component: CrackinCodeKaryawan
        },
        {
          path: 'CrackinCode_Pendamping',
          name: 'CrackinCodePendamping',
          component: CrackinCodePendamping
        },
        {
          path: 'CrackinCode_Asset',
          name: 'CrackinCodeAsset',
          component: CrackinCodeAsset
        }
      ]
    }

  ]
})

export default router
