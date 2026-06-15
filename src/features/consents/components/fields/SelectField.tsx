import { useFormContext } from 'react-hook-form';
import type { FieldOption } from '../../type/consentTypes';

interface SelectFieldProps {
  name: string;
  label: string;
  options: FieldOption[];
  required?: boolean;
}

export function SelectField({ name, label, options, required }: SelectFieldProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name)}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>
      )}
    </div>
  );
}