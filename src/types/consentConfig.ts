import type { ConsentSection } from "./consentSection"

export interface ConsentConfig {
  label: string
  sections: ConsentSection[]
}