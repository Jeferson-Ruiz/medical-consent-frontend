import type { ConsentConfig } from "../types/consentConfig";
import { patientFields } from "./shared/patientFields";

export const vaccinConfig: ConsentConfig = {
  
  label: "Vacunación",
  sections: [
    {
      title:"Datos de la consulta",
      fields: [
        { name: "city",   label: "Ciudad",  type: "text", required: true },
        { name: "day",    label: "Día",     type: "text", required: true },
        { name: "month",  label: "Mes",     type: "text", required: true },
        { name: "year",   label: "Año",     type: "text", required: true },
        { name: "time",   label: "Hora",    type: "text", required: true },
      ]
    },
    {
      title: "Datos paciente",
      fields:[
        ...patientFields,
          {name:"dayBirth", label:"Dia", type: "text", required: true},
          {name:"monthBirth", label:"mes", type: "text", required: true},
          {name:"yearBirth", label:"año", type: "text", required: true}
      ]
    },
    {
      title: "Datos de la vacuna",
      fields: [
        {
          name: "vaccineName",
          label: "Nombre de la vacuna",
          type: "text",
          required: true,
        },
        {
          name: "numberDosis",
          label: "Número de dosis",
          type: "select",
          required: true,
          options: ["UNO", "DOS", "TRES", "CUATRO", "CINCO"],
        },
        {
          name: "accept",
          label:"Acepta condciones",
          type: "select",
          options: ["X", ""],
          required: true },
        {
          name: "noAccept",
          label: "Razón de no aceptación",
          type: "text",
          required: false,
        },
      ],
    },
    {
      title: "Datos del vacunador",
      fields: [
        { name: "nameVaccinator",     label: "Nombre del vacunador",    type: "text", required: true },
        { name: "lastNameVaccinator", label: "Apellido del vacunador",  type: "text", required: true },
        {
          name: "idTypeVaccinator",
          label: "Tipo de documento",
          type: "select",
          required: true,
          options: ["CC", "CE", "PA"],
        },
        { name: "idNumberVaccinator", label: "Número de documento",     type: "text", required: true },
        { name: "nameIps",            label: "Nombre de la IPS",        type: "text", required: true },
        { name: "stateName",          label: "Departamento",            type: "text", required: true },
        { name: "nameMunicipaly",     label: "Municipio",               type: "text", required: true },
      ],
    },
  ]
}