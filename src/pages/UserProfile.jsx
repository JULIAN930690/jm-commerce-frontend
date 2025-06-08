import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Obtener el perfil del usuario
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/users/me/profile');
                setUser(response.data);
            } catch (err) {
                setError('Error al cargar el perfil.');
            }
        };

        fetchUserProfile();
    }, []);

    // Si no hay usuario o ocurrió un error
    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="user-profile">
            <h1>Perfil de {user.username}</h1>
            <div className="profile-info">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Rol:</strong> {user.is_admin ? 'Administrador' : 'Usuario regular'}</p>
                {/* Mostrar más información como productos, favoritos, etc. */}
            </div>
            <div className="profile-actions">
                <button onClick={() => navigate('/edit-profile')}>Editar Perfil</button>
            </div>
        </div>
    );
};

export default UserProfile;
