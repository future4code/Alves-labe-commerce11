import Produto from "./Produto";

function Catalogo(props)
{
    let produtos = [];
    
    for (let x=0; x<props.produtos.length; x++) 
    {
        produto.push(<Produto produto={props.produtos[x]} />);
    }

    return (
        <div className="catalogo">
         {Produtos}
        <Produto produtos={props.produto[0]} />
        <Produto produtos={props.produto[1]} />
        <Produto produtos={props.produto[2]} />
        <Produto produtos={props.produto[3]} />
    
        </div>
    );
}

export default Catalogo;