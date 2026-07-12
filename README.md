# Veloce Co. — Premium E-Commerce Platform

*Veloce Co.* adalah platform e-commerce premium omni-channel berbasis web responsive yang dikurasi khusus untuk menyediakan jam tangan mewah, kasual, dan olahraga original dari merek-merek kelas dunia. Menggabungkan arsitektur front-end modern dengan integrasi fitur retail yang lengkap, platform ini menghadirkan pengalaman berbelanja eksklusif yang mulus bagi para kolektor dan antusias horologi.

---

## 💼 I. Ikhtisar Bisnis (Business Overview)

### 1. Nama Bisnis, Deskripsi, dan Proposisi Nilai
* Nama Bisnis: Veloce Co.
* Deskripsi Bisnis: Kurator arloji global resmi yang melayani pasar ritel mewah. Platform ini dirancang sebagai ekosistem digital terpercaya yang menjembatani para kolektor jam tangan dengan produk high-end yang dijamin 100% otentik.
* Proposisi Nilai: Menyediakan jaminan keaslian internasional (*Guaranteed Authenticity*), kurasi produk langka (*Curated Exclusivity*), serta pengalaman transaksi premium lokal yang mulus (*Seamless Luxury Experience*).

### 2. Target Pasar & Segmentasi Pelanggan
* **Target Pasar:**
    * Usia: 25 – 55 tahun (Profesional muda, eksekutif, pengusaha, hingga kolektor senior).
    * Pendapatan: Kelas menengah ke atas (Affluent & High-Net-Worth Individuals).
    * Geografi: Domestik (Indonesia) sebagai pasar utama (seperti kawasan urban Jabodetabek, Bandung, Surabaya), serta kawasan Asia Tenggara untuk pasar sekunder.
* **Segmentasi Psikografis:**
    * Status & Prestige: Individu yang memandang jam tangan sebagai simbol pencapaian finansial, identitas sosial, dan wibawa profesional.
    * Kolektor & Investor: Konsumen yang paham nilai historis jam tangan dan memandangnya sebagai instrumen investasi alternatif (resale value tinggi).
    * Lifestyle & Utility Enthusiasts: Konsumen aktif yang mencari perpaduan fungsionalitas olahraga (seperti smartwatch/chronograph) dengan estetika premium.

---

### 3. Analisis Pasar Singkat & Pesaing
* **Analisis Pasar:** 
    * Pasar jam tangan mewah dan premium terus menunjukkan tren pertumbuhan yang solid. Jam tangan kini telah bergeser dari sekadar penunjuk waktu menjadi aset cair (liquid asset) dan pernyataan gaya hidup (lifestyle statement). Keterbatasan suplai dari produsen utama meningkatkan urgensi terhadap platform kurator sekunder yang andal secara daring.
* **Analisis Pesaing (Competitive Analysis):**
    * *Chrono24 / The Time Place (Pesaing Tidak Langsung/Nasional):*
        * Kekuatan: Jaringan fisik luas, nama merek sudah sangat besar di mal mewah.
        * Kelemahan: Struktur biaya tinggi berimbas pada harga akhir konsumen yang lebih mahal; adaptasi fitur digital lokal terkadang lambat.
    * *Jamtangan.com / Machtwatch (Pesaing Langsung):*
        * Kekuatan: Volume produk masif, harga kompetitif untuk kelas entry-to-mid level.
        * Kelemahan: Fokus pada kuantitas massal, mengurangi kesan eksklusivitas (luxury vibe) bagi konsumen kelas atas.
* **Keunggulan Kompetitif Veloce Co.:** Fokus pada segmen hyper-curated (hanya item terbaik), interaksi personal via integrasi chat WhatsApp instan, sistem multi-bahasa dan multi-mata uang yang adaptif, serta visualisasi produk yang bersih dan minimalis tanpa distraksi iklan.

---

### 4. Strategi Manajemen Produk & Katalog
* Kategori Utama: Terbagi dalam *Luxury* (mekanis otomatis premium seperti Rolex), *Sport* (durabilitas tinggi seperti Fossil), dan *Classic* (desain minimalis strap kulit).
* Strategi Visual: Setiap produk dipajang menggunakan foto beresolusi tinggi (*high-fidelity image*) yang memperlihatkan detail dial, bezel, dan tekstur strap untuk memicu keinginan membeli.
* Deskripsi Menarik: Menggunakan pendekatan cerita (*storytelling copy*) yang menonjolkan keunikan arsitektur jam, material premium (kristal safir, serat karbon), dan kelangkaan unit.

