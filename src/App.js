import './App.css';
import React from 'react';
import logo from './logo.svg';
import Catalogo from './Componentes/Catalogo';

var loja = "Loja Espaco";
{
  nomeApp:"Loja Espaco"
};

class Produto {
  constructor(img, nome, preco) 
  {
    this.img = img;
    this.nome = nome;
    this.preco = preco;
  }
}

let produto1 = new Produto("Camisa Nasa", 99, "img/p1.jpg");
let produto2 = new Produto("Capacete Astronauta", 599, "img/p2.jpg");
let produto3 = new Produto("Camisa Espaço", 79, "img/p3.jpg");
let produto4 = new Produto("Pedaço de meteorito", 1500, "img/p4.jpg");

let Produto = [produto1, produto2, produto3, produto4]

function App() 
{
  return (
    <div className="container">
      <header className="App-header">
        <Catalogo produtos={produtos} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
