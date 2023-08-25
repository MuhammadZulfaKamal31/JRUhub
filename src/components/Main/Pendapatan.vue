<template>
    <div class=" flex flex-col gap-4 py-[5%] font-inter px-5"
        :class="sideBar.openSideBar ? 'md:pr-[350px] pr-[8%]' : 'md:px-[10%]'">
        <div class=" flex md:flex-row flex-col justify-around gap-10 md:gap-20 md:h-[180px] w-full pt-20 md:pt-0 px-7">
            <div class=" flex justify-center items-center w-full h-full bg-white rounded">
                <div>
                    <label class=" text-[24px] font-[500] text-gray-500">Total Gaji</label>
                    <p class=" my-4 md:my-6 text-[24px] font-[600]">Rp5.000.000</p>
                </div>
            </div>
            <div class=" flex justify-center items-center w-full h-full bg-white rounded">
                <div>
                    <label class=" text-[24px] font-[500] text-gray-500">Total SHU</label>
                    <p class=" my-4 md:my-6 text-[24px] font-[600]">Rp5.000.000</p>
                </div>
            </div>
            <div class=" flex justify-center items-center w-full h-full bg-white rounded">
                <div>
                    <label class=" text-[24px] font-[500] text-gray-500">Total Pendapatan</label>
                    <p class=" my-4 md:my-6 text-[24px] font-[600]">Rp10.000.000</p>
                </div>
            </div>


        </div>
        <div class=" flex flex-col md:flex-row gap-12 md:h-[500px] w-full mt-8 px-8">
            <!-- gaji -->
            <div class="h-full w-full bg-white p-4 px-5 md:p-7 md:px-11">
                <h1 class=" text-2xl md:text-4xl font-bold mb-4">Gaji</h1>
                <table class="w-full md:mt-9">
                    <thead>
                        <tr class=" py-3 md:py-4">
                            <th class="  text-[16px] font-600 text-start ">Sumber</th>
                            <th class="text-[16px] font-600 text-start">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- SHU -->
            <div class="h-full w-full bg-white p-4 px-5 md:p-7 md:px-11">
                <h1 class=" text-2xl md:text-4xl font-bold mb-4">SHU</h1>
                <table class="w-full md:mt-9">
                    <thead>
                        <tr class=" py-3 md:py-4">
                            <th class="  text-[16px] font-600 text-start ">Sumber</th>
                            <th class="text-[16px] font-600 text-start"> SHARE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px] overflow-auto">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 md:py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                        <tr class="">
                            <td class=" py-4  flex items-center gap-1 md:gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full"
                                    src="../../assets/Rectangle10.png" alt="">
                                <span class=" text-[13px] md:text-[15px]">
                                    CrackinCode
                                </span>
                            </td>
                            <td class=" text-[13px] md:text-[15px] font-[600]">Rp5.OOO.OOO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[60px] md:pl-[65px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>
import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore();

</script>
<style></style>