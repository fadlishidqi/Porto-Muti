'use client';

// 1. Import generateUploadButton langsung dari library
import { generateUploadButton } from "@uploadthing/react";
// 2. Import tipe router dari API yang sudah kita buat sebelumnya
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useRouter } from 'next/navigation';

// 3. Buat komponen UploadButton LANGSUNG DI SINI
// (Ini menggantikan kebutuhan file lib/uploadthing.ts)
const UploadButton = generateUploadButton<OurFileRouter>();

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md p-8 m-4">
        <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl" />
        
        <div className="relative z-20 flex flex-col items-center text-center">
          
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Upload gambar portofolio terbaru Anda (Max 10MB).
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          {/* Upload Section */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Tombol Uploadthing */}
            <UploadButton
              endpoint="imageUploader"
              appearance={{
                button: "bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 w-full rounded-xl py-3 text-sm shadow-lg shadow-white/5",
                container: "w-full",
                allowedContent: "text-neutral-500 text-xs mt-2"
              }}
              onClientUploadComplete={() => {
                alert("Upload Berhasil!");
                router.refresh();
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

          <div className="mt-10">
            <a 
              href="/" 
              className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Kembali ke Website
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}