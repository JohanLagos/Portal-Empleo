import { useState } from "react";
import api from "../api/portal.api";

export function VacanteFormPage() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [requisitos, setRequisitos] = useState("");
    const [ubicacion, setUbicacion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("accessToken");
            const response = await api.post(
                "/vacantes/publicar/",
                {
                    titulo,
                    descripcion,
                    requisitos,
                    ubicacion,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Vacante publicada correctamente");
            // Redireccionar o limpiar el formulario si quieres
        } catch (err) {
            console.error(err);
            alert("Error al publicar la vacante");
        }
    };


    return (
        <div>
            <h2>Publicar Vacante</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
                <br />
                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
                <br />
                <textarea
                    placeholder="Requisitos"
                    value={requisitos}
                    onChange={(e) => setRequisitos(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="Ubicación"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                />
                <br />
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}