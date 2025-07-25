import React from 'react';

const InvoiceDownload = ({ invoiceUrl }) => {
  if (!invoiceUrl) return null;

  return (
    <a
      href={invoiceUrl}
      download
      className="bg-gray-800 text-white px-4 py-2 rounded inline-block"
    >
      Descargar factura
    </a>
  );
};

export default InvoiceDownload;
