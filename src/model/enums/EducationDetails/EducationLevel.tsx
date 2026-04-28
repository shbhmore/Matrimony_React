export interface EducationLevelDetail {
  value: string; // The Enum Key: "POST_GRADUATE"
  label: string; // The Display Label: "Post Graduate"
}

export const EDUCATION_LEVELS: Record<string, EducationLevelDetail> = {
  DOCTORATE: { value: 'DOCTORATE', label: 'Doctorate (PhD/MD)' },
  POST_GRADUATE: { value: 'POST_GRADUATE', label: 'Post Graduate' },
  GRADUATE: { value: 'GRADUATE', label: 'Graduate' },
  DIPLOMA: { value: 'DIPLOMA', label: 'Diploma' },
  HIGHER_SECONDARY: { value: 'HIGHER_SECONDARY', label: 'Higher Secondary (12th)' },
  SECONDARY: { value: 'SECONDARY', label: 'Secondary (10th)' }
};