import { TypeIdentification } from "./typeIdentification";

export const tiposIdentificacion = [
  { label: "Registro Civil",       value: TypeIdentification.RC  },
  { label: "Cédula de Ciudadanía", value: TypeIdentification.CC  },
  { label: "Tarjeta de Identidad", value: TypeIdentification.TI  },
  { label: "Cédula de Extranjería",value: TypeIdentification.CE  },
  { label: "Permiso de Protección",value: TypeIdentification.PPT },
  { label: "Pasaporte",            value: TypeIdentification.PS  },
];

export const opcionesAcepta = [
  { label: "Acepta",     value: "true"  },
  { label: "No acepta",  value: "false" },
];