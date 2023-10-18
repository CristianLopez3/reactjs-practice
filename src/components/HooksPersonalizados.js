import React from 'react';
import { useFetch } from '../hooks/useFetch'; // Los hooks se identifican por el prefijo 'use'.

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let { data, isPending, error } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  return (
    <>
      <h2> Hooks Personalizados </h2>
      <p>Error: {JSON.stringify(error)}</p>
      <p>
        <mark> Is Pending: {JSON.stringify(isPending)}</mark>
      </p>
      <p>
        <code>Data: {JSON.stringify(data)}</code>
      </p>
    </>
  );
}
