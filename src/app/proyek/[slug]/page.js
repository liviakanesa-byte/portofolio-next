import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const { data: item, error } = await supabase
    .from("project")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !item) {
    notFound();
  }
  const gambarMentah = item.gambar_url?.trim();
  const gambar = gambarMentah
    ? (gambarMentah.startsWith("/") || /^https?:\/\//.test(gambarMentah)
        ? gambarMentah
        : `/${gambarMentah}`)
    : "/modul-01.png";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/proyek" className="text-sm font-semibold text-aksen hover:underline">
        &larr; Kembali ke daftar proyek
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{item.judul}</h1>
      <p className="mt-2 text-muted-foreground">
        {item.kategori} &middot; Dibuat di {item.minggu}
      </p>
      <Image
        src={gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-border"
      />
      <p className="mt-6 text-lg">{item.deskripsi}</p>
      <h2 className="mt-8 text-2xl font-bold text-primary">Yang Saya 
Pelajari</h2>
      <ul className="mt-3 list-disc pl-5">
        {item.fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
