//hook personalizado

import { useState } from "react";

export function useCharacters() {
  const [personajes, setPersonajes] = useState([]); //hook que nos permite guardar y actualizar valores
  // en la primera parte vamos a tener el valor, y en la segunda una funcion seteadora del valor
  const [episodes, setEpisodes] = useState([]);

  function getAllCharacters() {
    //fetch realiza una peticion get a la api/url que le pasemos
    //fetch es asincronico - pide una determinada info y hay que esperarla, para eso usamos el then
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }
  function getAllEpisodes(episodios) {
    return fetch(`https://rickandmortyapi.com/api/episode/${episodios}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }
  return {
    personajes,
    getAllCharacters,
    getAllEpisodes,
    episodes,
  };
}
