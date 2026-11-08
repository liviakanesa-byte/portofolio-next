import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
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
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Olivia Ferdianaa"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di 
Kelas Industri UBIG."
      />
         <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-utama dark:text-sky-200 dark:text-sky-200 dark:text-sky-200">
          Tentang Saya
        </h2>
        <p className="leading-7 text-black-700">
          Halo, namaku Olivia Ferdiana. Aku adalah seorang siswi yang bersekolah di SMKN 1 Kepanjen dan saat ini mengikuti kelas industri UBIG. Saya memasuki jurusan Rekayasa Perangkat Lunak (RPL) dan saat ini berstatus sebagai Junior Web Developer.
        </p>
      </section>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-2xl font-bold text-utama dark:text-sky-200 dark:text-sky-200">
                  Hobi
                </h2>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
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

              <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm p-6">
                <h2 className="mb-3 text-2xl text-utama dark:text-sky-200 dark:text-sky-200 font-bold">
                  Cita-Cita / impian
                </h2>
                <ul className="list-inside list-disc space-y-2 text-gray-600"><br></br>
                
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

      <section className="mt-10 textutama bg-white bg-latar rounded-xl rounded-full border-gray-300 shadow-sm p-5">
        <h2 className="mb-4 text-2xl font-bold textutama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>

      <section>
        <div className="mt-10 textutama w-full max-w-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="mb-4 text-2xl font-bold textutama">Jadwal Belajar</h2>
          <div className="overflow-hidden rounded-md border border-gray-100">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="bg-[#243c5a] text-white font-semibold">
                  <th className="py-3 px-6 w-1/4">Hari</th>
                  <th className="py-3 px-6 w-1/3">Waktu</th>
                  <th className="py-3 px-6">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {study.map((item) => (
                  <tr key={item.day} className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-3.5 px-6 font-normal text-gray-600">{item.day}</td>
                    <td className="py-3.5 px-6 font-normal text-gray-600">{item.time}</td>
                    <td className="py-3.5 px-6 font-normal text-gray-600">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
