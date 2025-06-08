function UserGreeting() {
  const token = localStorage.getItem('token');

  if (!token) return null; // Si no hay token, no mostramos nada

  try {
    // Decodificamos el token JWT (el payload está en la segunda parte)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const username = payload.sub || payload.username || payload.name; // Extraemos el nombre de usuario

    return (
      <p className="text-sm text-gray-700">
        Hola, <span className="font-semibold">{username}</span>
      </p>
    );
  } catch (error) {
    console.error('Error decodificando el token:', error);
    return null;
  }
}

export default UserGreeting;

