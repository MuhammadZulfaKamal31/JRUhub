
import axios from 'axios'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'




export const useDetailBusines = defineStore('detailBusines', {
  state: () => ({
    Detaillbusiness : [],
    NamaBisnis : [],
    LogoBisnis :[],
    id_bisnis:[],

    Pemilik:[],
    Pendamping:[],
    Karyawan:[],
    Asset:[],
    TargetBisnis:[]
    
  }),
  actions: {
    async fetchBisnis() {
      try {
        const route = useRoute();
        const id_bisnis = route.params.id_bisnis
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business/detail/${id_bisnis}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.Detaillbusiness = response.data.data.business.business_description;
        this.$state.NamaBisnis = response.data.data.business.business_name;
        this.$state.LogoBisnis = response.data.data.business.business_logo;
        this.$state.id_bisnis = response.data.data.business.id;

        this.$state.Pemilik = response.data.data.business_owners;
        this.$state.Pendamping = response.data.data.business_companion;
        this.$state.Karyawan = response.data.data.business_employees;
        this.$state.Asset = response.data.data.business_assets;
        this.$state.TargetBisnis = response.data.data.business_target



        // this.$state.nama_Bisnis = response.data.data;
        console.log(" coba"+ this.$state.Detaillbusiness);
        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
})
