import React from 'react';

const SocialLogin = () => {
  const handleLogin = (provider) => {
    window.location.href = `https://jm-commerce-backend.vercel.app/api/social-login/${provider}`;
  };

  return (
    <div className="space-x-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => handleLogin('google')}
      >
        Iniciar con Google
      </button>
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded"
        onClick={() => handleLogin('facebook')}
      >
        Iniciar con Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
