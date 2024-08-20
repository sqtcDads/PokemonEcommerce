import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Item = ({ url, name, index }) => {
  const [weight, setWeight] = useState(0);

  useEffect(
    () => {fetchPokemon();}, 
    []
  );

  const fetchPokemon = async () => {
    const result = await fetch(url);
    const data = await result.json();

    setWeight(data.weight);
  };

const idPokemon = url
  .split("pokemon/")[1]
  .replace("/", "")

  return (
    <Link to={`/item/${idPokemon}`}>
      <div className="item">
        <img
          className="itemImage"
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
          alt="Pokemon"
        />

        <p>{name}</p>
        <p>${weight}</p>
      </div>
    </Link>
  );
};

export default Item;
