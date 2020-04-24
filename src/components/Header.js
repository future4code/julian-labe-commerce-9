import React from 'react';
import './Header.css';
import logo from "../img/logo.png"
import IconeCarrinho from '../img/shopping_cart.svg'

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
            <div className="container-menu">
                <div className="logo-menu">
                    <h1 style={{'background-image': 'url('+ logo +')'}} className="menu-logo">Via Lactea</h1>
                </div>
                <nav className="menu">
                    <ul className="menu-lista">
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value=''>Todos os produtos</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='satelites'>Satélites</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='roupas'>Roupas</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='viagens'>Viagens</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='meteoros'>Meteoros/Aerolitos</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='brinquedos'>Brinquedos</p></li>
                        <li className="menu-lista-item"><p className="menu-link" onClick={this.atualizaEstado} value='veiculos'>Veículos</p></li>
                    </ul>
                    <img className="icone-carrinho" onClick={this.props.abreCarrinho} src={IconeCarrinho} />
                </nav>
        </div>   
        );
    }
}

export default Header;