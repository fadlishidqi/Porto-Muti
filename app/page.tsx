import { UTApi } from "uploadthing/server";

// Fungsi untuk mengambil dan mengurutkan gambar
async function getImages() {
  const utapi = new UTApi();
  const response = await utapi.listFiles();
  
  // KITA BALIK URUTANNYA DI SINI (.reverse)
  // Default: Terbaru -> Terlama (Atas -> Bawah)
  // Setelah reverse: Terlama -> Terbaru (Atas -> Bawah) -> Sesuai alur baca
  return [...response.files].reverse(); 
}

export default async function Home() {
  const images = await getImages();

  return (
    <main className="min-h-screen bg-black flex flex-col items-center">
      {/* Container utama dengan lebar max 1920px */}
      <div className="w-full max-w-[1920px] bg-black">
        
        {images.map((file, index) => (
          <div key={file.key} className="w-full">
            {/* Trik CSS: 
              - w-full: Lebar mengikuti layar/container
              - h-auto: Tinggi otomatis menyesuaikan proporsi gambar aslinya 
              - block: Menghilangkan celah putih kecil di bawah gambar (default inline behaviour)
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://utfs.io/f/${file.key}`}
              alt={file.name}
              className="w-full h-auto block"
              // Gambar pertama di-load prioritas (eager), sisanya lazy load biar cepat
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {images.length === 0 && (
          <div className="text-white text-center py-20 font-sans">
            <p className="text-xl opacity-70">Belum ada gambar.</p>
            <p className="text-sm mt-2 opacity-50">Silakan upload melalui halaman /admin</p>
          </div>
        )}
      </div>
    </main>
  );
}