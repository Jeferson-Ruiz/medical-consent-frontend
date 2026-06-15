import * as Yup from 'yup';
import { patientSchema } from './patientSchema';

export const vacunaSchema = Yup.object({
  ...patientSchema,
  vaccineName: Yup.string().required('El nombre de la vacuna es obligatorio'),
});