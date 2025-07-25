import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/, "Debe incluir letras, números y un carácter especial"),
});

const RegisterPage = () => {
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      // Cambié la ruta aquí para que apunte correctamente a /auth/register
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw result;

      login(result.user, result.token);
      toast.success("✅ Registro exitoso. Redirigiendo...");
      window.location.href = "/";
    } catch (err) {
      const mensaje = err.detail || "Ese correo ya está en uso";
      setError("email", { message: mensaje });
      toast.error("❌ " + mensaje);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-5">Crear cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Nombre</label>
          <input {...register("name")} className="w-full border rounded px-3 py-2" placeholder="Tu nombre completo" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Correo</label>
          <input type="email" {...register("email")} className="w-full border rounded px-3 py-2" placeholder="ejemplo@correo.com" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Contraseña</label>
          <input type="password" {...register("password")} className="w-full border rounded px-3 py-2" placeholder="Mínimo 8 caracteres" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;


