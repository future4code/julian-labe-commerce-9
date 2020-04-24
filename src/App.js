import React from 'react';
import './App.css';
import Header from './components/Header'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'
import SecaoProdutos from './components/SecaoProdutos'
import Rodape from "./components/Rodape"
import styled from "styled-components"

const Corpo = styled.body`
    background-color: #e7ebf0;
`

class App extends React.Component {
  state={
    filtro: false,
    carrinho: false,
    secao: '',
    listaCarrinho: [] 
  }

  abreFiltro = () =>{
    this.setState({filtro: !(this.state.filtro)})
  }

  abreCarrinho = () => {
    this.setState({carrinho: !(this.state.carrinho)})
  }

  recebeSecao = (secaoClicada) => {
    this.setState({secao: secaoClicada, carrinho: false})
  }

  adicionaCarrinho = (novoProduto) =>{
    let lista = [...this.state.listaCarrinho];
    let existe = this.state.listaCarrinho.findIndex((produto) => produto.name === novoProduto.name);
    if(existe > -1){
        lista[existe].quantidade++;
    }
    else{
      novoProduto.quantidade=1;
      lista.push(novoProduto);
    }
    
    this.setState({listaCarrinho: lista})
  }

  deletar = (id) =>{
    let lista = [...this.state.listaCarrinho];
    let produto = this.state.listaCarrinho.findIndex((produto) => produto.id === id);
    lista.splice(produto, 1);
    this.setState({listaCarrinho: lista})
  }

  render(){
    if(this.state.carrinho){
        return(
          <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <Carrinho lista={this.state.listaCarrinho} deletar={this.deletar} />
            <Rodape />
          </div>
        );
    }
    if(this.state.filtro){
      return(
        <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <SecaoProdutos secao={this.state.secao} filtro={this.state.filtro} abreFiltro={this.abreFiltro}/>
            <Rodape />
            <SecaoProdutos secao={this.state.secao} passarProduto={this.adicionaCarrinho} filtro={this.state.filtro} abreFiltro={this.abreFiltro}/>
        </div>
      );
    }

        return (
          <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <SecaoProdutos secao={this.state.secao} passarProduto={this.adicionaCarrinho} filtro={this.state.filtro} abreFiltro={this.abreFiltro} />
            <Rodape />
          </div>
        );
  }
}

export default App;