import React from "react";
import styled from "styled-components"
import logo from "../img/logo.png"


const ContainerRodape = styled.footer`
    background-color: white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    bottom: 0;
    width: 900px;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 40px;
    position: relative;
    margin: 20px auto;
`
const LogoRodape = styled.img`
    height: 40px;
`

class Rodape extends React.Component{

    render(){
        return(
            <ContainerRodape>
                <LogoRodape src={logo} alt="Logotipo da loja"></LogoRodape>
                <p> Loja de produtos espaciais</p>
                <p> Desenvolvido por Shiu, Mauro e Alex</p>
            </ContainerRodape>
        )
    }
}

export default Rodape;