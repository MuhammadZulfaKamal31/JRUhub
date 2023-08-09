<template >
    <div class=" flex justify-between min-h-screen items-center ">
        <div class="w-[455px] m-[10%]">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, consequuntur enim. Accusantium ullam
                accusamus in maiores, ipsam saepe alias necessitatibus natus perferendis repellat, similique assumenda
                pariatur laborum facere culpa reprehenderit?</p>
        </div>
        <div class="w-[540px] h-[300px] mr-10">
            <split-carousel :height="350" :displayAmount="1" class="border border-blue-400">
                <split-carousel-item v-for="item in 8" :key="item">
                    <div
                        class="w-[450px] h-[220px] bg-white rounded-lg shadow-lg mt-[70px] border border-red-600 flex justify-between">
                        <div class="p-4 ">
                            <img class=" w-[120px] my-[20px]" src="../assets/image 1.png" alt="">
                            <p class="text-gray-600 text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam
                                laudantium libero, ex reprehenderit delectus optio molestias pariatur. Pariatur sit,
                                asperiores nisi dolorem debitis laborum consequatur blanditiis incidunt similique omnis
                                praesentium. <span class=" text-black font-bold">{{ item }}</span>.</p>
                        </div>
                        <div class=" items-center w-[700px] ">
                            <div class=" w-full">
                                <img class="" src="../assets/image 2.png" alt="">
                            </div>
                        </div>
                    </div>
                </split-carousel-item>
            </split-carousel>
        </div>
    </div>
</template>
<script>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
export default {
    components: {
        SplitCarousel,
        SplitCarouselItem
    }
};
</script>
<style>
/* #app1 {
    width: 8000px;
    margin: 600px auto;
} */
</style>