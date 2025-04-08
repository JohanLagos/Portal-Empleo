import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/portal.api";

export function RegistroFormPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        tipo_usuario: 'candidato', // puedes cambiarlo si necesitas 'reclutador'
    });

    const navigate = useNavigate();


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // 1. Registro del usuario
            await api.post('registro/', formData);

            // 2. Login automático
            const loginResponse = await api.post('token/', {
                username: formData.username,
                password: formData.password
            });

            const { access, refresh } = loginResponse.data;

            // 3. Guardar los tokens
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            setSuccess("Registro y login exitoso. Redirigiendo...");

            // 4. Redirigir
            setTimeout(() => {
                navigate("/"); // o donde quieras llevarlo
            }, 2000);
        } catch (err) {
            setError("Error en el registro. Verifica los datos.");
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />
                <select name="tipo_usuario" value={formData.tipo_usuario} onChange={handleChange}>
                    <option value="candidato">Candidato</option>
                    <option value="reclutador">Reclutador</option>
                </select><br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}