export const TypeIdentification = {
  RC:  "RC",
  CC:  "CC",
  TI:  "TI",
  CE:  "CE",
  PPT: "PPT",
  PS:  "PS",
} as const;

export type TypeIdentification = typeof TypeIdentification[keyof typeof TypeIdentification];