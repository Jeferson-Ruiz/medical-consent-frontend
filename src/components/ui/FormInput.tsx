interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";  // ← faltaba
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ← requerido
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden>*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default FormInput;