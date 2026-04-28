import { NADIS } from "./enums/AstroInfo/Nadi";
import { NAKSHATRAS } from "./enums/AstroInfo/Nakshatra";
import { RASHIS } from "./enums/AstroInfo/Rashi";

export interface AstroInfo {
  astroId?: number;
  gotra: string;
  customGotra?: string;
  rashi: keyof typeof RASHIS;      // e.g., "MESH"
  nakshatra: keyof typeof NAKSHATRAS; // e.g., "ASHWINI"
  nadi: keyof typeof NADIS;       // e.g., "ADI"
  gan: 'DEV' | 'MANUSHYA' | 'RAKSHAS';
  isManglik: boolean;
}