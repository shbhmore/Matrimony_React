export interface SkinTypeDetail {
  value: string;         // The Enum Key: "VERY_FAIR"
  label: string;         // The Display Label: "Very Fair"
  fairnessIndex: number; // The Numeric weight: 5
}

export const SKIN_TYPES: Record<string, SkinTypeDetail> = {
  VERY_FAIR: { value: 'VERY_FAIR', label: 'Very Fair', fairnessIndex: 5 },
  FAIR: { value: 'FAIR', label: 'Fair', fairnessIndex: 4 },
  WHEATISH: { value: 'WHEATISH', label: 'Wheatish', fairnessIndex: 3 },
  LIGHT_BROWN: { value: 'LIGHT_BROWN', label: 'Light Brown', fairnessIndex: 2 },
  BROWN: { value: 'BROWN', label: 'Brown', fairnessIndex: 1 }
}; 