import { Chart, Legend, Title, Tooltip } from "chart.js";

Chart.register(Title, Tooltip);

// Chart.defaults.plugins.tooltip.callbacks.label = function (tooltipItem) {
//     // Menggunakan Math.round untuk membulatkan nilai ke integer
//     const value = Math.round(tooltipItem.parsed);
//     return value.toString(); // Mengembalikan nilai sebagai string
// };

// Chart.defaults.plugins.title.display = true;

// Kemudian Anda dapat membuat grafik Anda seperti biasa
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'pie', // Ganti dengan jenis grafik Anda
//     data: data, // Ganti dengan data grafik Anda
//     options: {
//         // Opsi lainnya
//     }
// });
