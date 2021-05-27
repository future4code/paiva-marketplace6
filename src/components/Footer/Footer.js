import React from 'react';
import styled from "styled-components";
import logoFace from "../../imagens/face.png"
import logoInsta from "../../imagens/insta.png"
import logoTwitter from "../../imagens/twitter.png"


const FooterPrincipal = styled.div`
margin-bottom: 0;
background-color: #6200ee;
display: flex;
height: 15vh;
justify-content: space-around;
`;

const IconeRedesSociais = styled.img`
height: 50px;
width: 50px;
margin-top: 3vh;
padding-right: 2vh;
`;


    export default function Footer() {
      
    return (
        
      <FooterPrincipal >
           <div>
           <dl>
                 <dt>Quem somos</dt>
                 <dt>Endereço</dt>
            </dl> 
            </div>
            <div>
                  <a target="_blank" href="https://www.facebook.com"><IconeRedesSociais src={logoFace} alt="Icone do Facebook" /></a>
                  <a target="_blank" href="https://www.instagram.com"><IconeRedesSociais src={logoInsta} alt="Icone do Insta"/></a>
                  <a target="_blank" href="https://www.twitter.com"><IconeRedesSociais src={logoTwitter} alt="Icone do Twitter"/></a>

            </div>
              
            

         </FooterPrincipal> 
        
        );
}