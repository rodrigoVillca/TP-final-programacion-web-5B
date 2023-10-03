import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";

export function Char() {
  const { personajes, getAllCharacters } = useCharacters();

  // hook que nos permite ejecutar codigo cuando nosotros necesitemos
  // useEffect recibe 2 parametros, 1ro es una funcion que va a ejecutar codigo
  // 2do parametro dependencias, si le pasas [] vacio significa que solo se ejecutara cuando la app se renderice
  // si le pasamos valores [valor] significa que se ejecutara cada vez que el valor se actualice

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <ul>
      {personajes.map((personaje, index) => (
        <li key={index}>
          <h3>{personaje.name}</h3>
          <p>{personaje.status}</p>
          <img src={personaje.image} />
        </li>
      ))}
    </ul>
  );
}
//meterle css
