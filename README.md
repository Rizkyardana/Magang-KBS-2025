# Aplikasi E-Port

Aplikasi mobile berbasis React Native untuk mengelola work order, sales order, dan operasional pelabuhan lainnya.

## Fitur

- Autentikasi pengguna (Login/Logout)
- Ringkasan dashboard
- Manajemen Work Order
- Manajemen Sales Order
- Manajemen Service Order
- Manajemen akun pengguna

## Persyaratan Sistem

- Node.js (versi 14 atau lebih baru)
- npm atau yarn
- React Native CLI
- Android Studio / Xcode (untuk menjalankan di emulator/perangkat)

## Cara Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/Rizkyardana/Magang-KBS-2025.git
   cd EPortAppFixAPI
   ```

2. Install dependencies:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan aplikasi:
   ```bash
   npx expo start
   ```

## Struktur Proyek

```
EPortAppFixAPI/
├── assets/           # Aset statis (gambar, font, dll)
├── components/       # Komponen React yang dapat digunakan ulang
│   ├── BottomNav/    # Komponen navigasi bawah
│   ├── Login/        # Komponen halaman login
│   ├── SO/           # Komponen Sales Order
│   └── WO/           # Komponen Work Order
├── services/         # Layanan API dan data mock
└── styles/           # Gaya global dan tema
```

## Perintah yang Tersedia

- `npm start` atau `yarn start` - Menjalankan server pengembangan
- `npm run android` - Menjalankan di perangkat/emulator Android
- `npm run ios` - Menjalankan di simulator iOS (hanya macOS)
- `npm test` - Menjalankan pengujian
- `npm run build` - Membangun aplikasi

## Dependensi Utama

- React Native
- React Navigation
- React Native Paper (komponen UI)
- Axios (klien HTTP)
- Redux (manajemen state)
- React Native Vector Icons

## Kontribusi

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur/FiturBaru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan Fitur Baru'`)
4. Push ke branch (`git push origin fitur/FiturBaru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](email: rizkyardana724@gmail.com) untuk detailnya

## Kontak

Untuk pertanyaan atau masukan, silakan hubungi pengelola proyek [rizkyardana](https://github.com/Rizkyardana).
