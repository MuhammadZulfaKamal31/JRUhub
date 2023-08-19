<template>
    <div class="w-full h-full flex">
        <!-- penggunaan pinia haarus lebih spesifik agar bisa di gunakan -->
        <Sidebar :dataOpenSideBar="openSideBar.openSideBar" />
        <div class=" h-full" :class="openSideBar.openSideBar ? 'ml-[300px] duration-300' : 'w-full'">
            <TopBar :toggleSideBar="openSideBar.toggleSideBar" :openSideBar="openSideBar.openSideBar" />
            <div class=" h-full bg-slate-200"
                :class="openSideBar.openSideBar ? 'w-[80%] duration-300' : 'w-full duration-300'">
                <router-view :openSideBar="openSideBar"></router-view>
            </div>
        </div>
    </div>
</template>


<script setup>
import TopBar from '../../components/TopBar.vue'
import Sidebar from '../../components/SideBar.vue'
import { useSidebarStore } from '../../stores/Store.js';

//cara penggunaan pinia
const openSideBar = useSidebarStore()

// import { ref } from 'vue';

// const openSideBar = ref(true);

// const togleSideBar = () => {
//     openSideBar.value = !openSideBar.value
// }


</script>

<style></style>