|  |  |
| -------- | --- |
| **Nama** | Tedi Mulyadi |
| **NIM** | 312510163 |
| **Kelas** | I251B |
| **Mata Kuliah** | Pemrograman web |
| **Dosen** | Agung Nugroho, S.Kom., M.Kom. |  

---
# Praktikum 6 — JavaScript DOM dan Event Handling

## D. Persiapan praktikum

1. Buat folder kerja dengan nama `lab6_dom_event`.
2. Pisahkan struktur halaman ke `index.html`, pengaturan tampilan ke `style.css`, dan kode JavaScript ke `script.js`.
3. Pastikan `index.html` memuat `<link rel="stylesheet" href="style.css">` serta `<script src="script.js" defer></script>` agar kedua file terhubung.
4. Jalankan `index.html` melalui browser; pengguna VS Code juga dapat memanfaatkan **Live Server**.
5. Akses **F12 → Console**, uji latihan satu per satu, kemudian amati perubahan tulisan dan respons validasi yang muncul.

## E. Langkah kerja praktikum (Latihan 1–6)

### E.1 — Mengubah teks dengan DOM

Melalui `document.getElementById()`, program mengambil elemen `judul` dan `pesan`, kemudian memperbarui isinya menggunakan `textContent`. Ketika halaman dijalankan, judul menampilkan **Belajar JavaScript DOM** dan paragraf menampilkan **Konten berhasil diubah oleh JavaScript.** Sebuah tombol tambahan memungkinkan pengguna mengganti isi pesan, lalu mengembalikannya seperti semula.

![E1 Perubahan teks dengan DOM](screenshots/E01_perubahan_DOM.png)

### E.2 — Event `click`

Tombol `tombolAksi` diberi event listener untuk mendeteksi klik. Saat ditekan, elemen `pesanKlik` menampilkan waktu tindakan dengan `new Date().toLocaleTimeString("id-ID")`. Informasi waktunya diperbarui setiap kali tombol diklik kembali.

![E2 Event click](screenshots/E02_event_click.png)

### E.3 — Mengubah kelas dan gaya CSS

Dengan `classList.toggle()`, tombol `tombolGaya` dapat mengaktifkan maupun menonaktifkan kelas `.highlight` dan `.teks-besar`. Kelas `.highlight` mengatur warna tulisan menjadi biru, latar biru muda, garis di sisi kiri, serta padding. Sementara itu, `.teks-besar` menetapkan ukuran tulisan `1.4rem` sesuai modul. Tekan tombol pertama kali untuk menerapkan gaya dan tekan lagi untuk kembali ke kondisi awal.

![E3 Mengubah CSS](screenshots/E03_toggle_css_aktif.png)

### E.4 — Event `input` dan penghitung karakter

Input `namaInput` dibatasi hingga 40 karakter. Event listener `input` akan menyesuaikan nilai `jumlahKarakter` secara langsung ketika pengguna menulis, menghapus, atau menempelkan teks. Sebagai contoh, teks **Tedi Mulyadi** terhitung sebanyak **12 karakter**.

![E4 Penghitung karakter](screenshots/E04_penghitung_karakter.png)

### E.5 — Validasi form pendaftaran

Form menyediakan isian **nama lengkap, email, dan usia**. Saat event `submit` terjadi, `event.preventDefault()` menghentikan pengiriman bawaan browser agar data bisa diperiksa terlebih dahulu. Nama tidak boleh kosong dan harus berisi setidaknya 3 karakter (sesuai pengembangan G.2), email harus mengikuti format yang benar, serta usia wajib berupa bilangan bulat dalam rentang 17–100. Jika semua syarat terpenuhi, pesan keberhasilan ditampilkan dan form dikosongkan kembali. Pengujian mencakup seluruh kolom kosong, nama terlalu pendek, email salah, usia 16 atau 101, usia desimal, dan data yang memenuhi syarat.

**Contoh kondisi gagal (nama kosong):**

![E5 Nama kosong](screenshots/E05_validasi_nama_kosong.png)

**Contoh kondisi gagal (email tidak valid):**

![E5 Email tidak valid](screenshots/E05_validasi_email_salah.png)

**Contoh kondisi gagal (usia kurang dari 17):**

![E5 Usia 16](screenshots/E05_validasi_usia_16.png)

**Contoh kondisi berhasil (data valid):**

![E5 Berhasil](screenshots/E05_validasi_berhasil.png)

### E.6 — To-do List sederhana

Ketika pengguna menambahkan tugas, JavaScript membentuk elemen `li` melalui `createElement()`. Status tugas bisa diubah menjadi selesai menggunakan kelas `.selesai`, dikembalikan menjadi belum selesai, ataupun dihapus secara individual seperti pada eksperimen G.1. Program tidak menerima masukan kosong. Isi tugas ditampilkan memakai `textContent` agar tidak diperlakukan sebagai kode HTML.

![E6 Dua tugas](screenshots/E06_todo_dua_tugas.png)

![E6 Tugas selesai](screenshots/E06_todo_selesai.png)

## F. Mini Project — Form Pendaftaran Workshop

Pada form workshop tersedia sedikitnya tiga fitur interaktif yang dikendalikan melalui `addEventListener()`:

