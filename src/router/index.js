import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
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
import DetailCircle from '../views/Circle/DetailCircle.vue'
import DetailPemilik from '../views/Business/DetailPemilik.vue'
import DetailKaryawan from '../views/Business/DetailKaryawan.vue'
import DetailPendamping from "../views/Business/DetailPendamping.vue"
import DetailAsset from "../views/Business/DetailAsset.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/user/login',
      name: 'Login',
      component: Login
    }, {
      path: '/user/register',
      name: 'Register',
      component: Register
    }, {
      path: '/Layeout/:judul',
      name: 'Layeout',
      component: Layout,
      children: [
        {
          path: "",
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
          path: 'Bisnis_Saya/:id_detail',
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
          path: 'Detail_Circle/:id',
          name: 'DetailCircle',
          component: DetailCircle
        },
        {
          path: 'Detail_Pemilik/:id_pemilik',
          name: 'Detail_Pemilik',
          component: DetailPemilik
        },
        {
          path: 'Detail_Karyawan/:id_karyawan',
          name: 'DetailKaryawan',
          component: DetailKaryawan
        },
        {
          path: 'Detail_Pendamping/:id_pendamping',
          name: 'DetailPendamping',
          component: DetailPendamping
        },
        {
          path: 'Detail_Asset:id_asset',
          name: 'DetailAsset',
          component: DetailAsset
        }
      ]
    }

  ]
})

export default router
