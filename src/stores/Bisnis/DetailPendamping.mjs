import { useRoute } from 'vue-router'
import axios from 'axios'
import { defineStore } from 'pinia'


export const useDetailPendamping = defineStore('useDetailPendamping', {
  state: () => ({
    DetailPendamping : [],
    NamaBisnis:[]
  }),
  actions: {
    async fetchBisnis() {
      try {
        const route = useRoute();
        const id_bisnis = route.params.id_bisnis
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business/detail/${id_bisnis}/companion`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.DetailPendamping = response.data.companions;
        this.$state.NamaBisnis = response.data.business_id.business_name;

        console.log(" coba"+ this.$state.AssetBusiness);
        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
})
