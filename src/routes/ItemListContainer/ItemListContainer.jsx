import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import Item from "../../components/Item";
import { useEffect, useState } from "react";
import "./styles.css"

export default function ItemListContainer() {
  const { id } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, [id]);

  const fetchList = async () => {
    const result = await fetch(
      id
        ? `https://pokeapi.co/api/v2/type/${id}`
        : "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    const data = await result.json();

    if (id) {
      setList(data.pokemon.map((pokemon) => pokemon.pokemon));
    } else {
      setList(data.results);
    }
  };

  return (
    <Page>
      <div className="listContainer">

      {list.map((item, index) => (
        <Item key={item.name} index={index} name={item.name} url={item.url} />
      ))}

      </div>
    </Page>
  );
}
