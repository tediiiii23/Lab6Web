"use strict";
// Demo yang sama di dua halaman. Tanpa defer, demoTarget belum ada dan terjadi TypeError.
const targetDemo = document.getElementById("demoTarget");
targetDemo.textContent = "Berhasil: teks diubah oleh JavaScript setelah DOM tersedia.";
console.log("G.5: elemen demoTarget ditemukan dan diperbarui.");
