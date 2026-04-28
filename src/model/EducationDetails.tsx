import { EDUCATION_CATEGORIES } from "./enums/EducationDetails/EducationCategory";
import { EDUCATION_LEVELS } from "./enums/EducationDetails/EducationLevel";

export interface EducationDetails {
  educationId: number;
  
  // Enums mapped as string keys
  educationLevel: keyof typeof EDUCATION_LEVELS;
  educationCategory: keyof typeof EDUCATION_CATEGORIES;
  
  specialization: string;
  institutionName: string;
  boardOrUniversity: string;
  passingYear: number;
  
  scoreType: string;    // e.g., "CGPA", "Percentage"
  score: number;        // Java Double maps to TS number
  
  isVerified: boolean;  // Primitive boolean
  documentUrl: string;  // Link to certificate/degree
}