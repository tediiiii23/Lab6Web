# Jawaban Bagian H — Pertanyaan Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (*Document Object Model*) menggambarkan susunan dokumen HTML dalam bentuk objek-objek yang dapat diakses menggunakan JavaScript. Melalui DOM, pengembang bisa membaca dan memperbarui elemen, tulisan, atribut, kelas CSS, maupun konten halaman ketika terjadi interaksi, tanpa harus memuat ulang seluruh halaman.

### 2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?

- `document.getElementById("judul")`: memilih elemen melalui atribut `id="judul"`.
- `document.querySelector(".item")`: memilih **kecocokan pertama** berdasarkan selector CSS `.item`.
- `document.querySelectorAll(".item")`: menghasilkan `NodeList` berisi **seluruh elemen** yang sesuai dan dapat ditelusuri melalui iterasi.

### 3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?

`addEventListener()` berfungsi memasang penangan event pada elemen sehingga suatu fungsi dipanggil ketika peristiwa tertentu berlangsung. Misalnya, `click` terjadi saat tombol ditekan, `input` merespons perubahan tulisan selama mengetik, dan `submit` terjadi ketika form dikirim. Event lainnya adalah `change`, misalnya saat pilihan dropdown diubah.

### 4. Mengapa event.preventDefault() digunakan pada event submit form?

Pada event submit, `event.preventDefault()` dipakai untuk menghentikan tindakan standar browser, seperti mengirim form atau memuat ulang halaman. Dengan cara ini, JavaScript dapat memvalidasi nama, email, usia, dan sesi sebelum memproses data, kemudian menampilkan informasi gagal atau berhasil pada halaman yang sama.

### 5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?

`textContent` digunakan untuk membaca atau memperbarui teks biasa tanpa memproses tag HTML. Sebaliknya, `innerHTML` dapat membaca maupun menyisipkan struktur markup HTML. Jika konten dari pengguna yang belum tepercaya dimasukkan melalui `innerHTML`, terdapat risiko injeksi markup atau XSS. Oleh sebab itu, menampilkan nama atau isi tugas lebih aman menggunakan `textContent`.

### 6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?

Pemanggilan `classList.toggle("highlight")` akan mengaktifkan kelas `highlight` jika belum dipasang, atau menonaktifkannya ketika kelas tersebut sudah ada. Dengan demikian, aturan CSS dapat berubah tanpa perlu ditulis ulang melalui JavaScript. Pada Latihan 3, metode ini digunakan untuk mengganti warna dan ukuran tulisan; pada G.4, metode yang sama mengatur tampil atau tidaknya paragraf menggunakan kelas `hidden-by-class`.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

| Skenario | Data uji | Hasil yang diharapkan |
|---|---|---|
| 1. Semua kosong | Nama, email, usia kosong | Ditolak: nama wajib diisi |
| 2. Nama pendek | Nama `Te` | Ditolak: nama minimal 3 karakter |
| 3. Email salah | Email `tidakvalid` | Ditolak: masukkan email yang valid |
| 4. Usia tidak memenuhi | Usia `16` atau `101` | Ditolak: usia harus bulat 17–100 |
| 5. Data valid | `Tedi Mulyadi`, `tedi@example.com`, usia `20` | Diterima: validasi berhasil |
| 6. Sesi workshop kosong | Nama dan email valid, tidak memilih sesi | Ditolak: silakan pilih sesi workshop |
| 7. Sesi workshop valid | Nama/email valid dan sesi dipilih | Diterima: pesan pendaftaran berhasil |
