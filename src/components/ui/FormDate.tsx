interface FormDateProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  type?: "date" | "datetime-local";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormDate({label, name, placeholder, value, onChange }: FormDateProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}