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

class SecaoProdutos extends React.Component{
    state = {
        listaDeProdutos: [
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
        ],
        ordena: "",
        inputValorMinimo: "",
        inputValorMaximo: "",
        inputBusca: ""
    }

    atualizaProdutos = (lista) => {
        lista = lista.map((produto, index) =>{
            return <Produto 
                    key={index}
                    id ={produto.id}
                    linkImagem={produto.imageUrl}
                    nome={produto.name}
                    valor={produto.value}
                  />
        })
        return lista
    }

    onChangeOrdena = (event) => {
        this.setState({ordena: event.target.value})
    }

    onChangeValorMinimo = (event) => {
        if(event.target.value>=0){
            this.setState({inputValorMinimo: event.target.value})
        }
    }

    onChangeValorMaximo = (event) => {
        if(event.target.value>=0){
            this.setState({inputValorMaximo: event.target.value})
        }
    }

    onChangeInputBusca = (event) => {
        this.setState({inputBusca: event.target.value})
    }

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
    filtraPorNome = (lista) => {
        lista = lista.filter(produto =>{
            if(produto.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())){
                return true
            }
        })
        return lista;
    }

    ordenaProdutos = (a, b) => {
        if(this.state.ordena === "precoCrescente"){
            return a.value - b.value
        } else if(this.state.ordena === "precoDecrescente"){
            return b.value-a.value
        } else {
            return a.id - b.id
        }
    }

    render(){
        let lista = this.state.listaDeProdutos
        lista = this.categorizaProdutos(lista)
        lista = this.filtraPorValor(lista)
        lista = this.filtraPorNome(lista)
        lista = lista.sort(this.ordenaProdutos)
        lista = this.atualizaProdutos(lista)

        if(this.props.filtro){
            return <div>
                <ContainerFiltros>
                    <ContainerLogoFiltro onClick={this.props.abreFiltro}>
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
                <ContainerLogoFiltro onClick={this.props.abreFiltro}>
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