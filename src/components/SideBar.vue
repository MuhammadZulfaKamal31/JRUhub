<template lang="">
    <div >
        <div class=" bg-white md:h-screen font-inter"  id="SideBar" :class=" dataOpenSideBar==true ?' w-[150px] md:w-[300px] fixed' :' w-0'">
                <div class=" flex justify-center my-10">
                    <img class=" w-[100px] h-[27px]" src="../assets/image 1.png" alt="">
                </div>
                <!-- sidebar -->
                <div class="">
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Dashboard</div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" href="/Dashboard/Dashboard">
                            <span
                                class="fa-solid fa-gauge hidden md:block">
                            </span>
                            <span> Dashboard</span>
                        </a>
                    </div>
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Businness
                    </div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" href="/Dashboard/Bisnis_Saya">
                            <span
                                class="fa-solid fa-gauge hidden md:block">
                            </span>
                            <span>
                                My Businness
                            </span>
                        </a>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/dashboard/bisnis"><span
                                class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                Pendampingan
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/dashboard/pendapatan"><span
                                class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                Circle
                            </span>
                        </router-link>
                    </div>
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500] flex flex-row items-center gap-1">JRUHUB</div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" href="/">
                            <span class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                JRUWAY
                            </span>
                        </a>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/"><span class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                JRU INSTITUT
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/"><span class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                JRUWORK
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/"><span class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                JRUPOS
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600] flex flex-row items-center gap-1" to="/"><span class="fa-solid fa-gauge hidden md:block"></span>
                            <span>
                                Stok Undangan
                            </span>
                        </router-link>
                    </div>
                </div>

        </div>
    </div>
</template>
<script setup>

import { defineProps } from 'vue';
import { ref } from 'vue';


const props = defineProps({
    dataOpenSideBar: Boolean
})

</script>
<style>
#SideBar {
    overflow: hidden;
    transition: 300ms;
}

.SideBarVisible {
    width: 300px;
    position: fixed;
}

.SideBarClose {
    width: 0px;
}
</style>