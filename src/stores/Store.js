import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useSidebarStore = defineStore('sidebar', () => { 

  const openSideBar = ref(true)
  const toggleSideBar = () => {
    openSideBar.value = !openSideBar.value;
  };

  return { openSideBar, toggleSideBar };
});