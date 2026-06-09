import { useState } from "react";
import type { ConsentType } from "../../constants/consentType";
import { CONSENT_TYPE_OPTIONS } from "../../constants/consentType";
import { FormSelect } from "../ui/FormSelect";

interface ListConsentsProps {
  onChange: (value: ConsentType) => void;
}

export function ListConsents({ onChange }: ListConsentsProps) {
  const [selected, setSelected] = useState<ConsentType | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ConsentType;
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="w-[450px] mx-auto p-10">
      <FormSelect
        label="Tipo de consentimiento"
        name="consentType"
        value={selected}
        onChange={handleChange}
        options={CONSENT_TYPE_OPTIONS}
        placeholder="Selecciona un tipo"
        required
      />
    </div>
  );
}

export default ListConsents;