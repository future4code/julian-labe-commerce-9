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
                <img src={logo} alt="Logotipo da loja"/>
                </div>
                <nav className="menu">
                    <ul className="menu-lista">
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='todos'>Todos os produtos</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='satelites'>Satélites</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='roupas'>Roupas</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='viagens'>Viagens</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='meteoros'>Meteoros/Aerolitos</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='brinquedos'>Brinquedos</a></li>
                        <li className="menu-lista-item"><a className="menu-link" href="#" onClick={this.atualizaEstado} value='veiculos'>Veículos</a></li>
                    </ul>
                    <img className="icone-carrinho" onClick={this.props.abreCarrinho} src={IconeCarrinho} />
                </nav>
        </div>   
        );
    }
}

export default Header;