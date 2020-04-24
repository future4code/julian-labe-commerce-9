import React from 'react';
import styled from 'styled-components'

const ContainerProduto = styled.div`
    display: flex;
    flex-direction: column;
`

const Imagem = styled.img`
    max-width: 100%;
`


class Produto extends React.Component {
    render(){
        return <ContainerProduto>
            <Imagem src={this.props.linkImagem} />
            <p>{this.props.nome}</p>
            <p>R${this.props.valor.toFixed(2)}</p>
            <button onClick={() => this.props.passarCarrinho(this.props.id)}>Adicionar ao carrinho</button>
        </ContainerProduto>
    }
}

export default Produto;