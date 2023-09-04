import { useRoute } from 'vue-router'
import axios from 'axios'
import { defineStore } from 'pinia'




export const useAssetBusines = defineStore('assetBusines', {
  state: () => ({
    AssetBusiness : [],
    AssetDescription:[],

  }),
  actions: {
    async fetchBisnis() {
      try {
        const route = useRoute();
        const id_bisnis = route.params.id_bisnis
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business/detail/${id_bisnis}/assets`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.AssetBusiness = response.data.assets;
        // this.$state.AssetDescription = response.data.assets;
        // this.$state.nama_Bisnis = response.data.data;
        console.log(" coba"+ this.$state.AssetBusiness);
        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
    })
