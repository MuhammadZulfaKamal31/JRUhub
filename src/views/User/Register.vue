<template>
    <div class="h-screen w-screen flex pt-5 md:items-center justify-center">
        <div class=" h-[600px] w-[350px] md:h-[90%] md:w-[427px] border border-[#EB666B] rounded-xl">
            <form @submit.prevent="register" method="POST" class=" font-inter md:w-[329px] mx-5 md:mx-12 relative">
                <h1 class=" text-2xl md:text-3xl text-center my-3 md:mt-10"> Wellcome to<span
                        class=" text-red-600">JRUHUB</span>
                </h1>
                <p class=" text-[12px] md:text-[14px] font-thin text-center"> Lorem ipsum dolor sit amet consectetur adipi
                    elit.
                    Autem culpa
                    veritatis sapiente
                    saepe dicta maiores saepe dicta maiores
                </p>
                <div class=" md:mb-7 md:mt-19">
                    <div class=" my-5">
                        <input v-model="username" class="border w-full  h-[55px] md:h-[60px] bg-[#FAFAFA]" type="text"
                            placeholder=" Username">
                    </div>
                    <div class=" my-5">
                        <input v-model="email" class="border w-full h-[55px] md:h-[60px] bg-[#FAFAFA]" type="email"
                            placeholder=" Email">
                    </div>
                    <div class=" my-5">
                        <input v-model="password" class="border w-full h-[55px] md:h-[60px] bg-[#FAFAFA]" type="password"
                            placeholder=" Password">
                    </div>
                    <div class=" my-5">
                        <input v-model="password_confirm" class=" border w-full h-[55px] md:h-[60px] bg-[#FAFAFA]"
                            type="password" placeholder=" Confirm Password">
                    </div>
                    <p v-if="error" class=" text-red-600 text-center -my-2">{{ error }}</p>
                </div>
                <div class=" my-4 flex items-center">
                    <input class=" h-[20px] w-[20px] bg-[#FAFAFA]" type="checkbox">
                    <label class=" text-[11px] md:text-[13px] text-[#A3A3A3] mx-2">I agree with the terms and conditions
                        Register</label>
                </div>
                <div class=" mt-8 md:mt-[50px]">
                    <button type="submit"
                        class=" border border-red-600 bg-red-600 w-full h-[50px] text-white text-[20px]">Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const password_confirm = ref("")
const error = ref("")

const register = async () => {
    if (password.value !== password_confirm.value) {
        error.value = "Password dan Confirm Password tidak sama"
    } else {
        try {
            const response = await axios.post(`https://ac20-103-162-237-62.ngrok-free.app/api/v1/user/signup`, {
                username: username.value,
                email: email.value,
                password: password.value,
                password_confirm: password_confirm.value
            })

            console.log("response " + response);
            router.push({ name: 'Login', })
        } catch (err) {
            error.value = " User dan Email Sudah terdaftar, Mohon periksa inputan anda"
            console.log(err)
        }
    }
}

</script>
<style></style>