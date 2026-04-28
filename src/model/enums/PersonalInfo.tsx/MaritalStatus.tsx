export interface MaritalStatusDetail {
  value: string; // The Enum Key: "AWAITING_DIVORCE"
  label: string; // The Display Label: "Legal process ongoing"
}

export const MARITAL_STATUSES: Record<string, MaritalStatusDetail> = {
  NEVER_MARRIED: { value: 'NEVER_MARRIED', label: 'Single / Unmarried' },
  AWAITING_DIVORCE: { value: 'AWAITING_DIVORCE', label: 'Legal process ongoing' },
  DIVORCED: { value: 'DIVORCED', label: 'Legally separated' },
  WIDOWED: { value: 'WIDOWED', label: 'Spouse deceased' },
  ANNULLED: { value: 'ANNULLED', label: 'Marriage declared void' }
};