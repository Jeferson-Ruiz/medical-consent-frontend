import { useState } from "react";
import { FormInput } from "../ui/FormInput";
import { FormButton } from "../ui/FormButton";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <FormInput
          label="Correo electrónico"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
        />
        <FormInput
          label="Contraseña"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />
        <FormButton type="submit" label="Iniciar sesión" />
      </form>
    </div>
  );
}