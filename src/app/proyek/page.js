import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Proyek",
  description: "Daftar proyek HTML, CSS, dan JavaScript karya Olivia Ferdianaa.",
};

export default async function DaftarProyek() {
  const { data: proyek, error } = await supabase
    .from("project")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Proyek Saya</h1>
        <p className="mt-6 text-red-600">Gagal memuat proyek. Silakan coba lagi.</p>
      </main>
    );
  }

  if (!proyek || proyek.length === 0) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Proyek Saya</h1>
        <p className="mt-6 text-muted-foreground">Belum ada proyek yang tersedia.</p>
      </main>
    );
  }

   return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary 
      md:text-4xl">Proyek Saya</h1>
      <p className="mt-3 text-lg text-muted-foreground">Kumpulan 
      hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat 
      detailnya.</p>

      <FilterProyek proyek={proyek} />
    </main>
  );
}