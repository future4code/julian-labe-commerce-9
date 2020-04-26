import React from 'react';
import logo from "../img/logo.png"
import IconeCarrinho from '../img/shopping_cart.svg'
import styled from "styled-components"

const ContainerMenu = styled.div`
    width: 900px;
    margin: 20px auto;
`
const LogoMenu = styled.div`
    background-color: white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 900px;
    height: 170px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 40px;
    position: relative;
`
const LogoMenuImg = styled.img`
    border-radius: 8px;
    width: 800px;
    height: 150px;
`
const Menu = styled.nav`
    background-color: white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-start-start-radius: 8px;
    width: 900px;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    padding: 0 40px;
    position: relative;
`
const MenuLista = styled.ul`
    list-style-type: none;
    padding: 0;
    height: 100%;
    margin: 0;
    margin-right: 40px;
`

const MenuListaItem = styled.li`
    display: inline-block;
    height: 100%;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`
const MenuLink = styled.p`
    color: #3a3e47;
    display: inline-block;
    height: 100%;
    font-size: 13px;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 0 3px;
    margin: 0;
    &:hover {
        color: #ffaa3b;
        cursor: pointer;
    }
`
const ImgCarrinho = styled.img`
    :hover{
        cursor: pointer;
    }
`

class Header extends React.Component{
    state={
        secaoClicada: ""
    }

    atualizaEstado = (event) => {
        this.setState({secaoClicada: event.target.getAttribute("value")})
    }

    componentDidUpdate = (prevProps) => {
        if(this.state.secaoClicada !== prevProps.estado){
             this.props.passarInfo(this.state.secaoClicada);
        }
    }

    render(){
        return(
            <ContainerMenu>
                <LogoMenu>
                    <LogoMenuImg src={logo} alt="Logotipo da loja"/>
                </LogoMenu>
                <Menu>
                    <MenuLista>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value=''>Todos os produtos</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='satelites'>Satélites</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='roupas'>Roupas</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='viagens'>Viagens</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='meteoros'>Meteoros/Aerolitos</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='brinquedos'>Brinquedos</MenuLink></MenuListaItem>
                        <MenuListaItem><MenuLink onClick={this.atualizaEstado} value='veiculos'>Veículos</MenuLink></MenuListaItem>
                    </MenuLista>
                    <ImgCarrinho onClick={this.atualizaEstado} src={IconeCarrinho} value='carrinho' />
                </Menu>
        </ContainerMenu>   
        );
    }
}

export default Header;