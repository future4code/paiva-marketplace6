import React from 'react';
import styled from "styled-components";
import logoLabeNinjas from "../../imagens/labeninjas.png";
import { Link } from "react-router-dom";



const HeaderPrincipal = styled.div`
background-color: #e5e5e5;
display: flex;
margin-top: 0;
height: 120px;
justify-content: space-between;
`;

const Logo = styled.img`
height: 110px;
width: 200px;

`;

const ButtonCadastro = styled.button`
margin-right: 30vw;
margin-top: 40px;
align-content: center;


`;

export default function Header() {
    return (
        <div>
         <HeaderPrincipal>
             <Logo src={logoLabeNinjas} alt="Logo" />
             <div>
            {/* <Link to="/"> */}
             <ButtonCadastro>CADASTRO PROFISSIONAL</ButtonCadastro>
             {/* </Link> */}
             </div>
            
             

         </HeaderPrincipal> 
        </div>
        );
}