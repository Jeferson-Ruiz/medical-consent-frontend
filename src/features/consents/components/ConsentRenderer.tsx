import type { ConsentType } from '../../../constants/consentType';
import { vacunaConfig } from '../../config/vacunaConfig';
import type { ConsentConfig } from '../type/consentTypes';
import { ConsentForm } from './ConsentForm';

const CONSENT_CONFIG_MAP: Record<ConsentType, ConsentConfig> = {
  VACUNA: vacunaConfig,
};

interface ConsentRendererProps {
  consentType: ConsentType | null;
}

export function ConsentRenderer({ consentType }: ConsentRendererProps) {
  if (!consentType) return <p className="text-center text-gray-500 mt-10">Selecciona un tipo de consentimiento</p>;
  return <ConsentForm config={CONSENT_CONFIG_MAP[consentType]} />;
}