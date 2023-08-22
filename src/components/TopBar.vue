<template>
    <div class=" w-full flex">
        <!-- topbar -->
        <div class=" h-[190px] w-full bg-red-500 flex items-center flex-col pt-7 px-10 ">
            <div class=" w-full mb-14 flex justify-between mx-7">
                <div class=" flex gap-10 items-center">
                    <i @click="toggleSideBar" class="fa-solid fa-bars text-white text-2xl"></i>
                    <input type="text" class=" w-[375px] h-[55px]" placeholder="Search">
                </div>
                <!-- profile -->
                <div @click="toggleDropDown"
                    class="h-[73px] w-[73px] bg-white rounded-full flex items-center justify-center mr-[38px] absolute right-7">
                    <img src="../assets/Rectangle38.png" alt="" class="h-[50px] w-[50px]" />
                </div>
            </div>
            <div>
                <!-- penyesuaian dashboard -->
                <div class=" h-[80px] bg-white rounded-md flex items-center justify-start px-6"
                    :class="openSideBar ? ' mr-[20rem] w-[1010px] duration-300' : 'w-[1245px] duration-300'">
                    <span class=" text-2xl font-[500]">{{ lastPart }}</span>
                </div>
            </div>
        </div>
        <!-- dropdown profile -->
        <div v-show="showDropDown" class=" absolute right-[40px] top-[6.5rem] z-10 mt-2 w-[119px] origin-top-right rounded-md bg-white shadow-lg ring-1
                ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1 text-left">
                <a href="/Dashboard/Profile" class=" block px-4 py-2 text-sm" role="menuitem" id=" menu-item-2"> <span
                        class="fa-solid fa-gauge"></span> Pofile</a>
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
import { useRoute } from 'vue-router';

const props = defineProps({
    toggleSideBar: Function,
    openSideBar: Boolean
});

const showDropDown = ref(false);

const toggleDropDown = () => {
    showDropDown.value = !showDropDown.value;
};


// Dapatkan URL path saat ini
const route = useRoute();
const fullPath = route.path;
// Pisahkan path berdasarkan '/'
const parts = fullPath.split('/');

// Ambil kata terakhir dari path
const lastPart = parts.pop();

console.log(lastPart); // Output: "pendapatan"

</script>


<style ></style>