
import axios from 'axios'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const useDetailCircle = defineStore('Circle', {
  state: () => ({
    DetailCircle : [],
    TotalBisnis :[],
    TotalProject :[],
    TotalAnggota :[]
  }),
  actions: {
    async fetchCircle() {
      try {
        const route = useRoute();
        const id_circle = route.params.id_circle
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/circle/detail/${id_circle}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
        })

        this.$state.DetailCircle= response.data.data.business;
        this.$state.TotalBisnis = response.data.data.circle_info.total_business;
        this.$state.TotalProject = response.data.data.circle_info.total_project;
        this.$state.TotalAnggota = response.data.data.circle_info.total_employee;

        // this.$state.nama_Bisnis = response.data.data;
        console.log(" coba "+ this.$state.DetailCircle);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    },
  },
})
