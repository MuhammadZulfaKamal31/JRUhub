<!-- hati hati dalam penggunaan lang, karena itu masalah error  -->
<template>
    <div class=" pt-20 md:pt-16  flex flex-col gap-8 flex-wrap "
        :class="openSideBar.openSideBar ? ' p-12  md:pr-[370px] duration-300' : 'p-12 md:p-20 md:pl-24 md:pr-24 duration-300 '">
        <!-- crackinCode -->
        <div class=" w-full h-[700px] md:h-[475px] bg-white rounded-md p-7">
            <div class=" flex justify-between">
                <div class=" flex items-center md:h-[150px]">
                    <img class=" h-11 md:h-32" src="../../../assets/Rectangle38.png" alt="">
                    <div class="p-4">
                        <h2 class=" text-[20px] md:text-[40px] font-[700]"> CrackinCode</h2>
                        <p class=" text-[15px] md:text-[20px] md:w-[300]">Est.30 juni 2022</p>
                    </div>
                </div>
                <span class="fa-solid fa-pen-to-square md:text-[25px]"></span>
            </div>
            <p class=" text-[14px] md:text-[17px] p-2 md:p-9 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Omnis ullam
                eaque
                sapiente
                voluptate!
                Nam
                laboriosam dicta magni amet cum explicabo quod, voluptatem magnam ducimus qui. Tempora distinctio quia
                cumque doloribus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, placeat sapiente!
                Temporibus odio in ipsa quam dolores voluptas quia possimus impedit doloribus explicabo. Nisi impedit
                amet eos praesentium officiis in? Lorem ipsum dolor sit,
                <br>amet consectetur adipisicing elit. Libero
                dignissimos consequatur repudiandae animi, ab suscipit assumenda vero cumque officiis quasi nostrum fuga
                earum nisi hic vel. Atque officia tenetur voluptatibus.
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]">30%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20% </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 10%</td>
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
                            <th class="text-[16px] font-[600] text-start">Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]">30%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20% </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 20%</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                CrackinCode
                            </td>
                            <td class="text-[15px] font-[600]"> 10%</td>
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]">admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Karyawan
                            </td>
                            <td class="text-[15px] font-[600]"> admin</td>
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
                    <tbody>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]">Baik</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4 flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Boncel </td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Baik</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Hilang</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../../assets/Rectangle10.png" alt="">
                                Asset
                            </td>
                            <td class="text-[15px] font-[600]"> Hilang</td>
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
                <tbody>
                    <tr class="">
                        <td class=" py-4  flex items-center gap-3 text-[14px] md:text-[15px] font-[600]">
                            Menjadikan Kas menjadi 100 juta
                        </td>
                        <td class="text-[14px] md:text-[15px] font-[600]"> Februari 2024</td>
                        <td class="text-[14px] md:text-[15px] font-[600]">
                            <span class=" bg-[#00FFFF] p-2">On Going</span>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4 flex items-center gap-3 text-[14px] md:text-[15px] font-[600]">
                            Beli Asset
                        </td>
                        <td class="text-[14px] md:text-[15px] font-[600]"> Maret 2023 </td>
                        <td class="text-[14px] md:text-[15px] font-[600]">
                            <span class=" bg-[#8FFF00] p-2"> Completed</span>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4  flex items-center gap-3 text-[14px] md:text-[15px] font-[600]">
                            Beli Asset
                        </td>
                        <td class="text-[14px] md:text-[15px] font-[600]"> Maret 2023</td>
                        <td class="text-[14px] md:text-[15px] font-[600]">
                            <span class=" bg-[#ED1C24] p-2"> Overdue </span>
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
import { useSidebarStore } from '../../../stores/Store';

const openSideBar = useSidebarStore()

</script>
<style ></style>