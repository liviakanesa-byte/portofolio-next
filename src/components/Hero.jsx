export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center 
md:flex-row md:text-left">
      <div
        aria-label={`Foto profil ${nama}`}
        className="flex h-[180px] w-[180px] shrink-0 items-center justify-center rounded-full border-4 border-aksen bg-primary text-5xl font-bold text-primary-foreground"
      >
        OF
      </div>
      <div>
        <h1 className="text-3xl font-bold text-primary md:text-5xl">
          Halo, saya {nama}!
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{tagline}</p>
      </div>
    </section>
  );
}
