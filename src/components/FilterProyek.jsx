"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";
const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];

export default function FilterProyek({ proyek }) {
 const [kategori, setKategori] = useState("Semua");
 const [kata, setKata] = useState("");

 const kataKecil = kata.toLowerCase();
 const hasil = (proyek ?? []).filter((p) => {
 const cocokKategori = kategori === "Semua" || p.kategori === kategori;
 const cocokKata = p.judul.toLowerCase().includes(kataKecil);
  return cocokKategori && cocokKata;
});


  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            type="button"
            variant={kategori === k ? "default" : "outline"}
            className={
              kategori === k
                ? ""
                : "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            }
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <div className="mt-6">
       <label htmlFor="cari" className="block font-semibold">
        Cari proyek
       </label>
     <input
       type="text"
       id="cari"
       value={kata}
       onChange={(e) => setKata(e.target.value)}
       placeholder="Contoh: kalkulator"
       className="mt-1 w-full rounded-lg border border-input bg-background p-2 md:w-80"
      />
      </div>

      {kata && (
        <Button
          type="button"
          variant="outline"
          onClick={() => setKata("")}
          className="mt-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          Hapus pencarian
        </Button>
      )}

      <p className="mt-4 text-muted-foreground">Kategori terpilih: 
      {kategori}</p>

    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {hasil.map((item) => (
    <ProyekCard key={item.slug} proyek={item} />
     ))}
    </div>

    </div>
  );
}
