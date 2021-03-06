import React from 'react';
import styled from 'styled-components'
import Produto from './Produto'
import IconeFiltro from '../img/filter_list.svg'

const ContainerProdutos = styled.div`
    background-color: white;
    width: 900px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(${props => props.linhas}, 1fr);
    gap: 10px;
    column-gap: 10px;
    justify-content: center;
    margin: 20px auto;
    border-radius: 8px;
`
const ContainerFiltros = styled.div`
    display: inline-flex;
    align-items: center;
`

const ContainerLogoFiltro = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 0 15px;
    :hover{
        cursor:pointer;
    }
`

const Legenda = styled.label`
    margin: 0 5px;
`

const listaDeProdutos = [
    {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=1",
        categoria: "veiculos"
    },
    {
        id: 2,
        name: "Sonda Cassini Original",
        value: 100000.0,
        imageUrl: "https://picsum.photos/400/400?a=21",
        categoria: "satelites"
    },
    {
        id: 3,
        name: "Telescópio espacial Hubble",
        value: 50000.0,
        imageUrl: "https://picsum.photos/400/400?a=3",
        categoria: "satelites"
    },
    {
        id: 4,
        name: "Sonda Messenger",
        value: 15000.0,
        imageUrl: "https://picsum.photos/400/400?a=4",
        categoria: "satelites"
    },
    {
        id: 5,
        name: "Ônibus Espacial Endeavour",
        value: 80000.0,
        imageUrl: "https://picsum.photos/400/400?a=5",
        categoria: "veiculos"
    },
    {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=6",
        categoria: "veiculos"
    },
    {
        id: 7,
        name: "Foguete Soyuz",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=7",
        categoria: "veiculos"
    },
    {
        id: 8,
        name: "Viagem para Tatuim",
        value: 30000.0,
        imageUrl: "https://picsum.photos/400/400?a=8",
        categoria: "viagens"
    },
    {
        id: 9,
        name: "Viagem para nebulosa Olho de Gato",
        value: 20000.0,
        imageUrl: "https://picsum.photos/400/400?a=9",
        categoria: "viagens"
    },
    {
        id: 10,
        name: "Camiseta agência espacial brasileira",
        value: 40.0,
        imageUrl: "https://picsum.photos/400/400?a=10",
        categoria: "roupas"
    },
    {
        id: 11,
        name: "Camisete da Nasa",
        value: 40.0,
        imageUrl: "https://picsum.photos/400/400?a=11",
        categoria: "roupas"
    },
    {
        id: 12,
        name: "Boné agência espacial Russa",
        value: 35.0,
        imageUrl: "https://picsum.photos/400/400?a=12",
        categoria: "roupas"
    },
    {
        id: 13,
        name: "Meteorito Santa Catarina",
        value: 2000.0,
        imageUrl: "https://picsum.photos/400/400?a=13",
        categoria: "meteoros"
    },
    {
        id: 14,
        name: "Meteorito de Bendegó",
        value: 3000.0,
        imageUrl: "https://picsum.photos/400/400?a=14",
        categoria: "meteoros"
    },
    {
        id: 15,
        name: "Meteoro Ceres",
        value: 70000.0,
        imageUrl: "https://picsum.photos/400/400?a=15",
        categoria: "meteoros"
    },
    {
        id: 16,
        name: "Missão espacial: National Geographic ",
        value: 65.0,
        imageUrl: "https://picsum.photos/400/400?a=16",
        categoria: "brinquedos"
    },
    {
        id: 17,
        name: "Ônibus espacial inflável",
        value: 30.0,
        imageUrl: "https://picsum.photos/400/400?a=17",
        categoria: "brinquedos"
    },
    {
        id: 18,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/400/400?a=18",
        categoria: "veiculos"
    },
    {
        id: 19,
        name: "Kit da NASA com o Programa Espacial em Metal Fundido",
        value: 80.0,
        imageUrl: "https://picsum.photos/400/400?a=19",
        categoria: "brinquedos"
    },
    {
        id: 20,
        name: "Cápsula Espacial - Linha Astronautas",
        value: 50.0,
        imageUrl: "https://picsum.photos/400/400?a=10",
        categoria: "brinquedos"
    }
]

class SecaoProdutos extends React.Component{
    state = {
        filtro: false,
        ordena: "",
        inputValorMinimo: "",
        inputValorMaximo: "",
        inputBusca: ""
    }

    //método utilizado no botão de filtro, para mostrar/esconder os inputs dos filtros
    abreFiltro = () =>{
        this.setState({filtro: !(this.state.filtro)})
    }
    
    //utilizado para adicionar o produto no carrinho, chamando a função adicionaCarrinho do App.js
    produtoCarrinho = (id) => {
        const produtoSelecionado = listaDeProdutos.find(produto => produto.id === id)
        this.props.passarProduto(produtoSelecionado)
    }

    //utilizado para o controle do select
    onChangeOrdena = (event) => {
        this.setState({ordena: event.target.value})
    }

    //utilizado para o controle do input de valor mínimo
    onChangeValorMinimo = (event) => {
        if(event.target.value>=0){
            this.setState({inputValorMinimo: event.target.value})
        }
    }

    //utilizado para o controle do input de valor máximo
    onChangeValorMaximo = (event) => {
        if(event.target.value>=0){
            this.setState({inputValorMaximo: event.target.value})
        }
    }

    //utilizado para o controle do input de busca
    onChangeInputBusca = (event) => {
        this.setState({inputBusca: event.target.value})
    }

    //utilizado para categorizar o produto de acordo com a seção. A verificação é feita com a lista
    //de produtos no estado e com a seção atual
    categorizaProdutos = (lista) => {
        if(this.props.secao){
            lista = lista.filter(item =>{
                if(item.categoria === this.props.secao){
                    return item
                }
            })
        }
        return lista;
    }

    //função para filtrar por valor, utilizei a verificação para se os valores estiverem vazios
    //mudar para -Inifinity e Infinity, porque qualquer número é maior que -infinito e qualquer 
    //número é menor que +infinito. Em seguida, filtra o array dependendo da propriedade value
    //de cada produto com o valor do input
    filtraPorValor = (lista) => {
        let valorMinimo = this.state.inputValorMinimo;
        let valorMaximo = this.state.inputValorMaximo;
        if(valorMinimo===""){
            valorMinimo=-Infinity;
        }
        if(valorMaximo===""){
            valorMaximo=Infinity;
        }

        lista = lista.filter(produto =>{
            return produto.value >= valorMinimo && produto.value <= valorMaximo
        })
        return lista;
    }

    //função para filtrar por nome. Utilizei o .toLowerCase para não ser CaseSensitive, 
    //tanto no produto quanto no input
    filtraPorNome = (lista) => {
        lista = lista.filter(produto =>{
            if(produto.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())){
                return true
            }
        })
        return lista;
    }

    //função para ordenar se o preço for crescente ou decrescente, de acordo com o select.
    //o else serve para voltar a ordenação por id, que é a ordenação padrão
    ordenaProdutos = (a, b) => {
        if(this.state.ordena === "precoCrescente"){
            return a.value - b.value
        } else if(this.state.ordena === "precoDecrescente"){
            return b.value-a.value
        } else {
            return a.id - b.id
        }
    }

    //função para formatar a lista para jsx, passando props de cada produto
    atualizaProdutos = (lista) => {
        lista = lista.map((produto, index) =>{
            return <Produto 
                    key={index}
                    id ={produto.id}
                    linkImagem={produto.imageUrl}
                    nome={produto.name}
                    valor={produto.value}
                    passarCarrinho={this.produtoCarrinho}
                  />
        })
        return lista
    }

    render(){
        //aqui pego a lista e passo por cada um dos métodos explicados acima,
        //para categorizar, filtrar, ordenar e formatar
        let lista = listaDeProdutos
        lista = this.categorizaProdutos(lista)
        lista = this.filtraPorValor(lista)
        lista = this.filtraPorNome(lista)
        lista = lista.sort(this.ordenaProdutos)
        lista = this.atualizaProdutos(lista)

        //se o estado do filtro estiver aberto, abre os inputs do filtro
        if(this.state.filtro){
            return <div>
                <ContainerFiltros>
                    <ContainerLogoFiltro onClick={this.abreFiltro}>
                        <img src={IconeFiltro} /> 
                        <span>Filtrar</span>
                    </ContainerLogoFiltro>
                    <Legenda for="minimo">Valor mínimo: </Legenda>
                    <input type="number" name="minimo" value={this.state.inputValorMinimo} onChange={this.onChangeValorMinimo} />
                    <Legenda for="maximo">Valor máximo: </Legenda>
                    <input type="number" name="maximo" value={this.state.inputValorMaximo} onChange={this.onChangeValorMaximo} />
                    <Legenda for="busca">Buscar Produto </Legenda>
                    <input type="text" name="busca" value={this.state.inputBusca} onChange={this.onChangeInputBusca} />
                </ContainerFiltros>
                <div>
                <Legenda for="ordena">Ordenar por</Legenda>
                    <select name="ordena" value={this.state.ordena} onChange={this.onChangeOrdena}>
                        <option value=""></option>
                        <option value="precoCrescente">Preço: menor para o maior</option>
                        <option value="precoDecrescente">Preço: maior para o menor</option>
                    </select>
                </div>
                <ContainerProdutos linhas={Math.ceil(lista.length/4)}>
                    {lista}
                </ContainerProdutos>
            </div>
        }

        return(
            <div>
                <ContainerLogoFiltro onClick={this.abreFiltro}>
                    <img src={IconeFiltro} /> 
                    <span>Filtrar</span>
                </ContainerLogoFiltro>
                <ContainerProdutos linhas={Math.ceil(lista.length/4)}>
                    {lista}
                </ContainerProdutos>
            </div>
        );
    }
}



export default SecaoProdutos;