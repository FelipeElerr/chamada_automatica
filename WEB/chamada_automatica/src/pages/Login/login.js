import React from "react";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
         
             <Link to="/alunos">Aluno</Link>
             <Link to="/alunos-presentes">Professor</Link>

        
        <Footer />
        </>
    )
}