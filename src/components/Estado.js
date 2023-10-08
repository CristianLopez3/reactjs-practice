import React, {Component} from "react";

function estadoHijo(props){
  return (
    <>
      <div>
        <p>{props.contadorHijo}</p>
      </div>
    </>
  )
}

export default class Estado extends Component {

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
    /*
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000)
    */
  }

  render(){
    return (
      <>
        <div>
          <h2>State</h2>
          <p>{this.state.contador}</p>
          <estadoHijo contadorHijo = {this.state.contador} />
        </div>
      </>
    );
  }

}