---

### 5. Model Bisnis & Aliran Pendapatan
* Model Bisnis: Menerapkan skema B2C (Business-to-Consumer) Ritel Online Direct dengan membeli stok langsung dari distributor resmi dalam volume besar.
* Aliran Pendapatan: Keuntungan margin langsung dari penjualan unit jam tangan (*Core Product Sales*), serta biaya komisi dari layanan titip jual (*Premium Consignment Service*) untuk kolektor.

---

### 6. Strategi Harga, Promosi, dan Diskon
* Strategi Harga: Menggunakan *Value-Based Pricing* untuk lini Luxury (sesuai persepsi prestise) dan *Competitive Pricing* untuk lini Sport dan Classic.
* Promosi & Diskon: Harga otomatis dikonversi secara presisi berdasarkan mata uang terpilih (IDR, USD, EUR) guna memudahkan kalkulasi pembeli internasional. serta pemberian potongan harga khusus (*Bundle Discount*) untuk paket kelengkapan aksesoris jam tangan.

---

### 7. Proses Checkout & Simulasi Payment Gateway
* Alur Kerja Transaksi: `[Keranjang Belanja] ➔ [Klik Proses Pembayaran] ➔ [Isi Form Data & Pilih Metode] ➔ [Simulasi Pending/Loading Gateway] ➔ [Halaman Sukses + QRIS/VA]`
* Simulasi Jabat Tangan (API Handshake): Saat pengguna menekan tombol *Confirm Order*, sistem memicu status pemuatan visual (*loading state*) selama 2 detik guna mensimulasikan proses jabat tangan jembatan API ke peladen *payment gateway* (Dummy Midtrans).
* Metode QRIS: Sistem secara dinamis membuat kode QR unik menggunakan pustaka `qrcode.js` berdasarkan ID transaksi konsumen. Konsumen dapat memindai kode QR tersebut langsung dari layar untuk menyelesaikan simulasi pembayaran.
* Metode Transfer / COD: Sistem secara cerdas akan menyembunyikan kontainer kode QR dan langsung mengeluarkan teks nota instruksi resmi serta rincian pembayaran sesuai dengan nama dan email pembeli.

---

### 8. Rencana SEO, Keamanan, dan Pemeliharaan
* Rencana SEO: Penerapan tag meta semantik (Title, Description, Keywords) yang dioptimasi untuk kata kunci premium dan penyediaan data terstruktur Open Graph untuk pratinjau media sosial.
* Rencana Keamanan: Sanitasi masukan formulir pada sisi klien (*XSS Protection*), penggunaan enkripsi HTTPS, serta pembatasan akses halaman admin berbasis peran akun (*Role-Based Access*).
* Pemeliharaan (Maintenance): Pembersihan berkas sampah memori pada LocalStorage secara berkala serta pembaruan basis data array produk di `products.js` tanpa mengganggu DOM inti.

---

### 9. Rencana Penggunaan Data Analitik untuk Pengambilan Keputusan
* Analisis Grafik Penjualan (Sales Analytics): Melalui integrasi visual komponen Chart.js pada Dashboard Penjual, manajemen dapat memantau pergerakan omset bulanan secara real-time. Jika terjadi tren penurunan di bulan tertentu, sistem analitik ini memicu tim pemasaran untuk segera menggelar kampanye promosi terarah.
* Pemantauan Laba Bersih (Net Profit Monitoring): Dashboard otomatis mengkalkulasi selisih harga jual dengan `basePrice` produk untuk memantau margin laba bersih murni, bukan sekadar omset kotor.
* Sistem Peringatan Stok Menipis (Low Stock Alert System): Data kuantitas stok yang terhubung langsung pada tabel admin memberikan sinyal visual instan kapan produk tertentu harus dipasok ulang (*restock*) ke distributor sebelum kehabisan inventaris toko.

---

## 🛠️ II. Penjelasan Teknis & Arsitektur Kode (Technical Architecture)

