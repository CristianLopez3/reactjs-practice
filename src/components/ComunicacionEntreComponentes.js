import React, { Component } from 'react';

export class Padre extends Component {

  state = {
    contador: 0,
  }

  Incrementar = (e) => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render(){
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <p><b>{this.state.contador}</b></p>
        <Hijo IncrementarContador = {this.Incrementar} msg = "hijo 1"/>
        <Hijo IncrementarContador = {this.Incrementar} msg = "hijo 2" />
      </>
    );
  }

}

function Hijo(props){
  return(
    <>
      <p> {props.msg} </p>
      <button onClick={props.IncrementarContador}> click me! </button>
    </>
  );
}