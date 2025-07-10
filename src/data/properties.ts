import { Property, PropertyStatus } from '@/types/property';

type RawMap = Record<string, { default: string }>;

// 1) Glob all plan images, eager import their default URLs
const plans = import.meta.glob<string>('../assets/plans/*.jpg', {
  eager: true,
  import: 'default',
});

// 2) Glob all PDFs
const pdfs = import.meta.glob<string>('../assets/pdfs/*.pdf', {
  eager: true,
  import: 'default',
});

export interface PropertyList {
  id: string;        // e.g. "1.1"
  imageSrc: string;  // URL string from Vite
  pdfSrc: string;    // URL string
}

export const PROPERTIES_FILES_LIST: PropertyList[] = Object.keys(plans)
  .map((planPath) => {
    const fileName = planPath.split('/').pop()!;
    const id = fileName.replace(/\.jpg$/, '');

    const imageSrc = plans[planPath];                            // Already a string
    const pdfKey  = `../assets/pdfs/${id}.pdf`;
    const pdfSrc  = pdfs[pdfKey] ?? '#';                         // Fallback if missing

    return { id, imageSrc, pdfSrc };
  })
  .sort((a, b) => a.id.localeCompare(b.id));
export const fileInfoById = (id: string):PropertyList | null => {
  let pid = id.replace(/\./, '-');
  const arr = PROPERTIES_FILES_LIST.filter(p=>p.id === pid);
  return arr.length > 0? arr[0] : null;
}
export const properties: Property[] = [
  {
    id: '1.1',
    planThumb: '../assets/plans/1-1.jpg',
    detailPdf: '../pdfs/1-1.pdf',
    usableArea: 87.92,
    status: PropertyStatus.SOLD,
  },
  {
    id: '1.2',
    planThumb: '/assets/plans/1-2.jpg',
    detailPdf: '/pdfs/1-2.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '1.3',
    planThumb: '/assets/plans/1-3.jpg',
    detailPdf: '/pdfs/1-3.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '1.4',
    planThumb: '/assets/plans/1-4.jpg',
    detailPdf: '/pdfs/1-4.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '1.5',
    planThumb: '/assets/plans/1-5.jpg',
    detailPdf: '/pdfs/1-5.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '1.6',
    planThumb: '/assets/plans/1-6.jpg',
    detailPdf: '/pdfs/1-6.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.1',
    planThumb: '/assets/plans/2-1.jpg',
    detailPdf: '/pdfs/2-1.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.2',
    planThumb: '/assets/plans/2-2.jpg',
    detailPdf: '/pdfs/2-2.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.3',
    planThumb: '/assets/plans/2-3.jpg',
    detailPdf: '/pdfs/2-3.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.4',
    planThumb: '/assets/plans/2-4.jpg',
    detailPdf: '/pdfs/2-4.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.5',
    planThumb: '/assets/plans/2-5.jpg',
    detailPdf: '/pdfs/2-5.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
  {
    id: '2.6',
    planThumb: '/assets/plans/2-6.jpg',
    detailPdf: '/pdfs/2-6.pdf',
    usableArea: 87.92,
    status: PropertyStatus.AVAILABLE,
  },
];
