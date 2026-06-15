export const TYPE_IDENTIFICATION_OPTIONS = [
  { label: 'Registro Civil', value: 'RC'  },
  { label: 'Cédula de Ciudadanía', value: 'CC'  },
  { label: 'Tarjeta de Identidad', value: 'TI'  },
  { label: 'Cédula de Extranjería', value: 'CE'  },
  { label: 'Permiso por Protección Temporal', value: 'PPT' },
  { label: 'Pasaporte', value: 'PS'  },
] as const;

export type TypeIdentification = typeof TYPE_IDENTIFICATION_OPTIONS[number]['value'];