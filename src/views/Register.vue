<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div class=" h-[500px] w-[350px] md:h-[665px] md:w-[427px] border border-[#EB666B] rounded-xl">
            <form @submit.prevent="register" class=" font-inter w-[329px] mx-12 relative">
                <h1 class=" text-3xl my-3 mt-10"> Wellcome to <span class=" text-red-600">JRUHUB</span></h1>
                <p class=" text-[14px] font-thin text-center"> Lorem ipsum dolor sit amet consectetur adipi elit.
                    Autem culpa
                    veritatis sapiente
                    saepe dicta maiores saepe dicta maiores
                </p>
                <div class=" mb-7 mt-19">
                    <div class=" my-5">
                        <input v-model="firstName" class="border w-[329px] h-[60px] bg-[#FAFAFA]" type="text"
                            placeholder=" Name">
                    </div>
                    <div class=" my-5">
                        <input v-model="lastName" class="border w-[329px] h-[60px] bg-[#FAFAFA]" type="text"
                            placeholder=" Name">
                    </div>
                    <div class=" my-5">
                        <input v-model="email" class="border w-[329px] h-[60px] bg-[#FAFAFA]" type="email"
                            placeholder=" Email">
                    </div>
                    <div class=" my-5">
                        <input v-model="password" class=" border w-[329px] h-[60px] bg-[#FAFAFA]" type="password"
                            placeholder=" Password">
                    </div>
                    <p v-if="error" class=" text-red-600 text-center -my-2">{{ error }}</p>
                </div>
                <div class=" my-4 flex items-center">
                    <input class=" h-[20px] w-[20px] bg-[#FAFAFA]" type="checkbox">
                    <label class=" text-[13px] text-[#A3A3A3] mx-2">I agree with the terms and conditions Register</label>
                </div>
                <div class=" mt-[50px]">
                    <button type="submit"
                        class=" border border-red-600 bg-red-600 w-[329px] h-[50px] text-white text-[20px]">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("")
const error = ref("")

const register = () => {
    if (!firstName.value || !lastName.value) {
        error.value = "Nama Pertama dan Terakhir harus di isi"
    } else if (!email.value || !password.value) {
        error.value = "email dan password harus di isi"
    } else {
        router.push({ name: 'Login' })
    }
}




</script>
<style></style>