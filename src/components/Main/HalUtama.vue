<template>
    <div class=" flex h-[580px] gap-5 ml-[40px] p-5 py-12"
        :class="sideBar.openSideBar ? 'px-[14px] duration-300' : 'px-[4%] duration-300'">
        <div class="flex items-center h-[82px] w-[200px] bg-white rounded-md">
            <div class=" h-[60px] w-[60px] bg-red-600 m-2"></div>
            <div>
                <span class=" text-slate-600 font-[700]">Total Anggota</span>
                <div class=" h-[25px] text-[20x] font-[800]">
                    544
                </div>
            </div>
        </div>
        <div class="flex items-center h-[82px] w-[200px] bg-white rounded-md">
            <div class=" h-[60px] w-[60px] bg-red-600 m-2"></div>
            <div>
                <span class=" text-slate-600 font-[700]">Total Bisnis</span>
                <div class=" h-[25px] text-[20x] font-[800]">
                    80
                </div>
            </div>
        </div>
        <div class="flex items-center h-[82px] w-[200px] bg-white rounded-md">
            <div class=" h-[60px] w-[60px] bg-red-600 m-2"></div>
            <div>
                <span class=" text-slate-600 font-[700]">Total Circle</span>
                <div class=" h-[25px] text-[20x] font-[800]">
                    10
                </div>
            </div>
        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[85px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<!-- jangan lupa setup nya di pakai -->
<script setup>
//pinia
import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore()

</script>
<style ></style>