import React from 'react';

class Carrinho extends React.Component {
    atualizaProdutos = (lista) => {
        lista = lista.map((produto, index) =>{
            return <div>
            <img src={produto.imageUrl} />
                <p>{produto.name}</p>
                <p>R${produto.value.toFixed(2)}</p>
                <p>Quantidade:{produto.quantidade}</p>
                <button onClick={() => this.props.deletar(produto.id)}>Excluir produto</button>
            </div>       
        })
        return lista
    }
    render(){
        let listaCarrinho = this.props.lista;
        listaCarrinho = this.atualizaProdutos(listaCarrinho)
        return <div>
            {listaCarrinho}
        </div>   
       }
}

export default Carrinho;