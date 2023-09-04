<template>
    <div class=" h-full w-full pt-20 px-7  md:p-14  gap-6 flex flex-col "
        :class="sideBar.openSideBar ? 'md:pr-[375px]' : ' md:px-24'">
        <div class=" md:h-[487px] w-full flex flex-col md:flex-row gap-10">
            <!-- Pendamping -->
            <div class="h-full  w-full bg-white p-8 rounded-md">
                <div class=" flex justify-between">
                    <h1 class=" text-[29px] md:text-[32px] font-semibold">Pendamping</h1>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-10">
                            <th class="text-[16px] font-[600] text-start ">Name</th>
                            <th class="text-[16px] font-[600] text-start">Pendamping</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in detailPendamping">
                        <tr class="">
                            <td class=" py-4 pt-6  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle10.png" alt="">
                                {{ i.companion_user.username }}
                            </td>
                            <td class="text-[15px] font-[600]">{{ i.companion_as.name }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <!-- {{ detailPendamping }} -->
            <!-- Tambah Pendamping -->
            <div class=" h-full w-full bg-white p-8 rounded-md">
                <h1 class=" text-[29px] md:text-[32px] font-semibold"> Tambah Pendamping</h1>
                <form action="">
                    <div class=" py-4 pt-12">
                        <input type="text" placeholder=" Pilih User" class="h-[58px] w-full bg-[#FAFAFA] border">
                    </div>
                    <div class=" py-4">
                        <input type="text" placeholder=" Pilih User" class="h-[58px] w-full bg-[#FAFAFA] border">
                    </div>
                    <div class=" flex items-center gap-2 py-3">
                        <input type="checkbox" class=" h-[17px] w-[17px]">
                        <span class=" text-[#A3A3A3] text-[13px] font-medium"> Aktif</span>
                    </div>
                    <div class=" flex items-center gap-2 py-3">
                        <input type="checkbox" class=" h-[17px] w-[17px]">
                        <span class=" text-[#A3A3A3] text-[13px] font-medium"> Tidak Aktif</span>
                    </div>

                    <button type=" submit" class=" mt-5 w-full p-3 bg-red-600 text-white text-[20px] font-semibold">
                        Login
                    </button>
                </form>
            </div>
        </div>
        <!-- Detail Pendamping -->
        <div class=" flex md:w-[48%] h-[600px] gap-10">
            <div class=" h-full w-full bg-white p-8 rounded-md">
                <div class=" flex flex-col items-center" v-for="i in detailPendamping">
                    <h1 class=" text-[29px] md:text-[32px] font-semibold py-6">Detail Pendamping</h1>
                    <div class=" py-5">
                        <div class=" h-[241px] w-[241px] bg-[#D9D9D9] rounded-full">
                        </div>
                    </div>
                    <div class=" flex flex-col items-center pt-6">
                        <h1 class=" text-[29px] md:text-[32px]  font-semibold"> {{ i.companion_user.username }}</h1>
                        <p class=" text-[20px]">{{ i.companion_as.name }}</p>
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
import { onMounted } from 'vue';
import { useSidebarStore } from '../../stores/Store';
import { useDetailPendamping } from '../../stores/Bisnis/DetailPendamping.mjs';

const sideBar = useSidebarStore();

//============================= fetch api====================================

const detailPendampingStore = useDetailPendamping();
const detailPendamping = detailPendampingStore.DetailPendamping;

onMounted(() => {
    detailPendampingStore.fetchBisnis()
})

</script>
<style ></style>