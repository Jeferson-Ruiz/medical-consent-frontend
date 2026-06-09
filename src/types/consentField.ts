export interface ConsentField {
  name: string
  label: string
  type: "text" | "select" | "date" | "textarea"
  required: boolean
  options?: string[]
}