"use strict";

// Bagian E — Latihan 1: Memilih dan mengubah elemen HTML.
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
document.getElementById("ubahPesan").addEventListener("click", () => {
  pesan.textContent = pesan.textContent === "Konten berhasil diubah oleh JavaScript."
    ? "Pesan latihan 1 sudah diganti dengan kalimat lain."
    : "Konten berhasil diubah oleh JavaScript.";
});

// Bagian E — Latihan 2: Event click menampilkan waktu setempat.
const tombol = document.getElementById("tombolAksi");
const pesanKlik = document.getElementById("pesanKlik");
tombol.addEventListener("click", () => {
  pesanKlik.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString("id-ID");
});

// Bagian E — Latihan 3: Menambah/menghapus kelas CSS (toggle).
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", () => {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
  const aktif = teksGaya.classList.contains("highlight");
  tombolGaya.textContent = aktif ? "Nonaktifkan Gaya" : "Aktifkan Gaya";
  tombolGaya.setAttribute("aria-pressed", String(aktif));
});

// Bagian E — Latihan 4: Event input menghitung karakter secara langsung.
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", () => {
  jumlahKarakter.textContent = String(namaInput.value.length);
});

function tampilkanFeedback(elemen, pesanTeks, tipe = "") {
  elemen.textContent = pesanTeks;
  elemen.classList.remove("error", "success");
  if (tipe) elemen.classList.add(tipe);
}

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Bagian E — Latihan 5; Bagian G.2 (nama minimal tiga karakter).
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaKolom = document.getElementById("usia");
  const usiaInput = usiaKolom.value;
  const usia = Number(usiaInput);

  if (nama === "") {
    tampilkanFeedback(pesanForm, "Nama wajib diisi.", "error");
  } else if (nama.length < 3) {
    tampilkanFeedback(pesanForm, "Nama minimal 3 karakter.", "error");
  } else if (!polaEmail.test(email)) {
    tampilkanFeedback(pesanForm, "Masukkan email yang valid.", "error");
  } else if (usiaInput === "" || usiaKolom.validity.badInput || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    tampilkanFeedback(pesanForm, "Usia harus berupa bilangan bulat 17–100.", "error");
  } else {
    tampilkanFeedback(pesanForm, "Validasi berhasil. Form siap diproses.", "success");
    form.reset();
  }
});

// Bagian E — Latihan 6: To-do List; Bagian G.1: hapus satu item.
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");
function tambahkanTugas() {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    tampilkanFeedback(pesanTugas, "Tulis tugas terlebih dahulu.", "error");
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");
  label.textContent = teks;
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", () => {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai") ? "Batalkan selesai" : "Tandai selesai";
  });
  hapus.type = "button";
  hapus.className = "danger-button";
  hapus.textContent = "Hapus";
  hapus.setAttribute("aria-label", "Hapus tugas: " + teks);
  hapus.addEventListener("click", () => {
    item.remove();
    tampilkanFeedback(pesanTugas, "Tugas berhasil dihapus.", "success");
  });
  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  tampilkanFeedback(pesanTugas, "Tugas ditambahkan.", "success");
  inputTugas.focus();
}
tambahTugas.addEventListener("click", tambahkanTugas);
inputTugas.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { event.preventDefault(); tambahkanTugas(); }
});

// Bagian F: Form pendaftaran workshop, live preview, validasi, reset.
// Bagian G.2: nama >= 3 karakter; G.3: sesi langsung diperbarui.
const formWorkshop = document.getElementById("formWorkshop");
const workshopNama = document.getElementById("workshopNama");
const workshopEmail = document.getElementById("workshopEmail");
const workshopSesi = document.getElementById("workshopSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const hitungNama = document.getElementById("workshopHitungNama");
const infoSesi = document.getElementById("infoSesi");
const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");
function perbaruiRingkasan() {
  hitungNama.textContent = String(workshopNama.value.length);
  ringkasanNama.textContent = workshopNama.value.trim() || "—";
  ringkasanEmail.textContent = workshopEmail.value.trim() || "—";
  ringkasanSesi.textContent = workshopSesi.value || "Belum dipilih";
  infoSesi.textContent = workshopSesi.value ? "Sesi dipilih: " + workshopSesi.value : "Belum ada sesi dipilih.";
}
workshopNama.addEventListener("input", perbaruiRingkasan);
workshopEmail.addEventListener("input", perbaruiRingkasan);
workshopSesi.addEventListener("change", perbaruiRingkasan);
formWorkshop.addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = workshopNama.value.trim();
  const email = workshopEmail.value.trim();
  const sesi = workshopSesi.value;
  if (nama === "") tampilkanFeedback(pesanWorkshop, "Nama peserta wajib diisi.", "error");
  else if (nama.length < 3) tampilkanFeedback(pesanWorkshop, "Nama peserta minimal 3 karakter.", "error");
  else if (!polaEmail.test(email)) tampilkanFeedback(pesanWorkshop, "Masukkan email yang valid.", "error");
  else if (!sesi) tampilkanFeedback(pesanWorkshop, "Silakan pilih sesi workshop.", "error");
  else tampilkanFeedback(pesanWorkshop, "Pendaftaran berhasil: " + nama + " terdaftar pada " + sesi + ".", "success");
});
formWorkshop.addEventListener("reset", () => {
  // reset terjadi setelah event: jadwalkan pembaruan setelah nilai form dikembalikan.
  setTimeout(() => {
    perbaruiRingkasan();
    tampilkanFeedback(pesanWorkshop, "Form dikosongkan. Silakan isi kembali.");
  }, 0);
});

// Bagian G.4: sembunyikan/tampilkan paragraf dengan class CSS.
const tombolParagraf = document.getElementById("tombolParagraf");
const paragrafEksperimen = document.getElementById("paragrafEksperimen");
tombolParagraf.addEventListener("click", () => {
  paragrafEksperimen.classList.toggle("hidden-by-class");
  const tampil = !paragrafEksperimen.classList.contains("hidden-by-class");
  tombolParagraf.textContent = tampil ? "Sembunyikan Paragraf" : "Tampilkan Paragraf";
  tombolParagraf.setAttribute("aria-expanded", String(tampil));
});

console.log("Praktikum 6: index.html, style.css dan script.js terhubung dan event listener siap.");
