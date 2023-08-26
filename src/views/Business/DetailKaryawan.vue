<template >
    <div class=" w-full h-full md:p-11 px-7 pt-24 md:pt-14 flex flex-col md:flex-row gap-7"
        :class="sideBar.openSideBar ? ' md:pr-[375px] duration-300' : ' md:px-24 duration-300'">
        <div class=" md:w-[90%] h-full flex flex-col gap-10">
            <!-- karyawan -->
            <div class=" w-full h-[428px] bg-white p-10 rounded-md">
                <h1 class=" text-[32px] font-[600]">Karyawan</h1>
                <table class=" w-full mt-10">
                    <thead>
                        <tr class="">
                            <td class=" py-5 text-[17px] font-[600]">Name</td>
                            <td class=" text-[17px] font-[600]">Share</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                            <td class=" font-[600] text-[15px]">30%</td>
                            <td>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash"></i>
                            </td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                            <td class=" font-[600] text-[15px]">30%</td>
                            <td>
                                <span class="fa-solid fa-pen-to-square"></span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash"></i>
                            </td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                            <td class=" font-[600] text-[15px]">30%</td>
                            <td>
                                <span class="fa-solid fa-pen-to-square"></span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash"></i>
                            </td>
                        </tr>
                        <tr class="">
                            <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                            <td class=" font-[600] text-[15px]">30%</td>
                            <td>
                                <span class="fa-solid fa-pen-to-square"></span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- detil karyawan -->
            <div class=" w-full h-full bg-white p-10 rounded-md">
                <h1 class=" text-[32px] font-[600]"> Detil Karyawan</h1>
                <div class=" md:pl-7 mt-7">
                    <div class=" w-[241px] h-[241px] rounded-full bg-[#D9D9D9]"></div>
                    <div class=" flex md:justify-start">
                        <div class=" py-10 flex flex-col items-center ">
                            <h2 class=" text-[29px] font-[500] py-2">Harsana Budiyanto</h2>
                            <p class="text-[13px] font-[500]"> budiyanto.harsana@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class=" py-5">
                    <label for="" class=" text-[14px] font-[500]"> Posisi</label>
                    <p class=" text-[29px] font-[600]">UI/UX DESIGNER</p>
                </div>
                <div class=" py-5">
                    <label for="" class=" text-[14px] font-[500]"> Gaji Pokok</label>
                    <p class=" text-[29px] font-[600]">Rp1.000.000,00-</p>
                </div>
                <div class=" py-5">
                    <label for="" class=" text-[14px] font-[500]"> Uang Makan</label>
                    <p class=" text-[29px] font-[600]">Rp500.000,00-</p>
                </div>
                <div class=" py-5">
                    <label for="" class=" text-[14px] font-[500]"> Tahun Masuk</label>
                    <p class=" text-[29px] font-[600]">Februari 2022</p>
                </div>
                <div class=" py-5">
                    <label for="" class=" text-[14px] font-[500]"> Jumlah Kesehatan</label>
                    <p class=" text-[29px] font-[600]"> BPJS</p>
                </div>
            </div>
        </div>
        <!-- Tambah Karyawan -->
        <div class=" w-full h-full bg-white p-10 rounded-md">
            <h1 class=" text-[32px] font-[500] pb-5">Tambah Karyawan</h1>
            <form action="">
                <div class=" py-4">
                    <input placeholder=" Pilih User" type="text" class=" h-[58px] w-full bg-[#FAFAFA] border">
                </div>
                <div class=" py-4">
                    <input placeholder=" Posisi" type="text" class=" h-[58px] w-full bg-[#FAFAFA] border">
                </div>
                <div class=" py-4">
                    <input placeholder=" Gaji Pokok" type="text" class=" h-[58px] w-full bg-[#FAFAFA] border">
                </div>
                <div class=" py-4">
                    <input placeholder=" Uang Makan" type="text" class=" h-[58px] w-full bg-[#FAFAFA] border">
                </div>
                <div class=" py-4">
                    <input placeholder=" Tahun Masuk" type="text" class=" h-[58px] w-full bg-[#FAFAFA] border">
                </div>
                <div class=" flex items-center gap-2 my-3">
                    <input type="checkbox" class=" w-[19px] h-[19px] bg-slate-300">
                    <span class=" text-[#A3A3A3] text-[15px]"> Aktif</span>
                </div>
                <div class=" flex items-center gap-2 my-3 pb-7">
                    <input type="checkbox" class=" rounded-md w-[19px] h-[19px] bg-slate-300">
                    <span class=" text-[#A3A3A3] text-[15px]">Tidak Aktif</span>
                </div>
                <button class=" bg-red-600 p-4 text-center w-full text-white">Simpan</button>
            </form>
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
<style setup></style>