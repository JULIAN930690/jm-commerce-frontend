import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../context/UserContext";

const schema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const LoginPage = () => {
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Credenciales incorrectas");
      const result = await res.json();
      login(result.user, result.token);
      window.location.href = "/";
    } catch (err) {
      setError("email", { message: "Credenciales incorrectas" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-5">Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Introduce tu correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Introduce tu contraseña"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
