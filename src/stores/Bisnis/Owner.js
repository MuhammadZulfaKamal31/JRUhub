import { useRoute } from 'vue-router'
import axios from 'axios'
import { defineStore } from 'pinia'




export const useOwnerBusines = defineStore('ownerBusines', {
  state: () => ({
    OwnerBisnis : [],
    SisaPersentase :[],
    NamaBisnis :[],
    EmailBisnis :[],
    GambarBisnis :[]

  }),
  actions: {
    async fetchBisnis() {
      try {
        const route = useRoute()
        const id_bisnis = route.params.id_bisnis
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business/detail/${id_bisnis}/owners`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.OwnerBisnis = response.data.owners;
        this.$state.SisaPersentase = response.data.empty_shares;
        this.$state.NamaBisnis = response.data.business_id.business_name;
        this.$state.EmailBisnis = response.data.business_id.business_email;
        this.$state.GambarBisnis = response.data.business_id.business_logo;
        
        // this.$state.nama_Bisnis = response.data.data;
        console.log(" cobasada"+ this.$state.OwnerBisnis);
        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
})
