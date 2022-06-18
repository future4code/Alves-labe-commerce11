import './App.css';
   

function Produto(props)
{
    return(
        <div className='produto'>
            <img src={ props.produto.img } />
            <p>{ props.produto.nome }</p>
            <p>R$ {props.produto.preco }</p>
           </div>
        
    )
}

export default Produto;