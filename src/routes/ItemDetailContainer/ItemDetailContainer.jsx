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
    const url = `https://firebasestorage.googleapis.com/v0/b/coderfirebase.appspot.com/o/pokeImg%2F${id}.svg?alt=media&token=d83cd3bd-6e30-4b0b-949d-b9f5f4960352`;
    const result = await fetch(url);
    const data = await result.json();
    setPokemon(data);
  };

  return (
    <Page>
      <div className="detailContainer">
        <img
          className="detailImage"
          src={`https://firebasestorage.googleapis.com/v0/b/coderfirebase.appspot.com/o/pokeImg%2F${id}.svg?alt=media&token=d83cd3bd-6e30-4b0b-949d-b9f5f4960352`}

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

