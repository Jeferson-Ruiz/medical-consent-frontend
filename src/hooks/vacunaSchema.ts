import * as yup from "yup";

export const vacunaSchema = yup.object({
  // Datos de la consulta
  city:   yup.string().required("La ciudad es requerida"),
  day:    yup.string().required("El día es requerido"),
  month:  yup.string().required("El mes es requerido"),
  year:   yup.string().required("El año es requerido"),
  time:   yup.string().required("La hora es requerida"),
  // Datos del paciente
  name:       yup.string().required("El nombre es requerido"),
  lastName:   yup.string().required("El apellido es requerido"),
  tipeId:     yup.string().required("El tipo de documento es requerido"),
  numberId:   yup.string().required("El número de documento es requerido"),
  age:        yup.string().required("La edad es requerida"),
  dayBirth:   yup.string().required("El día de nacimiento es requerido"),
  monthBirth: yup.string().required("El mes de nacimiento es requerido"),
  yearBirth:  yup.string().required("El año de nacimiento es requerido"),
  // Datos de la vacuna
  vaccineName: yup.string().required("El nombre de la vacuna es requerido"),
  numberDosis: yup.string().required("El número de dosis es requerido"),
  accept:      yup.string().required("Debe indicar si acepta o no"),
  noAccept: yup.string().when("accept", {
    is: "",
    then: (schema) => schema.required("Debe indicar la razón de no aceptación"),
    otherwise: (schema) => schema.notRequired(),
  }),
  // Datos del vacunador
  nameVaccinator:     yup.string().required("El nombre del vacunador es requerido"),
  lastNameVaccinator: yup.string().required("El apellido del vacunador es requerido"),
  idTypeVaccinator:   yup.string().required("El tipo de documento es requerido"),
  idNumberVaccinator: yup.string().required("El número de documento es requerido"),
  nameIps:            yup.string().required("El nombre de la IPS es requerido"),
  stateName:          yup.string().required("El departamento es requerido"),
  nameMunicipaly:     yup.string().required("El municipio es requerido"),
});