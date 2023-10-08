import React, { Component } from 'react';

export default class Eventos extends Component{

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
          <h2>Events in class components</h2>
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