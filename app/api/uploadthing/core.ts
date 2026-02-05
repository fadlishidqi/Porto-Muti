import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Rute upload gambar, maksimal 4MB per file
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload URL:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;