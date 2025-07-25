import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function UserMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center text-black hover:text-gray-300"
      >
        <FaUser className="mr-2" />
        {isLoggedIn ? 'Hola, Usuario' : 'Iniciar sesión'}
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50">
          <ul className="text-gray-800">
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                    Mi perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    <FaSignOutAlt className="inline mr-2" /> Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
