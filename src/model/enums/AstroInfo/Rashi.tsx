export interface RashiDetail {
  value: string;       // The Enum Key (e.g., "MESH")
  label: string;       // The Sanskrit Label (e.g., "Mesh")
  englishName: string; // The Western Sign (e.g., "Aries")
}

export const RASHIS: Record<string, RashiDetail> = {
  MESH: { value: 'MESH', label: 'Mesh', englishName: 'Aries' },
  VRISHABH: { value: 'VRISHABH', label: 'Vrishabh', englishName: 'Taurus' },
  MITHUN: { value: 'MITHUN', label: 'Mithun', englishName: 'Gemini' },
  KARK: { value: 'KARK', label: 'Kark', englishName: 'Cancer' },
  SIMH: { value: 'SIMH', label: 'Simh', englishName: 'Leo' },
  KANYA: { value: 'KANYA', label: 'Kanya', englishName: 'Virgo' },
  TULA: { value: 'TULA', label: 'Tula', englishName: 'Libra' },
  VRISHCHIK: { value: 'VRISHCHIK', label: 'Vrishchik', englishName: 'Scorpio' },
  DHANU: { value: 'DHANU', label: 'Dhanu', englishName: 'Sagittarius' },
  MAKAR: { value: 'MAKAR', label: 'Makar', englishName: 'Capricorn' },
  KUMBH: { value: 'KUMBH', label: 'Kumbh', englishName: 'Aquarius' },
  MEEN: { value: 'MEEN', label: 'Meen', englishName: 'Pisces' },
};