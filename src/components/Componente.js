import React, { Component } from "react";

class Componente extends Component {

  render() {
    return <h2>{this.props.msg}</h2>
  }


}

export default Componente;

/** 
 * Component with functions
 */

/*
function Componente(props){
  return
    <>
      <h2>{this.props.msg}</h2>
      <br />
    </>
}

const Componente = (props) => {
  return
    <>
      <h2>{this.props.msg}</h2>
      <br />
    </>
}
*/