export interface EducationCategoryDetail {
  value: string; // The Enum Key: "ARTS_AND_HUMANITIES"
  label: string; // The Display Label: "Arts and Humanities"
}

export const EDUCATION_CATEGORIES: Record<string, EducationCategoryDetail> = {
  ENGINEERING: { value: 'ENGINEERING', label: 'Engineering' },
  MEDICAL: { value: 'MEDICAL', label: 'Medical' },
  MANAGEMENT: { value: 'MANAGEMENT', label: 'Management' },
  COMMERCE: { value: 'COMMERCE', label: 'Commerce' },
  ARTS_AND_HUMANITIES: { value: 'ARTS_AND_HUMANITIES', label: 'Arts and Humanities' },
  LAW: { value: 'LAW', label: 'Law' },
  SCIENCE: { value: 'SCIENCE', label: 'Science' },
  OTHER: { value: 'OTHER', label: 'Other' }
};