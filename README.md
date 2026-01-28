# 📝 Aplikasi To-Do List

Aplikasi to-do list modern dan responsif yang membantu Anda mengelola tugas-tugas sehari-hari dengan efisien. Dibangun dengan HTML, CSS, dan JavaScript vanilla dengan penyimpanan data lokal menggunakan localStorage.

## ✨ Fitur Utama

### 1. **Menambah Tugas**
- Input tugas dengan mudah melalui kolom teks
- Wajib memilih kategori sebelum menambahkan tugas
- Judul tugas maksimal 200 karakter
- Tekan `Enter` atau klik tombol "Tambah Tugas" untuk menambahkan

### 2. **Deskripsi Tugas (Opsional)**
- Tambahkan deskripsi detail untuk setiap tugas
- Deskripsi dapat berisi hingga 500 karakter
- Format teks multi-baris didukung
- Deskripsi ditampilkan dengan format box yang rapi

### 3. **Kategori Tugas**
Pilih kategori untuk mengorganisir tugas:
- 💼 **Kerja** - Tugas pekerjaan
- 👤 **Pribadi** - Tugas pribadi
- 🛒 **Belanja** - Daftar belanja
- ❤️ **Kesehatan** - Tugas terkait kesehatan
- 📚 **Belajar** - Tugas pembelajaran
- 🎮 **Hobi** - Aktivitas hobi
- 📌 **Lainnya** - Kategori lainnya

Setiap kategori memiliki warna unik untuk identifikasi visual yang lebih mudah.

### 4. **Deadline Management**
- Aktifkan toggle "Dengan Deadline" untuk menambahkan tanggal deadline
- Sistem otomatis menampilkan status deadline:
  - 🔴 **Urgent (Hari Ini)** - Merah, jika deadline adalah hari ini
  - ⚠️ **Overdue (Lewat)** - Merah, jika sudah melewati deadline
  - 🟠 **Warning (1-3 Hari)** - Oranye, jika sisa 1-3 hari
  - 🟢 **Safe (>3 Hari)** - Hijau, jika sisa lebih dari 3 hari

### 5. **Filter dan Pencarian**
- **Semua** - Menampilkan semua tugas
- **Belum Selesai** - Hanya tugas yang belum dikerjakan
- **Selesai** - Hanya tugas yang sudah dikerjakan
- **Filter Kategori** - Filter berdasarkan kategori tertentu

Kombinasikan filter status dan kategori untuk hasil yang lebih spesifik.

### 6. **Tandai Selesai**
- Centang checkbox di setiap tugas untuk menandai selesai
- Tugas yang sudah selesai akan menjadi transparan dengan strikethrough
- Hitung statistik otomatis diperbarui

### 7. **Hapus Tugas**
- Klik tombol "Hapus" untuk menghapus tugas individual
- Klik "Hapus Tugas yang Selesai" untuk menghapus semua tugas selesai sekaligus
- Konfirmasi akan muncul sebelum penghapusan

### 8. **Statistik Real-time**
- **Total** - Jumlah total semua tugas
- **Selesai** - Jumlah tugas yang sudah dikerjakan
- Update otomatis setiap ada perubahan

### 9. **Penyimpanan Data**
- Semua data tugas disimpan di localStorage browser
- Data persisten bahkan setelah menutup/membuka kembali aplikasi
- Tidak perlu koneksi internet

## 🎨 Desain dan UX

- **Tema Warna Teal-Emerald**: Palet warna modern yang harmonis (#0d9488 - #059669)
- **Responsive Design**: Sempurna di desktop, tablet, dan mobile
- **Interface Intuitif**: Navigasi yang mudah dipahami
- **Animasi Smooth**: Transisi dan animasi untuk UX yang lebih baik
- **Dark Mode Ready**: Dapat disesuaikan dengan preferensi sistem

## 📱 Kompatibilitas

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android Tablet)
- ✅ Mobile (Smartphone dengan layar 320px ke atas)
- ✅ Responsive breakpoints pada 600px dan 400px

## 🚀 Cara Memulai

1. **Buka aplikasi** - Buka file `index.html` di browser
2. **Tambah tugas** - Ketik tugas Anda, pilih kategori, dan klik "Tambah Tugas"
3. **Tambah detail** - Gunakan deskripsi untuk penjelasan lebih detail (opsional)
4. **Set deadline** - Aktifkan toggle deadline dan pilih tanggal jika diperlukan
5. **Kelola tugas** - Gunakan filter, tandai selesai, atau hapus sesuai kebutuhan

## 💡 Tips Penggunaan

- **Gunakan Kategori**: Kategori membantu mengorganisir tugas berdasarkan area kehidupan
- **Manfaatkan Deskripsi**: Tulis detail penting dalam deskripsi untuk referensi cepat
- **Atur Deadline**: Deadline membantu prioritas dan time management
- **Filter Teratur**: Gunakan filter untuk fokus pada tugas yang paling penting
- **Review Statistik**: Monitor total tugas dan progress completion Anda

## 🛠️ Teknologi

- **HTML5** - Struktur markup
- **CSS3** - Styling dan responsiveness
- **JavaScript (ES6)** - Logika aplikasi
- **localStorage API** - Penyimpanan data lokal
- **Flexbox** - Layout modern

## 📋 Struktur File

```
/
├── index.html       # File HTML utama
├── style.css        # File styling
├── script.js        # File JavaScript logika
└── README.md        # File dokumentasi (ini)
```

## 🔄 Fitur di Masa Depan

- Impor/Ekspor data ke JSON
- Mode dark theme
- Notifikasi reminder
- Kolaborasi dengan pengguna lain
- Cloud sync
- Mobile app native

## 📝 Lisensi

Proyek ini bebas digunakan dan dimodifikasi.

---

**Dibuat dengan ❤️ untuk produktivitas yang lebih baik**
