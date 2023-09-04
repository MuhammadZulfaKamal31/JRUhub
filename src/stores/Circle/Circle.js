
import axios from 'axios'
import { defineStore } from 'pinia'

export const useCircle = defineStore('Circle', {
  state: () => ({
    Circle : []
  }),
  actions: {
    async fetchCircle() {
      try {
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/circle`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.Circle = response.data.data;

        // this.$state.nama_Bisnis = response.data.data;
        console.log(" coba"+ this.$state.AssetBusiness);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    },
  },
})
