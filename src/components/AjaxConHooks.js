import React, { useState, useEffect } from 'react';

function Pokemon({nombre, avatar}){
  return(
    <>
      <figure>
        <img src={avatar} alt={nombre} />
        <figcaption>{nombre}</figcaption>
      </figure>
    </>
  )
}

export default function AjaxConHooks(){

  const[pokemons, setPokemons] = useState([]);

  useEffect(() => {

    const getData = async (url) => {
      
      const response = await fetch(url),
      data = await response.json();
      // console.log(data);

      data.results.forEach(async (el) => {
        const res = await fetch(el.url);
        const json = await res.json();
        // console.log(json);

        let pokemon = {
          id: json.id,
          nombre: json.name,
          avatar: json.sprites.front_default
        };

        setPokemons(pokemons => [...pokemons, pokemon]);

      })

    }

    getData("https://pokeapi.co/api/v2/pokemon/");

  }, [])

  return (
    <>
      <h2>Peticiones a API con Fetch y Hooks</h2>
      {
        (pokemons.length === 0 ) ?
          (<h2>Cargando...</h2>) :
          (pokemons.map((el) => {
            return <Pokemon avatar={el.avatar} key={el.id} nombre={el.nombre} />
          }))
      }
    </>
  );

} 