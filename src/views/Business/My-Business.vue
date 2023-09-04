<!-- hati hati dalam penggunaan lang, karena itu masalah error  -->
<template>
    <div class=" pt-20 md:pt-16  flex flex-col gap-8 flex-wrap "
        :class="openSideBar.openSideBar ? ' p-12  md:pr-[370px] duration-300' : 'p-12 md:p-20 md:pl-24 md:pr-24 duration-300 '">
        <!-- crackinCode -->
        <div class=" w-full h-[700px] md:h-full bg-white rounded-md p-7">
            <div class=" flex justify-between">
                <div class=" flex items-center md:h-[150px]">
                    <img class=" h-11 md:h-32" :src="'https://ac20-103-162-237-62.ngrok-free.app' + logoBisnis" alt="">
                    <div class="p-4">
                        <h2 class=" text-[20px] md:text-[40px] font-[700]">{{ namaBisnis }}</h2>
                        <p class=" text-[15px] md:text-[20px] md:w-[300]">Est.30 juni 2022</p>
                    </div>
                </div>
                <span class="fa-solid fa-pen-to-square md:text-[25px]"></span>
            </div>
            <p class=" text-[14px] md:text-[17px] p-2 md:p-9 w-full">
                {{ bisnis }}
            </p>
        </div>
        <div class=" flex flex-col md:flex-row gap-12 w-full h-full md:h-[505px] md:px-4">
            <!-- pemilik -->
            <div class=" w-full h-full bg-white rounded-md px-7 p-5 md:p-7 md:pl-[50px]">
                <div class=" flex justify-between">
                    <h4 class=" text-[32px] font-[600]"> Pemilik</h4>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-4">
                            <th class=" text-[16px] font-[600] text-start ">Name</th>
                            <th class="text-[16px] font-[600] text-start">Share</th>
                        </tr>
                    </thead>
                    <tbody v-for="  i  in  pemilik ">
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle10.png" alt="">
                                <router-link :to="`/Layeout/CrackinCode/Detail_Pemilik/${id_bisnis}`">
                                    {{ i.owner_user.username }}
                                </router-link>
                            </td>
                            <td class="text-[15px] font-[600]">{{ i.owner_shares }}%</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <!-- pendamping -->
            <div class=" w-full h-full bg-white rounded-md px-7 p-5 md:p-7 md:pl-[50px]">
                <div class=" flex justify-between">
                    <h4 class=" text-[32px] font-[600]"> Pendamping</h4>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-4">
                            <th class=" text-[16px] font-[600] text-start ">Name</th>
                            <th class="text-[16px] font-[600] text-start">Jenis Pendamping</th>
                        </tr>
                    </thead>
                    <tbody v-for="i in pendamping ">
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle10.png" alt="">
                                <router-link :to="`/Layeout/CrackinCode/Detail_Pendamping/${id_bisnis}`">
                                    {{ i.companion_user.username }}
                                </router-link>
                            </td>
                            <td class="text-[15px] font-[600]">{{ i.companion_as.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class=" flex flex-col md:flex-row gap-12 w-full h-full md:h-[505px] md:px-4">
            <!-- karyawan -->
            <div class=" w-full h-full bg-white rounded-md px-7 p-5 md:p-7 md:pl-[50px]">
                <div class=" flex justify-between">
                    <h4 class=" text-[32px] font-[600]"> Karyawan</h4>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-4">
                            <th class=" text-[18px] font-[600] text-start ">Name</th>
                            <th class="text-[18px] font-[600] text-start">Posisi</th>
                        </tr>
                    </thead>
                    <tbody v-for="  i  in  karyawan ">
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle10.png" alt="">
                                <router-link :to="`/Layeout/CrackinCode/Detail_Karyawan/${i.business_id}`">
                                    {{ i.employee_user.username }}
                                </router-link>
                            </td>
                            <td class="text-[15px] font-[600]">{{ i.employee_position.jabatan }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- asset -->
            <div class=" w-full h-full bg-white rounded-md px-7 p-5 md:p-7 md:pl-[50px]">
                <div class=" flex justify-between">
                    <h4 class=" text-[32px] font-[600]"> Asset</h4>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-4">
                            <th class=" text-[18px] font-[600] text-start ">Name</th>
                            <th class="text-[18px] font-[600] text-start">Kondisi</th>
                        </tr>
                    </thead>
                    <tbody v-for="  i  in  asset ">
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full"
                                    :src="'https://ac20-103-162-237-62.ngrok-free.app' + i.asset_receipt" alt="">
                                <router-link :to="`/Layeout/CrackinCode/Detail_Asset/${i.business_id}`">
                                    {{ i.asset_name }}
                                </router-link>
                            </td>
                            <td class="text-[15px] font-[600]">{{ i.asset_condition }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class=" w-full h-[389px] bg-white rounded-md p-3 md:p-7">
            <h1 class=" text-[25px] md:text-[32px] font-[600]"> Target & Pencapaian</h1>
            <table class="w-full mt-9">
                <thead>
                    <tr class=" py-4">
                        <th class=" text-[17px] md:text-[20px] font-[600] text-start ">Deskripsi</th>
                        <th class=" text-[17px] md:text-[20px] font-[600] text-start ">Target</th>
                        <th class="text-[17px] md:text-[20px] font-[600] text-start">Share</th>
                    </tr>
                </thead>
                <tbody v-for=" i in target">
                    <tr class="">
                        <td class=" py-4  flex items-center gap-3 text-[14px] md:text-[15px] font-[600]">
                            {{ i.target_description }}
                        </td>
                        <td class="text-[14px] md:text-[15px] font-[600]"> {{ i.target_end_date }}</td>
                        <td class="text-[14px] md:text-[15px] font-[600]">
                            <span class=" bg-[#00FFFF] p-2">{{ i.target_status.name }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[65px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>
import { useSidebarStore } from '../../stores/Store';
import { useDetailBusines } from '../../stores/Bisnis/BisnisDetail';
// import { useRouter } from "vue-router";
// import { useBusinessStore } from '../../stores/BusinesStore';
import { onMounted } from 'vue';

const openSideBar = useSidebarStore();

//=====================fetch data ============================
const bisnisStore = useDetailBusines();

const bisnis = bisnisStore.Detaillbusiness;
const namaBisnis = bisnisStore.NamaBisnis;
const logoBisnis = bisnisStore.LogoBisnis;
const id_bisnis = bisnisStore.id_bisnis;


const pemilik = bisnisStore.Pemilik;

const pendamping = bisnisStore.Pendamping;
const karyawan = bisnisStore.Karyawan;
const asset = bisnisStore.Asset;
const target = bisnisStore.TargetBisnis

onMounted(() => {
    bisnisStore.fetchBisnis()
})


</script>
<style ></style>