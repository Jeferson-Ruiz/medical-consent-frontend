import type { AnyObjectSchema } from 'yup';
import type { FieldOption } from './field.types';

export type FieldType = 'input' | 'select' | 'date' | 'boolean';

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
}

export interface ConsentConfig {
  title: string;
  schema: AnyObjectSchema;
  defaultValues: Record<string, unknown>;
  fields: FieldConfig[];
}