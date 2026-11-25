import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";


const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const study = [
  { day: "Senin", time:"19.00-21.00", activity:"Membaca ulang modul" },
  { day: "Selasa", time:"19.00-20.00", activity:"Mengerjakan tugas praktik"},
  { day: "Rabu", time:"19.00-21.00", activity:"Merekam video dan menulis laporan"}
]
export default async function Home() {
  const { data: proyek, error: proyekError } = await supabase
    .from("project")
    .select("*")
    .neq("slug", "portofolio-responsif")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Olivia Ferdiana"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di 
Kelas Industri UBIG."
      />
         <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-primary">
          Tentang Saya
        </h2>
        <p className="leading-7 text-black-700">
          Halo, namaku Olivia Ferdiana. Aku adalah seorang siswi yang bersekolah di SMKN 1 Kepanjen dan saat ini mengikuti kelas industri UBIG. Saya memasuki jurusan Rekayasa Perangkat Lunak (RPL) dan saat ini berstatus sebagai Junior Web Developer.
        </p>
      </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-input bg-card p-6 shadow-sm">
                <h2 className="mb-3 text-2xl font-bold text-primary">
                  Hobi
                </h2>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    Menyanyi
                  </li>
                  <li>
                    Bermain Gitar
                  </li>
                  <li>
                    Baking
                  </li>
                  
                </ul>
              </div>

              <div className="rounded-2xl border border-input bg-card p-6 shadow-sm">
                <h2 className="mb-3 text-2xl text-primary font-bold">
                  Cita-Cita / impian
                </h2>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground"><br></br>
                
                  <ol type="1" className="list-decimal pl-5 strong">
                    <li>
                      Mengikuti Lks
                    </li>
                    <li>
                      Masuk kuliah impian
                    </li>
                    <li>
                      Menjadi Engineer
                    </li>
                    
                  </ol>
                </ul>
              </div>
            </section>

      <section className="mt-10 bg-card rounded-xl border border-border shadow-sm p-5">
        <h2 className="mb-4 text-2xl font-bold text-primary">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>

      <section>
        <div className="mt-10 w-full max-w-auto bg-card rounded-2xl shadow-sm border border-border p-6">
          <h2 className="mb-4 text-2xl font-bold text-primary">Jadwal Belajar</h2>
          <div className="overflow-hidden rounded-md border border-gray-100">
            <table className="w-full text-left text-sm text-muted-foreground border-collapse">
              <thead>
                <tr className="bg-[#243c5a] text-white font-semibold">
                  <th className="py-3 px-6 w-1/4">Hari</th>
                  <th className="py-3 px-6 w-1/3">Waktu</th>
                  <th className="py-3 px-6">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {study.map((item) => (
                  <tr key={item.day} className="bg-card hover:bg-muted transition-colors">
                    <td className="py-3.5 px-6 font-normal text-muted-foreground">{item.day}</td>
                    <td className="py-3.5 px-6 font-normal text-muted-foreground">{item.time}</td>
                    <td className="py-3.5 px-6 font-normal text-muted-foreground">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Proyek Terbaru
        </h2>
        {proyekError ? (
          <p className="text-red-600">Gagal memuat proyek. Silakan coba lagi.</p>
        ) : proyek && proyek.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {proyek.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Belum ada proyek yang tersedia.</p>
        )}
      </section>
      <Link
        href="/proyek"
        className={buttonVariants({
          variant: "callout",
          size: "xl",
          className: "mt-6",
        })}
      >
        Lihat semua proyek
      </Link>
    </main>
  );
}
