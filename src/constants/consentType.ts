export const CONSENT_TYPE_OPTIONS = [
  { label: "Vacuna", value: "VACUNA" },
  { label: "Prueba de fuerza", value: "PRUEBA" },
] as const;

export type ConsentType = typeof CONSENT_TYPE_OPTIONS[number]["value"];