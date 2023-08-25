<template>
    <div class=" flex justify-between items-center w-screen h-[65px] bg-red-600 px-10 fixed z-10">
        <div class=" flex items-center gap-6">
            <i @click="toggleSideBar" class="fa-solid fa-bars text-white text-xl"></i>
            <input type="text" class=" h-6 w-30">
        </div>

        <div @click="toggleDropDown" class="h-[35px] w-[35px] bg-white flex items-center rounded-full">
            <img src="../assets/Rectangle38.png" alt="" class=" rounded-full" />
        </div>

        <!-- profile dropdown -->
        <div v-show="showDropDown" class=" absolute right-[40px] top-[3.5rem] z-10 mt-2 md:w-[119px] origin-top-right rounded-md bg-white shadow-lg ring-1
                ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1 text-left">
                <router-link to="/Dashboard/Profile" class=" block px-4 py-2 text-sm" role="menuitem" id=" menu-item-2">
                    <span class="fa-solid fa-gauge"></span> Pofile</router-link>
                <form method="POST" action="" role="none">
                    <button type="submit" class=" block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1"
                        id="menu-item-3"><span class="fa-solid fa-gauge"></span> Log Out</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>

import { defineProps, ref } from 'vue';

const props = defineProps({
    toggleSideBar: Function
})
const showDropDown = ref(false);

const toggleDropDown = () => {
    showDropDown.value = !showDropDown.value;
};


</script>
<style></style>