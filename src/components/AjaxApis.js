import React, { Component } from 'react';

function Pokemon(props) {
  return (
    <figure className='pokemons'>
      <img src={props.url} alt={props.name} />
      <figcaption>{props.name}</figcaption> {/* Corrección de la etiqueta */}
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              // console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                url: json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons }); // Corrección en la actualización del estado
            })
        })
      })
      .catch(err => { console.info(err) })
  }

  render() {
    return (
      <>
        <h2>Componentes de clase con Ajax</h2>
        <p>Elementos pintados</p>
        {
          this.state.pokemons.length === 0 ?
            (<h2>Cargando...</h2>) :
            (this.state.pokemons.map((el) => {
              return <Pokemon key={el.id} name={el.name} url={el.url} />; // Agregando 'return'
            }))
        }
      </>
    );
  }
}
