interface FormButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export function FormButton({
  label,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}: FormButtonProps) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 px-4 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
        ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
}