import { Person } from "./Person";

export interface FamilyDetails {
  familyDetailsId: number;
  
  // Direct Parents (Linked to Person Interface)
  father: Person | null;
  mother: Person | null;

  // Relative Lists (Linked to Person Interface)
  siblings: Person[];
  maternalUncles: Person[];

  // Qualitative Data
  familyValues: 'Traditional' | 'Moderate' | 'Liberal';
  familyStatus: 'Middle Class' | 'Upper Middle' | 'Wealthy';
}