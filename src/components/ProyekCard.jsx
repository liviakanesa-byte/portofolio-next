import Image from "next/image";
import Link from "next/link";
import { getGambarProyek } from "@/data/proyek";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  const gambar = getGambarProyek(proyek.slug, proyek.gambar_url);

  return (
    <Link href={`/proyek/${proyek.slug}`} className="block rounded-xl hover:shadow-md">
      <Card className="h-full">
        {gambar && (
          <Image
            src={gambar}
            alt={`Tangkapan layar proyek ${proyek.judul}`}
            width={640}
            height={420}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="aspect-[3/2] w-full object-cover"
          />
        )}
        <CardHeader>
          <Badge>{proyek.kategori}</Badge>
          <CardTitle className="text-lg text-primary">{proyek.judul}
</CardTitle>
          <CardDescription>{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
