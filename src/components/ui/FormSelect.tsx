interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: ReadonlyArray<{ label: string; value: string }>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden>*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}