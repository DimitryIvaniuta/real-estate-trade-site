// src/data/gallery.ts
export interface GalleryImage {
  src: string;
  alt: string;
}

// eagerly import all JPGs in gallery folder
const modules = import.meta.glob<string>('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
});

export const GALLERY_IMAGES: GalleryImage[] = Object.entries(modules).map(
  ([path, src]) => {
    const filename = path.split('/').pop()!;       // e.g. "1.jpg"
    return {
      src,
      alt: `Domy - zdjęcie ${filename.replace('.jpg','')}`,
    };
  }
);