1. Pemeriksaan **nama (minimal 3 karakter), email, dan sesi yang dipilih**, dengan informasi gagal atau berhasil ditampilkan pada halaman.
2. Penghitungan panjang nama serta **ringkasan input real-time** yang berubah seiring pengguna mengetik.
3. Pemantauan event `change` pada dropdown sesi supaya sesi terpilih langsung tercatat di ringkasan (berkaitan dengan G.3).
4. Tombol Reset untuk membersihkan isian, jumlah karakter, ringkasan, dan pesan hasil.

Sebagai contoh, tersedia Sesi Pagi (09.00–11.00), Sesi Siang (13.00–15.00), dan Sesi Online (19.00–21.00). Ketiga pilihan tersebut hanya digunakan sebagai simulasi, **bukan jadwal workshop resmi**. Proses pada form masih sebatas validasi di browser dan belum mencakup penyimpanan ke server.

**Tampilan awal:**

![F Form awal](screenshots/F00_form_workshop_awal.png)

**Email tidak valid:**

![F Email salah](screenshots/F01_email_tidak_valid.png)

**Sesi belum dipilih:**

![F Sesi kosong](screenshots/F02_sesi_kosong.png)

**Pendaftaran valid:**

![F Berhasil](screenshots/F03_pendaftaran_berhasil.png)

**Form selesai di-reset:**

![F Reset](screenshots/F04_reset_form.png)

## G. Eksperimen mandiri (1–5)

### G.1 — Hapus item To-do List

Tombol **Hapus** disediakan pada setiap tugas. Saat tombol tersebut ditekan, event `click` menjalankan `item.remove()` untuk menghilangkan item terkait tanpa memengaruhi tugas lainnya.

![G1 Hapus satu item](screenshots/G01_hapus_item_todo.png)

### G.2 — Nama minimal tiga karakter

Program terlebih dahulu membersihkan spasi di awal dan akhir nama dengan `trim()`. Apabila kondisi `nama.length < 3` terpenuhi, pesan **Nama minimal 3 karakter** akan muncul. Pemeriksaan yang sama digunakan dalam form Latihan 5 maupun form workshop.

![G2 Nama kurang dari tiga](screenshots/G02_nama_minimal_tiga.png)

### G.3 — Event `change` untuk sesi workshop

Perubahan pilihan pada dropdown `workshopSesi` memicu `perbaruiRingkasan()` untuk menyesuaikan tulisan **Sesi dipilih** dan informasi pada kartu ringkasan. Proses ini berlangsung tanpa perlu melakukan submit form.

![G3 Sesi dipilih](screenshots/G03_event_change_sesi.png)

### G.4 — Sembunyikan dan tampilkan paragraf

Untuk mengatur visibilitas paragraf, tombol menjalankan `classList.toggle("hidden-by-class")`. Aturan CSS `.hidden-by-class { display: none !important; }` membuat paragraf tidak terlihat ketika kelas aktif. Saat tombol ditekan lagi, kelas dihapus sehingga paragraf muncul kembali.

![G4 Paragraf tampil](screenshots/G04_paragraf_tampil.png)

![G4 Paragraf disembunyikan](screenshots/G04_paragraf_sembunyi.png)

### G.5 — Script di `<head>` tanpa `defer`

Eksperimen dilakukan pada dua halaman berbeda agar fungsi website utama tetap berjalan. Pada halaman **tanpa `defer`**, file `g5_demo.js` dieksekusi ketika `demoTarget` belum terbentuk. Akibatnya, `getElementById()` menghasilkan `null` dan perintah `targetDemo.textContent = ...` memunculkan `TypeError`. Sebaliknya, penggunaan **`defer`** membuat script menunggu hingga HTML selesai diparsing sehingga elemen dapat ditemukan dan teks dapat diubah. Bandingkan kedua hasil dengan membuka tiap halaman dan melihat F12 → Console.

- [`eksperimen/g5_tanpa_defer.html`](eksperimen/g5_tanpa_defer.html) — contoh kesalahan yang memang dibuat untuk keperluan eksperimen.
- [`eksperimen/g5_dengan_defer.html`](eksperimen/g5_dengan_defer.html) — contoh script yang dapat berjalan sebagaimana mestinya.

![G5 Tanpa defer](screenshots/G05_tanpa_defer_error.png)

![G5 Dengan defer](screenshots/G05_dengan_defer_berhasil.png)

## H. Pertanyaan evaluasi

Pembahasan lengkap untuk **7 soal** tersedia dalam [`JAWABAN_BAGIAN_H.md`](JAWABAN_BAGIAN_H.md) dan dapat dilihat pula melalui panel Evaluasi H pada website. Materinya meliputi konsep DOM, selector, `addEventListener`, `preventDefault`, perbedaan keamanan `textContent` dan `innerHTML`, penggunaan `classList.toggle`, serta contoh pengujian validasi form.

![H Pertanyaan Evaluasi](screenshots/H01_jawaban_evaluasi.png)

## Pengujian dan hasil

**Tampilan mobile:**

![Tampilan mobile](screenshots/tampilan_mobile.png)

## Kesimpulan

Penerapan DOM dan event handling pada JavaScript memungkinkan halaman memperbarui tulisan maupun tampilan CSS secara langsung, merespons interaksi pengguna, memeriksa isian form, dan menghadirkan fitur aplikasi sederhana. Penggunaan `defer` membantu memastikan elemen HTML sudah tersedia ketika script berjalan, sedangkan `textContent` dipilih untuk menampilkan teks dari pengguna tanpa menafsirkannya sebagai HTML.