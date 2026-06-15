import * as Yup from 'yup';

export const patientSchema = {
  name:     Yup.string().required('El nombre es obligatorio'),
  lastNames: Yup.string().required('Los apellidos son obligatorios'),
};