import { useState } from 'react';
import type { ConsentType } from '../../../constants/consentType';
import { CONSENT_TYPE_OPTIONS } from '../../../constants/consentType';
import { ConsentRenderer } from '../components/ConsentRenderer';

export function ConsentPage() {
  const [selectedConsent, setSelectedConsent] = useState<ConsentType | null>(null);

  return (
    <div>
      <div className="w-[450px] mx-auto p-10">
        <label className="text-sm font-medium text-gray-700">Tipo de consentimiento</label>
        <select
          value={selectedConsent ?? ''}
          onChange={(e) => setSelectedConsent(e.target.value as ConsentType)}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        >
          <option value="">Selecciona un tipo</option>
          {CONSENT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <ConsentRenderer consentType={selectedConsent} />
    </div>
  );
}