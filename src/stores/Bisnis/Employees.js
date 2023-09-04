import { useRoute } from 'vue-router'
import axios from 'axios'
import { defineStore } from 'pinia'




export const useEmployees = defineStore('employes', {
  state: () => ({
    Employees : [],
    Gambar :[]
  }),
  actions: {
    async fetchBisnis() {
      try {
        const route = useRoute()
        const id_bisnis = route.params.id_bisnis
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/business/detail/${id_bisnis}/employees`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.Employees = response.data.employees;
        this.$state.Gambar = response.data.business_id.business_logo;
        
        console.log(" coba"+ this.$state.Employees);
        
      } catch (error) {
        console.error('Error fetching businesses:', error)
      }
    },
  },
})
