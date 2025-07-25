export const trackingStatuses = [
  "Pendiente",
  "En preparación",
  "Enviado",
  "En tránsito",
  "Entregado",
  "Cancelado"
];

export const isFinalStatus = (status) => {
  return ["Entregado", "Cancelado"].includes(status);
};
