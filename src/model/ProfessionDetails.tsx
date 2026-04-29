import { EmploymentStatus } from "./enums/ProfessionalInfo.tsx/EmploymentStatus";
import { OccupationCategory } from "./enums/ProfessionalInfo.tsx/OccupationCategory";
import { Person } from "./Person";

export interface ProfessionDetails {
  professionId: number;         // Long -> number
  person?: Person;              // OneToOne relationship
  occupation: string;           // "Software Engineer"
  companyName: string;
  category: OccupationCategory; // IT, GOVT, etc.
  otherOccupation: string | null;
  
  // The crucial field for Sam's income-based matching
  minRangeAnnualIncome: number; // Double -> number
  
  workLocation: string;         // City or State
  status: EmploymentStatus;     // FULL_TIME, CONTRACT, etc.
}