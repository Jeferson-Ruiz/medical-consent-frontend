export async function generarConsentimiento(
  tipo: string,
  campos: object
): Promise<void> {
  const response = await fetch(`http://localhost:8081/consentimiento/${tipo}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(campos),
  });

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${tipo}.pdf`;
  link.click();
}