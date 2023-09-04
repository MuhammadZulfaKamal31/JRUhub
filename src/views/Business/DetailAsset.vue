<template >
    <div class=" h-full w-full p-7 pt-20 md:p-14 flex flex-col gap-8"
        :class="sideBar.openSideBar ? 'md:pr-[375px] ' : ' md:px-24'">
        <div class=" md:h-[855px] w-full flex flex-col md:flex-row gap-8">
            <!-- Asset -->
            <div class=" bg-white w-full md:h-[748px] p-10 md:px-20 rounded-md">
                <div class=" flex justify-between">
                    <h1 class=" text-[32px] font-semibold">Asset</h1>
                    <i class="fa-solid fa-up-right-from-square text-2xl"></i>
                </div>
                <table class="w-full mt-12">
                    <thead>
                        <tr class="">
                            <th class="text-[16px] font-[600] text-start ">Name</th>
                            <th class="text-[16px] font-[600] text-end">Kondisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in asset" class="">
                            <td class=" py-4 pt-8  flex items-center gap-3 text-red-600 text-[15px] font-[600]">
                                <img class=" w-[40px] h-[40px] rounded-full" src="../../assets/Rectangle10.png" alt="">
                                {{ i.asset_name }}
                            </td>
                            <td class="text-[15px] font-[600] text-end">{{ i.asset_condition }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class=" w-full h-full bg-white rounded-md p-10">
                <h1 class=" text-[32px] font-semibold mb-11"> Tambah Asset</h1>
                <form action="">
                    <div class=" py-3">
                        <input type="text" placeholder=" Nama Asset" alt="" class=" h-[60px] w-full border bg-[#FAFAFA]">
                    </div>
                    <div class=" py-3">
                        <input type="text" placeholder=" Jumlah Asset" alt="" class=" h-[60px] w-full border bg-[#FAFAFA]">
                    </div>
                    <div class=" py-3">
                        <input type="text" placeholder=" Tanggal Pembelian" alt=""
                            class=" h-[60px] w-full border bg-[#FAFAFA]">
                    </div>
                    <div class=" py-3">
                        <input type="text" placeholder=" Kondisi Asset" alt="" class=" h-[60px] w-full border bg-[#FAFAFA]">
                    </div>
                    <div class=" py-3">
                        <input type="text" placeholder=" Nota Pembelian" alt=""
                            class=" h-[60px] w-full border bg-[#FAFAFA]">
                    </div>
                    <div class=" py-3">
                        <input type="text" placeholder=" Pilih Gamabar Asset" alt=""
                            class=" h-[60px] w-full border bg-[#FAFAFA]">
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
        <!-- Detail Asset -->
        <div class=" md:h-[744px] w-full bg-white rounded-md p-10">
            <h1 class=" text-[32px] font-semibold"> Detail Asset</h1>
            <div class=" h-full w-full flex gap-10">
                <div v-for="i in asset" class=" w-full h-full">
                    <div class=" my-10 mb-[80px] md:mb-0">
                        <label for="" class=" text-[14px] font-semibold py-5"> Nama Asset</label>
                        <p class=" text-[29px] md:text-[32px] font-semibold"> {{ i.asset_description }}</p>
                    </div>
                    <div class=" my-10">
                        <label for="" class=" text-[14px] font-semibold py-5"> Kondisi</label>
                        <p class=" text-[29px] md:text-[32px] font-semibold"> {{ i.asset_condition }}</p>
                    </div>
                    <div class=" my-10">
                        <label for="" class=" text-[14px] font-semibold py-5"> Jumlah Asset</label>
                        <p class=" text-[29px] md:text-[32px] font-semibold"> {{ i.asset_quantity }} </p>
                    </div>
                    <div class=" my-10">
                        <label for="" class=" text-[14px] font-semibold py-5"> Tanggal Pembelian</label>
                        <p class=" text-[27px] md:text-[32px] font-semibold"> {{ i.asset_buy_date }}</p>
                    </div>
                </div>
                <div v-for="i in asset" class=" h-full w-full">
                    <div>
                        <p class=" text-[14px] font-semibold my-9"> Foto Nota Pembelian</p>
                        <img :src="`${baseImageUrl}` + i.asset_receipt" alt="" class=" w-[170px] h-[125px]">
                    </div>
                    <div>
                        <p class=" text-[14px] font-semibold my-9"> Foto Asset</p>
                        <div class=" flex flex-wrap overflow-auto gap-10">
                            <img :src="`${baseImageUrl}` + i.asset_photo" alt="" class=" w-[170px] h-[125px]">
                            <img :src="`${baseImageUrl}` + i.asset_photo" alt="" class=" w-[170px] h-[125px]">
                            <img :src="`${baseImageUrl}` + i.asset_photo" alt="" class=" w-[170px] h-[125px]">
                            <img :src="`${baseImageUrl}` + i.asset_photo" alt="" class=" w-[170px] h-[125px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" w-full text-start p-5 pl-[60px] md:pl-[65px] shadow-sm">
            <span> © 2023 <span class=" text-red-500 text-[14px]">jruhub.com.</span> All rights reserved.</span>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useSidebarStore } from '../../stores/Store';
import { useAssetBusines } from '../../stores/Bisnis/AssetBisnis'

const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;
const sideBar = useSidebarStore();

//=============================== fetch api =========================
const assetStore = useAssetBusines();

const asset = assetStore.AssetBusiness;

const assetDescription = assetStore.AssetDescription;

console.log("12356" + assetDescription)


onMounted(() => {
    assetStore.fetchBisnis();
})

</script>
<style></style>