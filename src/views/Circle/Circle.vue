<template>
    <div>
        <div class='w-full h-full md:h-[564px] bg-slate-200  rounded-md overflow-auto pt-20 md:pt-14'
            :class="sideBar.openSideBar ? ' md:pr-[350px] md:pl-10' : ' md:px-20'">
            <div class="flex flex-wrap mx-4 bg-white p-10 rounded-md">
                <div v-for="i in circle" class=" w-1/2 md:w-1/5 px-4 mb-4">
                    <router-link :to="`/Layeout/Komune/Detail_Circle/${i.circle.id}`">
                        <div class="h-full border rounded-md overflow-hidden shadow-xl">
                            <img :src="`${baseImageUrl}` + i.circle.circle_logo" alt="" class="object-cover w-full">
                            <h5 class="p-4 text-[14px] font-semibold">{{ i.circle.circle_name }}</h5>
                        </div>
                    </router-link>
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
import { onMounted } from 'vue';
import { useCircle } from '../../stores/Circle/Circle';

const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
const sideBar = useSidebarStore()


//===================================== fetch API========================

const circleStore = useCircle();
const circle = circleStore.Circle;


onMounted(() => {
    circleStore.fetchCircle();
})

</script>
<style></style>