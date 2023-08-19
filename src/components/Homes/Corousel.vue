<template>
    <div class="md:flex justify-between min-h-screen items-center">
        <div class=" md:w-[455px] m-[10%] mt-[14%]">
            <h1 class="text-2xl md:text-[40px] font-bold my-9">
                Lorem ipsum dolor sit amet consectetur
            </h1>
            <p class=" text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
                consequuntur enim. Accusantium ullam accusamus in maiores, ipsam saepe
                alias necessitatibus natus perferendis repellat, similique assumenda
                pariatur laborum facere culpa reprehenderit?
            </p>
        </div>
        <div class="md:hidden ">
            <split-carousel :height="165" :displayAmount="1">
                <split-carousel-item v-for="item, i in  gambar " :key="i">
                    <div class="w-[295px] h-[159px] bg-white rounded-2xl drop-shadow-md border flex justify-between">
                        <div class="p-4">
                            <img class="w-[80px] my-[9px] border" :src="`../../../public/` + item.name" alt="" />
                            <p class=" text-gray-600 text-[9px]">
                                wewqewLorem ipsum dolor sit amet consectetur adipisicing elit.dsdasdasdsadsdsdasds dssda
                                <span class="text-black font-bold">{{ item.name }}</span>.
                            </p>
                        </div>
                        <div class="items-center w-[405px] h-[115px] rounded-2xl border m-[17px] my-6 bg-[#D9D9D9]">
                            <div class="w-full">
                                <img class="" src="" alt="" />
                            </div>
                        </div>
                    </div>
                </split-carousel-item>
            </split-carousel>
        </div>
        <div class="">
            <div class=" md:w-[640px] h-[300px] mr-16 md:block hidden">
                <split-carousel :height="350" :displayAmount="1">
                    <split-carousel-item v-for="item, i in  gambar " :key="i">
                        <div
                            class="w-[540px] h-[282px] bg-white rounded-2xl drop-shadow-md mt-[50px] border flex justify-between">
                            <div class="p-4">
                                <img class="w-[120px] my-[20px] border" :src="`../../../public/` + item.name" alt="" />
                                <p class=" text-gray-600 text-[12px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam laudantium libero, ex reprehenderit delectus optio
                                    molestias pariatur. Pariatur sit, asperiores nisi dolorem
                                    debitis laborum consequatur blanditiis incidunt similique omnis
                                    praesentium.
                                    <span class="text-black font-bold">{{ item.name }}</span>.
                                </p>
                            </div>
                            <div class="items-center w-[705px] h-[175px] rounded-2xl border m-[17px] my-8 bg-[#D9D9D9]">
                                <div class="w-full">
                                    <img class="" src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </split-carousel-item>
                </split-carousel>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

let gambar = [
    { id: 1, name: "Group11.png" },
    { id: 2, name: "Group12.png" },
    { id: 3, name: "Group13.png" },
    { id: 4, name: "Group11.png" },
    { id: 5, name: "Group12.png" }
];
</script>
<style></style>