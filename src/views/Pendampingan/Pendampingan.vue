<template>
    <div>
        <div class='w-full h-full md:h-[564px] bg-slate-200  rounded-md overflow-auto pt-20 md:pt-14'
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
    <div class=" w-full text-start p-5 pl-[60px] md:pl-[65px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>
import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore()

</script>
<style></style>