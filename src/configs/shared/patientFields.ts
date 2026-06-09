import type { ConsentField } from "../../types/consentField";

export const patientFields: ConsentField[] = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Apellido",
    type: "text",
    required: true,
  },
  {
    name: "tipeId",
    label: "Tipo Identificación",
    type: "text",
    required: true,
  },
  {
    name: "numberId",
    label: "Número Documento",
    type: "text",
    required: true,
  },
  {
    name: "age",
    label: "Edad",
    type: "text",
    required: true,
  },
];