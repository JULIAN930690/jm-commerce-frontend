import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const email = params.get("email");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) setMsg("Contraseña actualizada.");
    else setMsg(data.detail || "Error.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Restablecer contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border px-3 py-2 mb-4"
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-green-600 text-white py-2 rounded" type="submit">
          Actualizar contraseña
        </button>
      </form>
      {msg && <p className="mt-2 text-center text-sm text-gray-700">{msg}</p>}
    </div>
  );
};

export default ResetPassword;
