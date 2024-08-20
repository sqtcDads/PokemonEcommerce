import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import "./styles.css";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const data = await result.json();
    setPokemon(data);
  };

  return (
    <Page>
      <div className="detailContainer">
        <img
          className="detailImage"
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
        />

        <div className="infoContainer">
          <h2>{pokemon.name}</h2>
          <p>${pokemon.weight}</p>
          <p>{id}</p>
        </div>
      </div>
    </Page>
  );
}
