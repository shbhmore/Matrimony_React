import { AstroInfo } from "./AstroInfo";
import { Contact } from "./Contact";
import { EducationDetails } from "./EducationDetails";
import { FamilyDetails } from "./FamilyDetails";
import { PersonalInfo } from "./PersonalInfo";
import { ProfessionDetails } from "./ProfessionDetails";

export interface BiodataResponse {
  biodataId: number;
  publicId: string;
  isPrivate: boolean;

  // Nested Entities (Mapped from previous derivations)
  personalInfo: PersonalInfo;
  astroInfo: AstroInfo;
  educationDetails: EducationDetails;
  familyDetails: FamilyDetails;
  professionDetails: ProfessionDetails;

  // Flexible key-value pairs for miscellaneous info
  otherDetails: Record<string, string>; 
  
  expectations: string;
  
  // Reference/Emergency Contacts
  contactList: Contact[];

  // Calculated on the fly by your matching engine
  matchScore: number; 
}