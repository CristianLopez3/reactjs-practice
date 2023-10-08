import React, { Component } from 'react';

export  class EventosEM6 extends Component{

  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    }
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e){
    console.log("plus");
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(e){
    console.log("minus");
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render(){
    return (
      <>
        <div>
          <h2>Events in class components with EM6</h2>
          <p>{this.state.contador}</p>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
        </div>
      </>
    );
  }

} 

// properties initizlr - no need it bind for the methods
export  class EventosEM7 extends Component{

  state = {
    contador: 0,
  }

  sumar = (e) => {
    console.log("plus");
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar = (e) => {
    console.log("minus");
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render(){
    return (
      <>
        <div>
          <h2>Events in class components with EM7</h2>
          <p>{this.state.contador}</p>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
        </div>
      </>
    );
  }

} 