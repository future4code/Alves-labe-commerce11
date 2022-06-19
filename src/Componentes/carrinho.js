import React from "react";

class Produto extends React.Component{
   qty: 0
};

adicionaProduto(){
    this.setState({
        qty: this.state.qty + 1
    });
}

removeProduto(){
    this.setState({
        qty: this.state.qty - 1
    })
};

somaProduto(){
    state = {
        contador: 0,
    }
    addSoma = () => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }
};

