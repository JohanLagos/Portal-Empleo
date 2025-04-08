import { useNavigate } from "react-router-dom";

export function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/");
    };

    return <button onClick={handleLogout}>Cerrar sesión</button>;
}