import React from 'react';
import styled from "styled-components";
import logoFace from "../../imagens/face.png"
import logoInsta from "../../imagens/insta.png"
import logoTwitter from "../../imagens/twitter.png"
import {FooterPrincipal,IconeRedesSociais} from "./styled"


export default function Footer() {
  
return (
    
  <FooterPrincipal >
       <div>
       <dl> 
             <dt> </dt>
             <dt> </dt>
             <dt>Somos o maior aplicativo para contratação de serviços da América Latina. </dt>
             <dt>2021 @LabeNinjas. Av.São João - Centro, São Paulo / SP</dt>
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


