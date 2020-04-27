import React from 'react';
import Header from './components/Header'
import Carrinho from './components/Carrinho'
import SecaoProdutos from './components/SecaoProdutos'
import Rodape from "./components/Rodape"
import styled from "styled-components"

const Corpo = styled.body`
    background-color: #e7ebf0;
`

const DivApp = styled.div`
  text-align: center;
`

class App extends React.Component {
  state={
    carrinho: false,
    secao: '',
    listaCarrinho: [] 
  }


  //método utilizado para receber seção clicada no header, serve também para abrir o carrinho
  recebeSecao = (secaoClicada) => {
    this.setState({secao: secaoClicada})
    if(secaoClicada==='carrinho'){
      this.setState({carrinho: true})
    }
    else{
      this.setState({carrinho: false})
    }
  }

  //método utilizado para adicionar produtos no carrinho, recebendo o objeto novoProduto da seção de produtos
  adicionaCarrinho = (novoProduto) =>{
    let lista = [...this.state.listaCarrinho];
    let existe = this.state.listaCarrinho.findIndex((produto) => produto.id === novoProduto.id);
    if(existe > -1){
        lista[existe].quantidade++;
    }
    else{
      novoProduto.quantidade=1;
      lista.push(novoProduto);
    }
    
    this.setState({listaCarrinho: lista})
  }

  //método utilizado para salvar o carrinho no localStorage se ele for atualizado
  componentDidUpdate = () => {
    localStorage.setItem("carrinho", JSON.stringify(this.state.listaCarrinho))
  }

  //método utilizado para resgatar o carrinho do localStorage, se existir
  componentDidMount = () => {
    const resgataCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if(resgataCarrinho !== null){
      this.setState({listaCarrinho: resgataCarrinho})
    }
  }

  //método utilizado para deletar o produto do carrinho, recebendo do componente Carrinho.js
  //resolvi fazer aqui, porque estou adicionando no carrinho nesse mesmo componente e passando
  //o estado quando chamo ele no render
  deletar = (id) =>{
    let lista = [...this.state.listaCarrinho];
    let produto = this.state.listaCarrinho.findIndex((produto) => produto.id === id);
    lista.splice(produto, 1);
    this.setState({listaCarrinho: lista})
  }

  render(){
    //se o carrinho tiver aberto, retorna essa seção
    if(this.state.carrinho){
        return(
          <DivApp>
            <Header estado={this.state.secao} passarInfo={this.recebeSecao} />
            <Carrinho lista={this.state.listaCarrinho} deletar={this.deletar} />
            <Rodape />
          </DivApp>
        );
    }

    //se o carrinho estiver fechado, retorna essa seção, que é a inicial
    return (
      <DivApp>
        <Header estado={this.state.secao} passarInfo={this.recebeSecao} abreCarrinho={this.abreCarrinho} />
        <SecaoProdutos secao={this.state.secao} passarProduto={this.adicionaCarrinho} />
        <Rodape />
      </DivApp>
    );
  }
}

export default App;