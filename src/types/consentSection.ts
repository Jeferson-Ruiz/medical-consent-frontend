import type { ConsentField } from "./consentField"

export interface ConsentSection {
  title: string
  fields: ConsentField[]
}