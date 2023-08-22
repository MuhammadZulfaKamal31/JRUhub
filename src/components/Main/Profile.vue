<template>
    <div class='flex flex-col gap-5 font-inter pr-[10%] pt-2 ' :class="sideBar.openSideBar ? 'px-[5%]' : 'px-[7%]'">
        <div class='flex h-[474px] mt-[40px] justify-between gap-6'>
            <!-- profile -->
            <div class=" h-full bg-[#FFFFFF] p-7 rounded-md">
                <div class=" flex justify-between">
                    <h1 class=" text-[24px] font-[600]"> info Profil</h1>
                    <span class="fa-solid fa-pen-to-square"></span>
                </div>
                <div class=" my-5">
                    <label class="text-gray-400 text-[13px]">Nama</label>
                    <p class=" text-[15px] font-[600]">Mualif Ulil Misbakh</p>
                </div>
                <div class=" my-5">
                    <label class="text-gray-400 text-[13px]">Email</label>
                    <p class=" text-[15px] font-[600]">ulil@crackincode.com</p>
                </div>
                <div class=" my-5">
                    <label class="text-gray-400 text-[13px]">Nomor Telepon</label>
                    <p class=" text-[15px] font-[600]">(+62)85865030447</p>
                </div>
                <div class=" my-5">
                    <label class="text-gray-400 text-[13px]">Alamat</label>
                    <p class=" text-[13px] font-[400]">Jl. Tampomas Sel. No.54, RT.001/RW.002, Petompon, Kec. Gajahmungkur,
                        Kota
                        Semarang, Jawa Tengah 50131</p>
                </div>
                <div class=" my-5">
                    <label class="text-gray-400 text-[13px]">Tahun Bergabung</label>
                    <p class=" text-[15px] font-[600]">Februari 2022</p>
                </div>
            </div>
            <div class=" h-full w-full flex flex-col gap-6">
                <div class=" flex gap-10 h-[725px] w-full rounded-md">
                    <!-- lingkaran -->
                    <div class=" h-full w-[80%] bg-white flex justify-center items-center rounded-md">
                        <img class="h-[175px] w-[175px]" src="../../assets/Ellipse21.png" alt="">
                    </div>
                    <!-- pendapatan -->
                    <div class=" h-full w-full px-10 bg-white p-6 rounded-md">
                        <div class=" flex justify-between">
                            <h1 class=" text-xl">Pendapatan</h1>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                        <div class="m-1">
                            <label class=" font-[500] text-[13px] text-slate-400" for="">Gaji</label>
                            <p class=" text-[15px] font-[700]">RP5.000.000</p>
                        </div>
                        <div class="m-1">
                            <label class=" font-[500] text-[13px] text-slate-400" for="">SHU</label>
                            <p class=" text-[15px] font-[700]">RP5.000.000</p>
                        </div>
                        <div class="m-1">
                            <label class=" font-[500] text-[13px] text-slate-400" for="">Total Pendapatan</label>
                            <p class=" text-[15px] font-[700]">RP10.000.000</p>
                        </div>
                    </div>
                </div>
                <!-- curcle -->
                <div class=" h-full w-full bg-white mb-10 rounded-md p-6">
                    <h1 class=" text-2xl">Circle</h1>
                    <div class=" flex items-center my-3">
                        <img class=" h-[70px] w-[70px] rounded-full" src="../../assets/Ellipse21.png" alt="">
                        <div class=" mx-3">
                            <h1 class=" text-xl mb-3">Komune</h1>
                            <p class=" text-[13px]">
                                Jl. Tampomas Sel. No.54, RT.001/RW.002, Petompon, Kec. Gajahmungkur, Kota Semarang, Jawa
                                Tengah 50131</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class='h-[552px] w-full bg-white rounded-md'>
            <h1 class=" text-xl p-7">History</h1>

        </div>
    </div>
    <div class=" w-full text-start p-5 pl-[85px] shadow-sm">
        <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
    </div>
</template>
<script setup>

import { useSidebarStore } from '../../stores/Store';

const sideBar = useSidebarStore()

</script>
<style></style>