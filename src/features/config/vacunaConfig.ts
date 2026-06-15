import { vacunaSchema } from '../schemas/vacunaSchema';
import type { ConsentConfig } from '../consents/type/consentTypes';

export const vacunaConfig: ConsentConfig = {
  title: 'Consentimiento de Vacuna',
  schema: vacunaSchema,
  defaultValues: {
    name:        '',
    lastNames:   '',
    vaccineName: '',
  },
  fields: [
    { name: 'name',        label: 'Nombre',              type: 'input', required: true },
    { name: 'lastNames',   label: 'Apellidos',           type: 'input', required: true },
    { name: 'vaccineName', label: 'Nombre de la vacuna', type: 'input', required: true },
  ],
};