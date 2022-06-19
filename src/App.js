import './App.css';
import React from 'react';
import Produto from './Componentes/Produtos';
import Filtros from './Componentes/Filtros';
import Carrinho from './Componentes/Carrinho';


class App extends React.Component {

  render() {

    return (
      <div className="containerPai">
        
         <Filtros>

          <h1>Filtros</h1>
          <input placeholder="Pesquisa" value= {this.state.query} onChange={this.novoQuery}/>
          <input type="number" placeholder="Preço Máximo" value= {this.state.query2} onChange={this.novoQuery2}/>
          <input type="number" placeholder="Preço Mínimo" value= {this.state.query3} onChange={this.novoQuery3}/>


        </Filtros>

        <Produto>
          {this.state.produtos

          .filter(produto =>{
          return produto.title.toLowerCase().includes(this.state.query.toLowerCase())
          })

          .filter(produto =>{
          return this.state.query2 === " " || produto.price >= this.state.query2
          })

          .filter(produto =>{
          return this.state.query3 === " " || produto.price <= this.state.query3
          })

          .map(produto => {
          return <card key={seilaoq} produto={produto}/>
          })
          }

        </Produto>
          
      </div>
    );
  }
  
}

export default App;
