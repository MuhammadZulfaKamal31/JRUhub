import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import HalUtama from '../components/Main/HalUtama.vue'
import Profile from '../components/Main/Profile.vue'
import Pendapatan from '../components/Main/Pendapatan.vue'
import Bisnis from '../components/Main/Bisnis/Bisnis.vue'
import BisnisSaya from '../components/Main/Bisnis/BisnisSaya.vue';
import Layout from '../views/layout/Layeout.vue'
import Pendampingan from '../components/Main/Pendampingan.vue'
import Circle from '../components/Main/Circle.vue'
import Komune from '../components/Main/Komune.vue'
import CrackinCode from '../components/Main/Bisnis/CrackinCode.vue'
import CrackinCodeKaryawan from '../components/Main/Bisnis/CrackinCodeKaryawan.vue'
import CrackinCodePendamping from "../components/Main/Bisnis/CrackinCodePendamping.vue"
import CrackinCodeAsset from "../components/Main/Bisnis/CrackinCodeAsset.vue"

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
      path: '/Dashboard/',
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
          path: 'Crackin_Code_Karyawan',
          name: 'CrackinCodKaryawan',
          component: CrackinCodeKaryawan
        },
        {
          path: 'Crackin_Code_Pendamping',
          name: 'CrackinCodePendamping',
          component: CrackinCodePendamping
        },
        {
          path: 'Crackin_Code_Asset',
          name: 'CrackinCodeAsset',
          component: CrackinCodeAsset
        }
      ]
    }

  ]
})

export default router
