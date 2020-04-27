import React from 'react';
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
    background-color: white;
    width: 900px;
    padding: 10px;
    display: grid;
    grid-template-rows: repeat(${props => props.linhas}, 1fr);
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
    border-radius: 8px;
`

const ProdutoCarrinho = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

class Carrinho extends React.Component {

    //método para formatar a lista como jsx, poderia ter componentizado também os produtos
    //do carrinho individualmente, assim como fiz nos produtos, para ficar mais clean, mas 
    //já tava cansado, então deixei assim
    atualizaProdutos = (lista) => {
        lista = lista.map((produto, index) =>{
            return <div>
            <img src={produto.imageUrl} />
                <p>{produto.name}</p>
                <p>R${produto.value.toFixed(2)}</p>
                <p>Quantidade: {produto.quantidade}</p>
                <p>R${(produto.value*produto.quantidade).toFixed(2)}</p>
                <button onClick={() => this.props.deletar(produto.id)}>Excluir produto</button>
            </div>       
        })
        return lista
    }

    //método utilizado para calcular o valor total dos itens no carrinho
    atualizaValor = (lista) => {
        let valor = 0;
        for(let i=0; i<lista.length; i++){
            console.log(lista[i]);
            valor += lista[i].value*lista[i].quantidade;
        }
        return valor
    }

    render(){
        let listaCarrinho = this.props.lista;
        const valorTotal = this.atualizaValor(listaCarrinho)
        listaCarrinho = this.atualizaProdutos(listaCarrinho)
        return <div>
            <h3>Meu carrinho</h3>
            <ContainerCarrinho linhas={listaCarrinho.length}>
                {listaCarrinho}
            </ContainerCarrinho>   
            <h1>Valor total: {valorTotal.toFixed(2)}</h1>
        </div>
       }
}

export default Carrinho;