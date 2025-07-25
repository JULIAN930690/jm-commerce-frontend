import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold">Usuarios registrados</h2>
          <p>...</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold">Ventas del mes</h2>
          <p>...</p>
        </div>
        {/* Agregar más secciones como productos, reportes, cupones, etc */}
      </div>
    </div>
  );
};

export default DashboardAdmin;
