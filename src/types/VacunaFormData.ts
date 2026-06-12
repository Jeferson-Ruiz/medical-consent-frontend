export interface VacunaFormData {
  city: string;
  day: string;
  month: string;
  year: string;
  time: string;
  // Datos del paciente
  name: string;
  lastName: string;
  tipeId: string;
  numberId: string;
  age: string;
  dayBirth: string;
  monthBirth: string;
  yearBirth: string;
  // Datos de la vacuna
  vaccineName: string;
  numberDosis: string;
  accept: string;
  noAccept: string;
  // Datos del vacunador
  nameVaccinator: string;
  lastNameVaccinator: string;
  idTypeVaccinator: string;
  idNumberVaccinator: string;
  nameIps: string;
  stateName: string;
  nameMunicipaly: string;
};