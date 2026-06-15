import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

export function InputField({ name, label, required }: InputFieldProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(name)}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>
      )}
    </div>
  );
}