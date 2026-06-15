import { SelectField } from './SelectField';

interface BooleanFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

const BOOLEAN_OPTIONS = [
  { label: 'Sí', value: 'true'  },
  { label: 'No', value: 'false' },
];

export function BooleanField({ name, label, required }: BooleanFieldProps) {
  return <SelectField name={name} label={label} options={BOOLEAN_OPTIONS} required={required} />;
}