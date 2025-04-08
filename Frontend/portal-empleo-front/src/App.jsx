import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {PortalPage} from './pages/PortalPage';
import {RegistroFormPage} from './pages/RegistroFormPage';
import {VacanteFormPage} from './pages/VacanteFormPage';
import {LoginFormPage} from './pages/LoginFormPage';
import {Navigation} from './components/Navigation';

function App() {
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/portalpage" />} />
        <Route path="/portalpage" element={<PortalPage />} />
        <Route path="/registrar-usuario" element={<RegistroFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/registrar-vacante" element={<VacanteFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;