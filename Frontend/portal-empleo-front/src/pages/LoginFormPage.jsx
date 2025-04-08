import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/portal.api";

export function LoginFormPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('token/', { username, password });
            const { access, refresh } = response.data;

            // Guardamos los tokens en localStorage
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            // Redireccionar
            alert('Login exitoso');
            navigate("/"); // Redirige a la página principal o donde desees
            // setTimeout(() => {
            //     navigate("/"); 
            // }, 2000);
        } catch (err) {
            console.error(err);
            setError('Credenciales inválidas');
        }
    };

    return (
        <div>
        <h2>Iniciar sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <br />
            <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <br />
            <button type="submit">Ingresar</button>
        </form>
        </div>
    );
}