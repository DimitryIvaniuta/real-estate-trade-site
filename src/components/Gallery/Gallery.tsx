import React, { useEffect, useState } from 'react';
import { GALLERY_IMAGES } from '@/data/gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Gallery.module.scss';

export const Gallery: React.FC = () => {
  // lightbox state: URL of the clicked image (or null)
  const [selected, setSelected] = useState<string | null>(null);
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.innerheader}>
          <p className={styles.subtitle}>Zainspiruj się naturą</p>
          <h2 className={styles.title}>Galeria Domów</h2>
          <p className={styles.text}>
            Zapraszamy do obejrzenia naszych realizacji – białe elewacje w otoczeniu zieleni,
            duże przeszklenia wpuszczające światło oraz starannie zaprojektowane tarasy.
            Każde zdjęcie to przykład połączenia minimalistycznej architektury z komfortem
            codziennego życia.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.03}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={styles.imageWrapper}
                onClick={() => setSelected(img.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(img.src)}

              >
                <img src={img.src} alt={img.alt} className={styles.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selected && (
          <div
            className={styles.lightboxOverlay}
            onClick={() => setSelected(null)}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setSelected(null)}
                aria-label="Zamknij podgląd"
              >
                ×
              </button>
              <img
                src={selected}
                alt="Pełny podgląd"
                className={styles.lightboxImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
