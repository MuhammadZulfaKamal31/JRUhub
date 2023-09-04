<template>
    <div class="h-full w-screen flex justify-between items-center">
        <div class=" mt-[100px]">
            <div class=" border border-red-600 md:border-none m-7 md:m-0 p-5 md:p-0">
                <!-- form -->
                <form @submit.prevent="login" method="POST" class=" font-inter w-full md:w-[329px] md:mx-16 ">
                    <h1 class=" text-center md:text-start text-2xl md:text-3xl my-5"> Wellcome to <span
                            class=" text-red-600">JRUHUB</span></h1>
                    <p class=" text-center text-[12px] md:text-[14px] font-thin"> Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Autem
                        culpa
                        veritatis sapiente
                        saepe dicta maiores
                    </p>
                    <div class=" mb-7 mt-19">
                        <div class=" my-8">
                            <input v-model="userName" class="border w-full md:w-[329px] h-[60px] bg-[#FAFAFA]" type="text"
                                placeholder=" Username">
                        </div>
                        <div>
                            <input v-model="password" class=" border w-full md:w-[329px] h-[60px] bg-[#FAFAFA]"
                                type="password" placeholder=" Password">
                        </div>
                    </div>
                    <p v-if="error" class=" text-red-600">{{ error }}</p>
                    <div class="mb-16">
                        <input type="checkbox">
                        <label class=" text-[14px] text-[#A3A3A3] mx-2">Remember Me</label>
                    </div>
                    <div class=" md:flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class=" text-end py-5 md:py-0">
                            <a class="text-center text-red-400 text-[15px]" href="#">Forget Password ?</a>
                        </div>
                        <button type="submit"
                            class=" border border-red-600 bg-red-600 w-full p-2 md:w-[154px] text-white text-[20px]">
                            Login
                        </button>
                    </div>
                </form>

            </div>
            <div class=" w-full text-center md:pt-24 py-7 shadow-sm text-[14px]">
                <span> © 2023 <span class=" text-red-500 text-[13px]">jruhub.com.</span> All rights reserved.</span>
            </div>
        </div>
        <div class=" hidden md:block md:w-[1220px]">
            <img src="../../../public/Rectangle12.png" class="w-full h-full object-contain" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const userName = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
    // console.log("login", import.meta.env.VITE_BASE_API_URL)
    if (!userName.value || !password.value) {
        error.value = "Username dan Password harus di isi";
    } try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/user/signin`, {
            username: userName.value,
            password: password.value
        });

        const token = response.data.access;
        localStorage.setItem('token', token);

        const username = 'Dashboard';
        router.push({ name: 'HalUtama', params: { judul: username } });
    } catch (err) {
        error.value = "Login gagal. Periksa username dan password Anda.";
        console.error(err);
    }
}
</script>

<style></style>
