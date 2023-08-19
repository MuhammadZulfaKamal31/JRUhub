<template>
    <div>
        <div class=" h-screen w-screen flex">
            <div class=" h-full font-inter" id="side-bar" :class="showSide == true ? 'side-bar-visible' : 'side-bar-close'">
                <div class=" flex justify-center my-10">
                    <img class=" w-[100px] h-[27px]" src="../assets/image 1.png" alt="">
                </div>
                <!-- sidebar -->
                <div class="">
                    <div v-show="showSide" class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Dashboard</div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard"> <span
                                class="fa-solid fa-gauge"></span>
                            <span v-show="showSide"> Dashboard</span>
                        </router-link>
                    </div>
                    <div v-show="showSide" class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Businness
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard/bisnissaya"><span
                                class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                My Businness
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard/bisnis"><span
                                class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                Pendampingan
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard/pendapatan"><span
                                class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                Circle
                            </span>
                        </router-link>
                    </div>
                    <div v-show="showSide" class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">JRUHUB</div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                JRUWAY
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                JRU INSTITUT
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                JRUWORK
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                JRUPOS
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span v-show="showSide">
                                Stok Undangan
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class=" w-full h-full bg-slate-300">
                <!-- topbar -->
                <div class=" h-[190px] bg-red-500 flex items-center flex-col pt-7 px-10 w-full ">
                    <div class=" w-full mb-14 flex justify-between mx-7">
                        <div class=" flex gap-10 items-center">
                            <i class="fa-solid fa-bars text-white text-2xl" v-on:click="toggleBar"></i>
                            <input type="text" class=" w-[375px] h-[55px]" placeholder="Search">
                        </div>
                        <div @click="toggleDropDown"
                            class="h-[73px] w-[73px] bg-white rounded-full flex items-center justify-center mr-[38px]">
                            <img src="../assets/logo.svg" alt="" class="h-[50px] w-[50px] object-contain">
                        </div>
                    </div>
                    <div>
                        <div class=" h-[80px] w-[1045px] bg-white rounded-md flex items-center justify-start px-6">

                            <span class=" text-2xl font-[500]">Dashboard</span>
                        </div>
                    </div>
                </div>

                <!-- dropdown profile -->
                <div v-show="dropDown" class=" absolute right-[40px] top-[6.5rem] z-10 mt-2 w-[119px] origin-top-right rounded-md bg-white shadow-lg ring-1
                ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1 text-left">
                        <router-link to="/dashboard/profile" class=" block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                            id="menu-item-2"> <span class="fa-solid fa-gauge"></span> Pofile</router-link>
                        <form method="POST" action="#" role="none">
                            <button type="submit" class=" block w-full px-4 py-2 text-left text-sm" role="menuitem"
                                tabindex="-1" id="menu-item-3"><span class="fa-solid fa-gauge"></span> Log Out</button>
                        </form>
                    </div>
                </div>
                <!-- main -->
                <div class=" h-100% bg-gray-300 p-[20px]">
                    <div class="border border-gray-300 rounded-md p-[20px] h-full">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref } from "vue"

const dropDown = ref(false);
const showSide = ref(true);

const toggleBar = () => {
    showSide.value = !showSide.value
}

const toggleDropDown = () => {
    dropDown.value = !dropDown.value
}

</script>
<style>
#side-bar {
    overflow: hidden;
    transition: 300ms;
}

.side-bar-visible {
    width: 280px !important;
    background-color: white;

}

.side-bar-close {
    width: 0px !important;
}
</style>