export interface NakshatraDetail {
  value: string; // The Enum Key (Backend needs this)
  label: string; // The Display String (User sees this)
}

export const NAKSHATRAS: Record<string, NakshatraDetail> = {
  ASHWINI: { value: 'ASHWINI', label: 'Ashvin' },
  BHARANI: { value: 'BHARANI', label: 'Bharani' },
  KRITIKA: { value: 'KRITIKA', label: 'Kritika' },
  ROHINI: { value: 'ROHINI', label: 'Rohini' },
  MRIGASHIRA: { value: 'MRIGASHIRA', label: 'Mrigashira' },
  ARDRA: { value: 'ARDRA', label: 'Ardra' },
  PUNARVASU: { value: 'PUNARVASU', label: 'Punarvasu' },
  PUSHYA: { value: 'PUSHYA', label: 'Pushya' },
  ASHLESHA: { value: 'ASHLESHA', label: 'Ashlesha' },
  MAGHA: { value: 'MAGHA', label: 'Magha' },
  PURVA_PHALGUNI: { value: 'PURVA_PHALGUNI', label: 'Purva Phalguni' },
  UTTARA_PHALGUNI: { value: 'UTTARA_PHALGUNI', label: 'Uttara Phalguni' },
  HASTA: { value: 'HASTA', label: 'Hast' },
  CHITRA: { value: 'CHITRA', label: 'Chitra' },
  SWATI: { value: 'SWATI', label: 'Swati' },
  VISHAKHA: { value: 'VISHAKHA', label: 'Vishakha' },
  ANURADHA: { value: 'ANURADHA', label: 'Anuradha' },
  JYESHTHA: { value: 'JYESHTHA', label: 'Jyeshtha' },
  MULA: { value: 'MULA', label: 'Mool' },
  PURVA_ASHADHA: { value: 'PURVA_ASHADHA', label: 'Purva Ashadha' },
  UTTARA_ASHADHA: { value: 'UTTARA_ASHADHA', label: 'Uttara Ashadha' },
  SHRAVANA: { value: 'SHRAVANA', label: 'Shravan' },
  DHANISHTHA: { value: 'DHANISHTHA', label: 'Dhanishtha' },
  SHATABHISHA: { value: 'SHATABHISHA', label: 'Shatabhisha' },
  PURVA_BHADRAPADA: { value: 'PURVA_BHADRAPADA', label: 'Purva Bhadrapad' },
  UTTARA_BHADRAPADA: { value: 'UTTARA_BHADRAPADA', label: 'Uttara Bhadrapad' },
  REVATI: { value: 'REVATI', label: 'Revati' }
};