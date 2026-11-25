import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 py-4 text-center md:flex-row md:text-left">
      <div
        aria-hidden="true"
        className="h-[150px] w-[150px] shrink-0 rounded-full border-4 border-aksen bg-utama/10"
      />
      <div>
        <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
          Halo, saya {nama}!
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href="/proyek"
            className={buttonVariants({ size: "lg" })}
          >
            Lihat Proyek
          </Link>
          <Link
            href="/kontak"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
