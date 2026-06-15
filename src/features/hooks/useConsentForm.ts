import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { ConsentConfig } from '../consents/type/consentTypes';

export function useConsentForm(config: ConsentConfig) {
  const methods = useForm({
    resolver: yupResolver(config.schema) as any,
    defaultValues: config.defaultValues,
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);
    // TODO: llamada al backend Spring Boot
  });

  return { methods, onSubmit };
}