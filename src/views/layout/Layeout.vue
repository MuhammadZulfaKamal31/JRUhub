<template>
    <div class="w-full h-full flex">
        <Sidebar :dataOpenSideBar="openSideBar.openSideBar" class=" z-10">
        </Sidebar>
        <div :class="{
            'md:ml-[300px] w-full duration-300': openSideBar.openSideBar,
            'w-full duration-300': !openSideBar.openSideBar
        }">
            <TopBar class=" hidden md:block" :toggleSideBar="openSideBar.toggleSideBar"
                :openSideBar="openSideBar.openSideBar" />
            <TopBarResponsif :toggleSideBar="openSideBar.toggleSideBar" :openSideBar="openSideBar.openSideBar"
                class=" md:hidden "></TopBarResponsif>

            <div @click="toggleCloseBar">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script setup>
import TopBar from '../../components/TopBar.vue'
import TopBarResponsif from '../../components/TopBarResponsif.vue';
import Sidebar from '../../components/SideBar.vue'
import { useSidebarStore } from '../../stores/Store.js';

const openSideBar = useSidebarStore()

//menutup layar mobile satu arah saja
const toggleCloseBar = () => {
    if (window.innerWidth < 768) {
        openSideBar.closeSideBar()
    }
}

//ketika di reload gak tampil
if (window.innerWidth < 768) {
    openSideBar.openSideBar = false;
}


</script>
  
<style></style>
  