import { FormProvider } from 'react-hook-form';
import { InputField } from './fields/InputField';
import { DateField } from './fields/DateField';
import { SelectField } from './fields/SelectField';
import { BooleanField } from './fields/BooleanField';
import type { ConsentConfig, FieldConfig } from '../type/consentTypes';
import { useConsentForm } from '../../hooks/useConsentForm';
import { FormButton } from '../../../components/ui/FormButton';

interface ConsentFormProps {
  config: ConsentConfig;
}

function renderField(field: FieldConfig) {
  switch (field.type) {
    case 'input':
      return <InputField key={field.name} name={field.name} label={field.label} required={field.required} />;
    case 'date':
      return <DateField key={field.name} name={field.name} label={field.label} required={field.required} />;
    case 'select':
      return <SelectField key={field.name} name={field.name} label={field.label} options={field.options ?? []} required={field.required} />;
    case 'boolean':
      return <BooleanField key={field.name} name={field.name} label={field.label} required={field.required} />;
    default:
      return null;
  }
}

export function ConsentForm({ config }: ConsentFormProps) {
  const { methods, onSubmit } = useConsentForm(config);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold">{config.title}</h2>
        {config.fields.map(renderField)}
        <FormButton
          label='Generar consentimiento'
          type='submit'
        />
      </form>
    </FormProvider>
  );
}