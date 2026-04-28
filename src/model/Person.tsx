import { Gender } from "./enums/PersonalInfo.tsx/Gender";

export interface Person {
  personId: number;           // Long -> number
  firstName: string;
  lastName: string;
  dob: string;   
  age: number;             // LocalDate -> ISO Date string "YYYY-MM-DD"
  gender: Gender;             // Enum mapping

  // Parent info directly on the Person object
  fatherName: string;
  motherName: string;

  // Contact details
  mobileNumber: string;
  email: string;

  // Address details
  currentAddress: string;     // @Column(length = 500)
  permanentAddress: string;

  // Summary fields (often used for quick cards)
  occupation: string;         // e.g., "Senior Dev"
  organization: string;       // e.g., "Google"
}