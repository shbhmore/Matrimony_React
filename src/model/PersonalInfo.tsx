import { MARITAL_STATUSES } from "./enums/PersonalInfo.tsx/MaritalStatus";
import { SKIN_TYPES } from "./enums/PersonalInfo.tsx/Skintype";
import { Person } from "./Person";

export interface PersonalInfo {
  personalInfoId: number;
  person: Person; // The core identity object

  // Birth Details
  timeOfBirth: string;    // LocalTime serializes as "HH:mm:ss"
  birthLocation: string;

  // Enums
  maritalStatus: keyof typeof MARITAL_STATUSES;
  skinType: keyof typeof SKIN_TYPES;
  dietType: 'VEGETARIAN' | 'NON_VEGETARIAN' | 'EGGETARIAN' | 'VEGAN';

  // Physical
  height: number;         // Height in cm (min 70 per your @Min)

  // Transient / Calculated fields
  fairnessIndicator: number; // Logic: skinType.getFairnessIndex()
  alignedDob: string | null; // Logic: person.getDob()
}