export interface NadiDetail {
  value: string; // "ADI", "MADHY", "ANTARY"
  label: string; // "Adi", "Madhy", "Antary"
}

export const NADIS: Record<string, NadiDetail> = {
  ADI: { value: 'ADI', label: 'Adi' },
  MADHY: { value: 'MADHY', label: 'Madhy' },
  ANTARY: { value: 'ANTARY', label: 'Antary' }
};