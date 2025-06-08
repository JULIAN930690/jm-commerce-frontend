import React, { useState, useEffect } from "react";

const ApiDocs = () => {
  const [SwaggerUI, setSwaggerUI] = useState(null);

  useEffect(() => {
    import("swagger-ui-react").then((mod) => {
      setSwaggerUI(() => mod.default);
    });
  }, []);

  if (!SwaggerUI) return <div>Cargando documentación...</div>;

  return (
    <div className="container mx-auto p-4">
      <SwaggerUI url="http://localhost:8000/openapi.json" />
    </div>
  );
};

export default ApiDocs;
