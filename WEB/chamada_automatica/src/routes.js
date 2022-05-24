import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./pages/Main/main";
import NovaChamada from "./pages/NovaChamada/nova-chamada";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/nova-chamada" element={<NovaChamada />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;