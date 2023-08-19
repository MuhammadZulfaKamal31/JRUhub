<!-- hati hati dalam penggunaan lang, karena itu masalah error  -->
<template>
    <div class=" flex flex-col gap-8 " :class="openSideBar.openSideBar ? ' p-16 pr-24' : 'p-16 pl-24'">
        <div class=" w-full h-[475px] bg-white rounded-md p-7">
            <div class=" flex justify-between ">
                <div class=" flex items-center h-[150px]">
                    <img src="../../assets/Rectangle 38.png" alt="">
                    <div class="p-4">
                        <h2 class=" text-[40px] font-[700]"> CrackinCode</h2>
                        <p class="text-[20px] w-[300]">Est.30 juni 2022</p>
                    </div>
                </div>
                <span class="fa-solid fa-pen-to-square text-[25px]"></span>
            </div>
        </div>
        <div class=" flex gap-12 w-full h-[505px] px-4">
            <!-- pemilik -->
            <div class=" w-full h-full bg-white rounded-md p-7 pl-[50px]">
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]">30%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20% </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 10%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- pendamping -->
            <div class=" w-full h-full bg-white rounded-md p-7 pl-[50px]">
                <div class=" flex justify-between">
                    <h4 class=" text-[32px] font-[600]"> Pendamping</h4>
                    <i class="fa-solid fa-up-right-from-square text-xl"></i>
                </div>
                <table class="w-full mt-9">
                    <thead>
                        <tr class=" py-4">
                            <th class=" text-[16px] font-[600] text-start ">Name</th>
                            <th class="text-[16px] font-[600] text-start">Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]">30%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20% </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 10%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class=" flex gap-12 w-full h-[565px] px-4">
            <!-- karyawan -->
            <div class=" w-full h-full bg-white rounded-md p-7 pl-[50px]">
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]">admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- asset -->
            <div class=" w-full h-full bg-white rounded-md p-7 pl-[50px]">
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]">Baik</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Boncel </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Baik</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Hilang</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle 10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Hilang</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class=" w-full h-[389px] bg-white rounded-md p-7">
            <h1 class=" text-[32px] font-[600]"> Target & Pencapaian</h1>
            <table class="w-full mt-9">
                <thead>
                    <tr class=" py-4">
                        <th class=" text-[20px] font-[600] text-start ">Deskripsi</th>
                        <th class=" text-[20px] font-[600] text-start ">Target</th>
                        <th class="text-[20px] font-[600] text-start">Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td class=" py-4  flex items-center gap-3 text-[15px] font-[600]">
                            Menjadikan Kas menjadi 100 juta
                        </td>
                        <td class="text-[15px] font-[600]"> Februari 2024</td>
                        <td class="text-[15px] font-[600]">
                            <span class=" bg-[#00FFFF] p-2">On Going</span>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4 flex items-center gap-3 text-[15px] font-[600]">
                            Beli Asset
                        </td>
                        <td class="text-[15px] font-[600]"> Maret 2023 </td>
                        <td class="text-[15px] font-[600]">
                            <span class=" bg-[#8FFF00] p-2"> Completed</span>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4  flex items-center gap-3 text-[15px] font-[600]">
                            Beli Asset
                        </td>
                        <td class="text-[15px] font-[600]"> Maret 2023</td>
                        <td class="text-[15px] font-[600]">
                            <span class=" bg-[#ED1C24] p-2"> Overdue </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[85px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>
import { useSidebarStore } from '../../stores/Store';

const openSideBar = useSidebarStore()

</script>
<style ></style>