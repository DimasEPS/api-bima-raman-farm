# Bima Raman Farm Backend

REST API untuk manajemen data peternakan kambing, user, dan autentikasi.  
Dibangun dengan **Express.js** dan **Prisma ORM** (MySQL).

---

## Fitur Utama

- **Autentikasi User** (Register, Login, Logout, Ganti Password)
- **Manajemen Data Kambing** (CRUD, detail, filter, search, pagination)
- **Generate QR Code** untuk kambing (link ke frontend)
- **Blacklist Token** untuk logout aman
- **Validasi Input** dengan Joi (pesan error bahasa Indonesia)
- **Error Handling** dan response konsisten
- **Struktur Modular**: controller, service, repository, validator, middleware

---

## Struktur Folder

```
src/
  app.js
  config/
  controllers/
  middleware/
  repositories/
  routes/
  services/
  utils/
  validators/
prisma/
  schema.prisma
  migrations/
.env.example
```

---

## Instalasi

1. **Clone repo:**

   ```
   git clone https://github.com/yourusername/bima-raman-farm-backend.git
   cd bima-raman-farm-backend
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Copy dan edit file environment:**

   ```
   cp .env.example .env
   ```

   Edit `.env` sesuai konfigurasi database dan frontend Anda.

4. **Setup database:**

   ```
   npx prisma migrate deploy
   ```

5. **Jalankan server:**
   ```
   npm start
   ```
   Default berjalan di port 3000.

---

## Environment Variables

Lihat dan sesuaikan di `.env.example`:

- `DATABASE_URL` : koneksi MySQL
- `JWT_SECRET` : secret JWT
- `PORT` : port server
- `URL_FE` : base URL frontend untuk QR code

---

## Dokumentasi API

Dokumentasi OpenAPI/Swagger tersedia di file [`openapi.yaml`](openapi.yaml)  
Contoh endpoint utama:

- `POST /api/auth/register` : Registrasi user
- `POST /api/auth/login` : Login user
- `POST /api/auth/logout` : Logout user (JWT blacklist)
- `POST /api/auth/change-password` : Ganti password
- `GET /api/goat` : List kambing (filter, search, pagination)
- `POST /api/goat` : Tambah kambing
- `GET /api/goat/{id}` : Detail kambing
- `PUT /api/goat/{id}` : Update kambing
- `DELETE /api/goat/{id}` : Hapus kambing
- `GET /api/goat/{id}/qrcode` : Generate QR code kambing

---

## Pengembangan & Testing

- **Hot reload:** gunakan `npm run dev` (butuh nodemon)
- **Testing:** tambahkan test di folder `tests/` (belum tersedia default)
- **Linting:** gunakan ESLint sesuai standar JavaScript

---

## Kontribusi

1. Fork repo
2. Buat branch fitur/bugfix
3. Pull request ke main

---

## Lisensi
