import React from "react";
//não vou exportar pq é elhor usar chaves no app//

export default class Filtros extends React.Component {

  state = {
    query: " ",
    query2: " ",
    query3: " "
  }
  
  novoQuery = (event) => {
    this.setState({

      query: event.target.value

    })

  }

  novoQuery2 = (event) => {
    this.setState({

      query2: event.target.value

    })

  }

  novoQuery3 = (event) => {
    this.setState({

      query3: event.target.value

    })

  }

  render() {
    return (

      <ContainerFiltro>

      <h1>Filtros</h1>
      <input placeholder="Pesquisa" value= {this.state.query} onChange={this.novoQuery}/>
      <input type="number" placeholder="Preço Máximo" value= {this.state.query2} onChange={this.novoQuery2}/>
      <input type="number" placeholder="Preço Mínimo" value= {this.state.query3} onChange={this.novoQuery3}/>

      </ContainerFiltro>
    )
  }
}

//parte do codigo que vai no app pra rodar o componente a cima//

{/* <containerDaCarla>

  {this.state.produtos

  .filter(produto =>{
    return produto.title.toLowerCase().includes(this.state.query.toLowerCase())
  })

  .filter(produto =>{
    return this.state.query2 === " " || produto.price >= this.state.query2
  })

  .filter(produto =>{
    return this.state.query3 === " " || produto.price >= this.state.query3
  })

  .map(produto => {
    return <card key={seilaoq} produto={produto}/>
  })
  }

</containerDaCarla> */}
