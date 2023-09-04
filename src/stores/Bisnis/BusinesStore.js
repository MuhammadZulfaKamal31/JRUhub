import axios from 'axios'
import { defineStore } from 'pinia'

export const useBusinessStore = defineStore('business', {
  state: () => ({
    business : []
    
  }),
  actions: {
    async fetchBisnis() {
      try {
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        });

        // console.log(response.data.data)
        // this.$state.businesses = response.data.data[0].business_id 
        this.$state.business = response.data.data
        // this.$state.id = response.data.data[0].business_id.id;
        
        
        // this.$state.gambar ='https://ac20-103-162-237-62.ngrok-free.app'+ response.data.data[0].business_id.business_logo;

        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
  // persist: true, // Opsional, jika Anda ingin menyimpan data bisnis antar sesi aplikasi
})
