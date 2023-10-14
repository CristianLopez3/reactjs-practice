import React, { Component } from 'react';

class Reloj extends Component{
  constructor(props){
    super(props);
  
  }

  componentWillUnmount(){
  //  console.log(3, "El componente ha sido eliminado del DOM");
  }

  render(){
    return <h3>{this.props.hora}</h3>
  }
}

export default class CicloVida extends Component {

  constructor(props) {
    super(props);
   // console.log(0, "El componente se inicializa, aun NO esta en el DOM");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    }
    this.temporizador = null
  
  }
  
  // Todo servicio (api, data), se consume en el metodo componentDidMount.
  componentDidMount(){
    //console.log(1, "Se inicializa el component")
  }

  componentDidUpdate(prevProps, prevState){
   // console.log(2, "El estado del componente ha cambiado");
    console.log(prevProps);
    console.log(prevState);
  }
  

  Tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  Iniciar = () => {
    this.Tictac();
    this.state.visible = true;
  }

  Detener = () => {
    this.state.visible = false;
    clearInterval(this.temporizador);
  }

  render() {
    // console.log(4, "el componente ya se dibujo")
    return (
      <>
        <h2>ciclo de vida de los componentes</h2>
        {this.state.visible && <Reloj hora={this.state.hora}/>}
        <button onClick={this.Iniciar}>Iniciar</button>
        <button onClick={this.Detener}>Parar</button>
      </>
    );
  }

}