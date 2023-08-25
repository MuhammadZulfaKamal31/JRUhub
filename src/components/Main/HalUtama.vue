<template>
    <div class=" ">
        <div class=" flex flex-col items-center md:items-start
         md:flex-row md:h-[580px] gap-5 md:ml-[40px] px-5 py-20 md:py-12 "
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
        <div class=" w-full pt-[70%] md:pt-0 bg-slate-200 text-start p-5 pl-[65px] shadow-sm">
            <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
        </div>

    </div>
</template>
<!-- jangan lupa setup nya di pakai -->
<script setup>
//pinia
import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore()

</script>
<style ></style>