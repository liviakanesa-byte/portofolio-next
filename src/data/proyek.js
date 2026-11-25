export const proyek = [
  {
   slug: "halaman-profil",
   judul: "Halaman Profil Pertama",
   kategori:  "HTML,CSS,CODEPEN",
   minggu: "Minggu 01",
   gambar: "/modul-01.png",
   deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar .",
   fitur: [
      "Judul dan paragraf perkenalan dengan h1 dan p",
      "Foto profil dengan atribut alt",
      "Daftar hobi dengan ul dan li",
    ],
  },
  {
    slug: "form-kontak",
    judul: "Form Kontak",
    kategori: "HTML",
    minggu: "Minggu 02",
    gambar: "/modul-02.png",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
    fitur: [
      "Lima isian dengan label yang terhubung",
      "Validasi required dan type email",
      "Pilihan keperluan dengan select",
    ],
  },
  {
    slug: "tabel-jadwal",
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML,CSS,JAVASCRIPT",
    minggu: "Minggu 03",
    gambar: "/modul-03.png",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
    fitur: [
      "Judul tabel dengan caption",
      "Baris judul di thead",
      "Tiga kolom: hari, waktu, kegiatan",
    ],
}]

export function getGambarProyek(slug, gambarUrl) {
  const gambarBerdasarkanSlug = {
    "halaman-profil": "/modul-01.png",
    "form-kontak": "/modul-02.png",
    "tabel-jadwal": "/modul-03.png",
  };
  const gambarTerdaftar = gambarBerdasarkanSlug[slug];

  if (gambarTerdaftar) {
    return gambarTerdaftar;
  }

  const gambarLokal = gambarUrl?.trim();
  return /^\/modul-0[123]\.png$/.test(gambarLokal ?? "")
    ? gambarLokal
    : undefined;
}
