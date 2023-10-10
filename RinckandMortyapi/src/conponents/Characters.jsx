import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./style.css";
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
    <body>
      <h1> The rick and Morty API</h1>
      <div className="capsula">
        <ul className="contenedor">
          {personajes.map((personaje, index) => (
            <li key={index}>
              <div className=" mi_div">
                <img src={personaje.image} />
                <div className="texto">
                  <h2>{personaje.name}</h2>
                  <p>
                    {personaje.status}-{personaje.species}
                  </p>
                  <p>Last known location:</p>
                  <h4>{personaje.origin.name}</h4>
                  <p>First seen in:</p>
                  <h4>--------</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}