### 1. Struktur Repositori Terbuka (GitHub Root Layout)
* Seluruh file diletakkan langsung pada root direktori utama untuk memastikan kompatibilitas jalur data relatif (relative path navigation) saat dilakukan proses hosting pada GitHub Pages:
```text
📦 veloce-ecommerce (GitHub Repository Root)
 ├── 📄 index.html              # Struktur DOM Utama, komponen antarmuka pembeli/penjual, & modal
 ├── 📄 README.md               # Dokumentasi lengkap, aspek bisnis, dan spesifikasi arsitektur teknis
 ├── 📂 css/                    
 │   └── 📄 styles.css          # Desain Grid, variabel warna tema mewah, serta animasi transisi modal
 ├── 📂 js/                     
 │   ├── 📄 products.js         # Repositori basis data 20 produk tiruan (pria/wanita) & kalkulasi basePrice
 │   ├── 📄 cart.js             # State management penambahan, penghapusan, dan konversi harga keranjang
 │   ├── 📄 wishlist.js         # Operasional daftar keinginan pembeli interaktif
 │   ├── 📄 checkout.js         # Emulator pemrosesan sandbox Midtrans API dan pembuatan QRIS otomatis
 │   └── 📄 app.js              # Driver inti pengendali multi-currency, bahasa, filter pencarian, dan grafik Chart.js
 └── 📂 images/                 # Aset grafis produk lokal beresolusi tinggi
```

---

### 2. Arsitektur JavaScript Modular & Manajemen Status (State Management)
* Variabel Global Terpusat: Berkas js/app.js bertindak sebagai kernel aplikasi yang mempertahankan status runtime seperti tipe mata uang aktif (currentCurrency), bahasa aktif (currentLanguage), objek sesi pengguna (currentUser), serta grafik penjualan (salesChartInstance).
* Sinkronisasi Antar Komponen: Aksi penambahan produk di js/products.js akan langsung memicu pembaruan antarmuka pada js/cart.js dan memutakhirkan kalkulasi laba bersih pada tabel inventaris sisi admin secara real-time.

---

### 3. Tumpukan Teknologi Frontend (Tech Stack Details)
* HTML5 Semantik: Memanfaatkan tag tata letak murni modern (`<nav>`, `<main>`, `<section>`, `<footer>`) guna menyusun arsitektur ramah mesin perayap SEO dan performa responsif.
* CSS3 Grid & Flexbox: Memakai unit dinamis `repeat(auto-fill, minmax(280px, 1fr))` untuk menampilkan kartu katalog produk secara otomatis menyesuaikan resolusi layar (Mobile, Tablet, Desktop) tanpa kerusakan layout.
* Vanilla JavaScript (ES6+): Menolak penggunaan framework berat pihak ketiga demi mempertahankan loading speed halaman yang maksimal (mencapai First Contentful Paint yang optimal).
* Pustaka Eksternal Terintegrasi: Chart.js untuk kompilasi data analitik menjadi grafik garis penjualan, qrcode.js untuk enkripsi data transaksi instan menjadi gambar barcode QRIS, dan FontAwesome untuk simbol ikonik antarmuka.

---

## 💻 III. Teknologi yang Digunakan

* **HTML5:** Digunakan untuk menyusun struktur semantik halaman web yang SEO-friendly.
* **CSS3 (Modern Layout):** 
    * *CSS Variables:* Mempermudah pengelolaan palet warna global.
    * *Flexbox & CSS Grid:* Diimplementasikan untuk membangun sistem grid katalog produk otomatis (*auto-fill*) dan komponen navigasi adaptif.
    * *Media Queries:* Untuk optimasi tampilan responsif layar seluler.
* **Vanilla JavaScript (ES6+):** Digunakan secara modular untuk menangani logika aplikasi, manipulasi DOM, manajemen status (*State Management*), serta integrasi penyimpanan lokal (*Web Storage API / LocalStorage*).
* **Google Fonts:** Menggunakan *font family* Poppins untuk menunjang tipografi antarmuka yang modern, bersih, dan eksklusif.

---

## 👤 IV. Pengembang (Developer Profile)

* **Nama Pengembang:** Nuraisya Wafika Hasanah
* **Tujuan Proyek:** Proyek ini dikembangkan bertujuan untuk mempraktikkan keterampilan pengembangan web *front-end* dan desain UI/UX, menguji fungsionalitas tata letak responsif pada studi kasus *e-commerce* retail, serta membangun kerangka aplikasi web modular yang bersih dan siap di-host di GitHub Pages
