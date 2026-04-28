export enum GotraKey {
  KASHYAP = 'KASHYAP',
  ATRI = 'ATRI',
  VASHISTH = 'VASHISTH',
  VISHWAMITR = 'VISHWAMITR',
  GAUTAM = 'GAUTAM',
  JAMADAGNI = 'JAMADAGNI',
  BHARADWAJ = 'BHARADWAJ',
  AGASTY = 'AGASTY',
  BHRIGU = 'BHRIGU',
  ANGIRAS = 'ANGIRAS',
  OTHER = 'OTHER'
}

export const GOTRA_DETAILS: Record<GotraKey, string> = {
  [GotraKey.KASHYAP]: 'Kashyap',
  [GotraKey.ATRI]: 'Atri',
  [GotraKey.VASHISTH]: 'Vashishth',
  [GotraKey.VISHWAMITR]: 'Vishwamitr',
  [GotraKey.GAUTAM]: 'Gautam',
  [GotraKey.JAMADAGNI]: 'Jamadagni',
  [GotraKey.BHARADWAJ]: 'Bharadwaj',
  [GotraKey.AGASTY]: 'Agasty',
  [GotraKey.BHRIGU]: 'Bhrigu',
  [GotraKey.ANGIRAS]: 'Angiras',
  [GotraKey.OTHER]: 'Other'
};