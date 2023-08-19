<template lang="">
    <div class='h-screen w-screen flex'>
        <div class=" bg-white h-full font-inter"  id="SideBar" :class=" dataOpenSideBar==true ?'SideBarVisible' :'SideBarClose'">
                <div class=" flex justify-center my-10">
                    <img class=" w-[100px] h-[27px]" src="../assets/image 1.png" alt="">
                </div>
                <!-- sidebar -->
                <div class="">
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Dashboard</div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600]" href="/Dashboard/Dashboard"> <span
                                class="fa-solid fa-gauge"></span>
                            <span> Dashboard</span>
                        </a>
                    </div>
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">Businness
                    </div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600]" href="/Dashboard/Bisnis_Saya"><span
                                class="fa-solid fa-gauge"></span>
                            <span>
                                My Businness
                            </span>
                        </a>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard/bisnis"><span
                                class="fa-solid fa-gauge"></span>
                            <span>
                                Pendampingan
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/dashboard/pendapatan"><span
                                class="fa-solid fa-gauge"></span>
                            <span>
                                Circle
                            </span>
                        </router-link>
                    </div>
                    <div class=" mx-5 my-5 text-[11px] w-[59px] text-[#A3A3A3] font-[500]">JRUHUB</div>
                    <div class=" my-3">
                        <a class=" mx-5 text-[14px] font-[600]" href="/"><span class="fa-solid fa-gauge"></span>
                            <span>
                                JRUWAY
                            </span>
                        </a>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span>
                                JRU INSTITUT
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span>
                                JRUWORK
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
                            <span>
                                JRUPOS
                            </span>
                        </router-link>
                    </div>
                    <div class=" my-3">
                        <router-link class=" mx-5 text-[14px] font-[600]" to="/"><span class="fa-solid fa-gauge"></span>
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