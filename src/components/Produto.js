import React from 'react';
import styled from 'styled-components'

const Imagem = styled.img`
    max-width: 100%;
`


class Produto extends React.Component {
    adicionaAoCarrinho = (id) =>{
        console.log(id);
    }
    
    render(){
        return <div>
            <Imagem src={this.props.linkImagem} />
            <p>{this.props.nome}</p>
            <p>R${this.props.valor.toFixed(2)}</p>
            <button onClick={() => this.adicionaAoCarrinho(this.props.id)}>Adicionar ao carrinho</button>
        </div>
    }
}

export default Produto;