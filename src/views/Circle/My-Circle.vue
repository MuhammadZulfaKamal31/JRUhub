<template>
    <div :class="sideBar.openSideBar ? '' : 'duration-300'">
        <div class=" flex flex-col items-center md:items-start md:flex-row gap-5 md:ml-[40px] px-5 py-20 md:py-12 "
            :class="sideBar.openSideBar ? 'md:px-[14px] duration-300' : 'md:px-[4%] duration-300'">
            <div class="flex items-center h-[100px]  md:h-[82px] w-[300px] md:w-[200px] bg-white rounded-md">
                <div class=" h-[60px] w-[60px] bg-red-600 m-7 md:m-2"></div>
                <div>
                    <span class=" text-[17px] md:text-base text-slate-600 font-[700]">Total Anggota</span>
                    <div class=" h-[20px] md:h-[25px] text-[17px] md:text-[20px] font-[800]">
                        544
                    </div>
                </div>
            </div>
            <div class="flex items-center h-[100px]  md:h-[82px] w-[300px] md:w-[200px] bg-white rounded-md">
                <div class=" h-[60px] w-[60px] bg-red-600 m-7 md:m-2"></div>
                <div>
                    <span class=" text-[17px] md:text-base text-slate-600 font-[700]">Total Bisnis</span>
                    <div class=" h-[20px] md:h-[25px] text-[17px] md:text-[20px] font-[800]">
                        80
                    </div>
                </div>
            </div>
            <div class="flex items-center h-[100px]  md:h-[82px] w-[300px] md:w-[200px] bg-white rounded-md">
                <div class=" h-[60px] w-[60px] bg-red-600 m-7 md:m-2"></div>
                <div>
                    <span class=" text-[17px] md:text-base text-slate-600 font-[700]">Total Anggota</span>
                    <div class=" h-[20px] md:h-[25px] text-[17px] md:text-[20px] font-[800]">
                        10
                    </div>
                </div>
            </div>

        </div>
        <!-- studio -->
        <div class='w-full h-full md:h-[564px] bg-slate-200  rounded-md overflow-auto'
            :class="sideBar.openSideBar ? ' md:pr-[350px] md:pl-10' : ' md:px-20'">
            <div class="flex flex-wrap mx-4 bg-white p-10 rounded-md">
                <div v-for="i in 10" class=" w-1/2 md:w-1/5 px-4 mb-4">
                    <div class="h-full border rounded-md overflow-hidden shadow-xl">
                        <img src="../../assets/Rectangle38.png" alt="" class="object-cover w-full">
                        <h5 class="p-4 text-[14px] font-semibold">Studio {{ i }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[85px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>
import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore()

</script>
<style></style>