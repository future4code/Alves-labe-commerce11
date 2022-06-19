import './App.css';


export default class Produtos extends React.Component {
 
}

let produto1 = new Produto("Camisa Nasa", 99, "img/p1.jpg");
let produto2 = new Produto("Capacete Astronauta", 599, "img/p2.jpg");
let produto3 = new Produto("Camisa Espaço", 79, "img/p3.jpg");
let produto4 = new Produto("Pedaço de meteorito", 1500, "img/p4.jpg");
  
arrayProduto = [produto1, produto2, produto3, produto4]

function Produto (props) {
    
    return(

        <div className='produto'>
            <img src={ props.produto.img } />
            <p>{ props.produto.nome }</p>
            <p>R$ {props.produto.preco }</p>
        </div>

    )
}

