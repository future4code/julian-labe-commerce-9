import React from 'react';
import './App.css';
import Header from './components/Header'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'
import SecaoProdutos from './components/SecaoProdutos'

class App extends React.Component {
  state={
    filtro: false,
    carrinho: false,
    secao: ''
  }

  abreFiltro = () =>{
    this.setState({filtro: !(this.state.filtro)})
  }

  abreCarrinho = () => {
    this.setState({carrinho: !(this.state.carrinho), secao: ''})
  }

  recebeSecao = (secaoClicada) => {
    this.setState({secao: secaoClicada, carrinho: false})
  }

  render(){
    if(this.state.carrinho && !this.state.secao){
        return(
          <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <button onClick={this.abreFiltro}>Filtrar</button>
            <Carrinho />
            
          </div>
        );
    }
    if(this.state.filtro){
      return(
        <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <SecaoProdutos secao={this.state.secao} filtro={this.state.filtro} abreFiltro={this.abreFiltro}/>
        </div>
      );
    }

        return (
          <div className="App">
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
            <SecaoProdutos secao={this.state.secao} filtro={this.state.filtro} abreFiltro={this.abreFiltro} />
          </div>
        );
  }
}

export default App;