<template>
    <div class="fixed w-full z-10">
        <div
            class="bg-white text-black py-8 md:py-[50px] pl-[20px] pr-[20px] md:pl-[120px] md:pr-6 shadow flex md:flex-row  flex-col justify-between items-center">
            <div class="flex md:items-center md:flex-row flex-col">
                <div class="mr-1 justify-between w-[300px] md:w-full flex" :class="dropDown ? '' : ' ml-[47px]'">
                    <div>
                        <img src="../assets/image1.png" alt="" class="h-[28px] w-[100px]" />
                    </div>
                    <div class=" md:hidden visible">
                        <i @click="togle" class="fa-solid fa-bars text-black text-2xl"></i>
                    </div>
                </div>

                <ul class=" md:visible md:flex md:flex-row mt-5 md:m-0  flex-col px-6 w-full text-[15px] "
                    :class="dropDown ? ' hidden duration-300' : ' visible duration-300'">
                    <li class=" px-32 md:px-4 py-2">
                        <a href="#">JRUWAY</a>
                    </li>
                    <li class=" px-32 md:px-4 py-2">
                        <a href="#">JRUWORK</a>
                    </li>
                    <li class=" px-32 md:px-4 py-2">
                        <a href="#">JRUPOS</a>
                    </li>
                    <li class=" px-32 md:px-4 py-2">
                        <a href="#">JRUINSTITUT</a>
                    </li>
                </ul>
            </div>
            <div class="md:flex gap-4 pe-4 md:pe-20 md:flex-row flex-col md:visible"
                :class="dropDown ? 'hidden duration-300' : ' visible duration-300'">
                <router-link to="/user/login"
                    class="text-white text-center border border-red-600 block px-12 m-5 md:m-0  md:px-4 py-1 bg-red-600">
                    Masuk
                </router-link>
                <router-link to="/user/register"
                    class="text-red-600 text-center border border-red-600 block px-12 m-5 md:m-0  md:px-4 py-1 ">
                    Daftar
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const dropDown = ref(true)

const togle = () => {
    dropDown.value = !dropDown.value
}

</script>
<style></style>
  