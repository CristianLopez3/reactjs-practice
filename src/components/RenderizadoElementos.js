import React, { Component } from "react";
import data from '../helpers/data.json';

function renderElement(el){
  return(
    <li key={el.id}>
      <a href={el.url} >{el.name}</a>
    </li>
  );
}


export default class RenderizadoElementos extends Component{

  constructor(props){
    super(props);
    this.state = {
      heroes: ["batman", "superman", "spiderman", "aquaman"]
    }

  }

  render(){
      return (
        <>
          <h2>Elements Render</h2>
          <h3>heros</h3>
          <ol>
            {this.state.heroes.map((el) => <li>{el}</li>)}
          </ol>
          <h3>Fron-end frameworks</h3>
          <ul>
            {data.frameworks.map(
              (el) => renderElement(el)
            )}
          </ul>
        </>
      );
  }

}