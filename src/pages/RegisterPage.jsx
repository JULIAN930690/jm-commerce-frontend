import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../context/UserContext";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
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
      const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error de registro");
      const result = await res.json();
      login(result.user, result.token);
      window.location.href = "/";
    } catch (err) {
      setError("email", { message: "Ese correo ya está en uso" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-5">Crear cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Nombre</label>
          <input {...register("name")} className="w-full border rounded px-3 py-2" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Correo</label>
          <input type="email" {...register("email")} className="w-full border rounded px-3 py-2" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Contraseña</label>
          <input type="password" {...register("password")} className="w-full border rounded px-3 py-2" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
