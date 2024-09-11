import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import Item from "../../components/Item";
import { useEffect, useState } from "react";
import "./styles.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api";


export default function ItemListContainer() {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, [id]);

    const fetchList = async () => {
    const pokeData = await getDocs(collection(db, "pokemon"));
    const pokeList = pokeData.docs.map((doc) => doc.data())
    setList(pokeList)
    console.log(pokeData);
    pokeData.forEach((pokemon) => {
      console.log(pokemon.id, pokemon.data());
    });

  
  };

  return (
    <Page>
      <div className="listContainer">
        {list.map((item, index) => (
          <Item key={item.name} index={index} name={item.name} id={item.id} />
        ))}
      </div>
    </Page>
  );
}

