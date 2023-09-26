import { useEffect, useState } from "react";

export function Char() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <ul>
      {personajes.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.img} />
        </li>
      ))}
    </ul>
  );
}
//meterle css
