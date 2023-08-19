<template>
    <div class="h-full w-screen flex justify-between items-center ">
        <form @submit.prevent="login" class=" font-inter w-[329px] mx-16 ">
            <h1 class=" text-3xl my-5"> Wellcome to <span class=" text-red-600">JRUHUB</span></h1>
            <p class=" text-[14px] font-thin"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa
                veritatis sapiente
                saepe dicta maiores
            </p>
            <div class=" mb-7 mt-19">
                <div class=" my-8">
                    <input v-model="email" class="border w-[329px] h-[60px] bg-[#FAFAFA]" type="email" placeholder=" Email">
                </div>
                <div>
                    <input v-model="password" class=" border w-[329px] h-[60px] bg-[#FAFAFA]" type="password"
                        placeholder=" Password">
                </div>
            </div>
            <p v-if="error" class=" text-red-600">{{ error }}</p>
            <div class="mb-16">
                <input type="checkbox">
                <label class=" text-[14px] text-[#A3A3A3] mx-2">Remember Me</label>
            </div>
            <div class=" flex justify-between items-center">
                <a class=" text-red-400 text-[15px]" href="#">Forget Password ?</a>
                <button type="submit"
                    class=" border border-red-600 bg-red-600 px-[50px] py-[10px] text-white text-[20px]">Login</button>
            </div>
            <div class=" w-full text-center pt-28 py-7 shadow-sm text-[14px]">
                <span> © 2023 <span class=" text-red-500 text-[13px]">jruhub.com.</span> All rights reserved.</span>
            </div>
        </form>
        <div class=" w-[1220px]">
            <img src="../assets/Rectangle 12.png" class=" w-full h-full object-contain" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const email = ref("");
const password = ref("");
const error = ref("")


const login = () => {
    if (!email.value || !password.value) {
        error.value = "Email dan Password harus di isi"
    } else {
        router.push({ name: 'HalUtama' })
    }
}

</script>
<style></style>