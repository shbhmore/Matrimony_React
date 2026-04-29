export interface Contact {
  name: string;
  relation: string;      // e.g., "Father", "Brother", "Friend"
  mobileNumber: string;  // Kept as string to handle country codes/leading zeros
  address: string;
  emailId: string;
}