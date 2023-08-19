<template >
    <div class=" h-full w-full gap-7 p-14 font-inter">
        <div class=" h-[487px] gap-10 flex mb-6">
            <!-- chart -->
            <div class=" w-full h-full bg-white flex items-center justify-center">
                <DoughnutChart :chart-data="data" :options="options" css-classes="chart-container" />
            </div>
            <!-- form isi -->
            <div class=" w-full h-full bg-white p-8">
                <form action="">
                    <h1 class=" text-[32px] font-[700] mb-5">Tambah Pemilik</h1>
                    <div class=" my-8">
                        <input placeholder=" Pilih User" type="text" class=" w-full h-[57px] border-[2px] bg-[#FAFAFA]">
                    </div>
                    <div class=" my-8">
                        <input placeholder=" Pesentase Kepemilikan" type="text"
                            class=" w-full h-[57px] border-[2px] bg-[#FAFAFA]">
                    </div>
                    <div class=" flex items-center gap-2 my-3">
                        <input type="checkbox" class=" w-[19px] h-[19px] bg-slate-300">
                        <span class=" text-[#A3A3A3] text-[15px]"> Aktif</span>
                    </div>
                    <div class=" flex items-center gap-2 my-3">
                        <input type="checkbox" class=" rounded-md w-[19px] h-[19px] bg-slate-300">
                        <span class=" text-[#A3A3A3] text-[15px]">Tidak Aktif</span>
                    </div>
                    <button type="submit"
                        class=" bg-red-600 p-3 w-full text-center text-[20px] text-white my-10">Login</button>
                </form>
            </div>
        </div>

        <div class=" w-full h-[691px] gap-10 flex">
            <!-- Pemilik -->
            <div class=" w-[87%] h-[487px] bg-white p-10">
                <div class=" flex justify-between">
                    <h1 class=" text-[32px] font-[600]">Pemilik</h1>
                    <i class="fa-solid fa-up-right-from-square text-[25px]"></i>
                </div>
                <div>
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
                                <td class=" font-[600] text-[15px]">{{ dataInteger[0] }}%</td>
                                <td>
                                    <span class="fa-solid fa-pen-to-square"></span>
                                </td>
                                <td>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr class="">
                                <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                                <td class=" font-[600] text-[15px]">{{ dataInteger[1] }}%</td>
                                <td>
                                    <span class="fa-solid fa-pen-to-square"></span>
                                </td>
                                <td>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr class="">
                                <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                                <td class=" font-[600] text-[15px]">{{ dataInteger[2] }}%</td>
                                <td>
                                    <span class="fa-solid fa-pen-to-square"></span>
                                </td>
                                <td>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr class="">
                                <td class=" py-3 text-red-600 text-[15px] font-[600]">Owner #1</td>
                                <td class=" font-[600] text-[15px]">{{ dataInteger[3] }}%</td>
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
            </div>
            <!-- nama pemilik -->
            <div class=" w-full h-full bg-white ">
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { DoughnutChart } from "vue-chart-3"
import { Chart, DoughnutController, ArcElement } from "chart.js"

// Mendaftarkan modul Chart.js yang dibutuhkan
Chart.register(DoughnutController, ArcElement)

// Data nilai-nilai
const dataValues = ref([22, 25, 10, 15])

// Menghitung total nilai untuk menghitung persentase
const total = computed(() => dataValues.value.reduce((acc, value) => acc + value, 0));

// Menyiapkan data untuk grafik Donut
const data = computed(() => ({
    datasets: [
        {
            data: dataValues.value.map(value => ((value / total.value) * 100)),
            backgroundColor: ["#ff7f50", "#ffffff", "#ff6347", "#ff5330", "#f5afa3"]
        }
    ],
    labels: dataValues.value.map(value => `${Math.round((value / total.value) * 100)}%`)
    // Menambahkan label dalam format persen
}));

const persentaseData = data.value.datasets[0].data;
const dataInteger = persentaseData.map(persentase => Math.round(persentase));
console.log(dataInteger)




// Opsi grafik
const options = ref({
    plugins: {
        title: {
            // text: "Doughnut"
        }
    }
})
</script>

<style></style>