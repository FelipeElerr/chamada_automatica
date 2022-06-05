import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunosPresentes from "./pages/NovaChamada/AlunosPresentes/alunos-presentes";

import Main from "./pages/NovaChamada/IniciarChamada/main";
import NovaChamada from "./pages/NovaChamada/QrCode/nova-chamada";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/nova-chamada" element={<NovaChamada />} />
                <Route path="/alunos-presentes" element={<AlunosPresentes/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;