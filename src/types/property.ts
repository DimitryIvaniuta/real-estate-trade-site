
/**
 * The possible sale status of a property.
 */
export enum PropertyStatus {
  /** Property is available for sale */
  AVAILABLE = 'available',
  /** Property is reserved (optionally on hold) */
  RESERVED  = 'reserved',
  /** Property has been sold */
  SOLD      = 'sold',
}

/**
 * A real‐estate unit on development.
 */
export interface Property {
  /** Unique identifier / label (e.g. "1.1", "2.5") */
  id: string;
  /** URL or import path to the floor‐plan thumbnail image */
  planThumb: string;
  /** URL or import path to the PDF “karta lokalu” */
  detailPdf: string;
  /** Usable area in square meters */
  usableArea: number;
  /** Current status (available / reserved / sold) */
  status: PropertyStatus;
}