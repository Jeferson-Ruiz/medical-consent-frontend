import { useFormContext } from 'react-hook-form';

interface DateFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

export function DateField({ name, label, required }: DateFieldProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(name)}
        type="date"
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>
      )}
    </div>
  );
}