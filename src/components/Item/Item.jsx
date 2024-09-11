import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";


const Item = ({ id, name, types, price, stock }) => {


  return (
    <Link to={`/item/${id}`}>
    <div className="item">
      <img
        className="itemImage"
        src={`https://firebasestorage.googleapis.com/v0/b/coderfirebase.appspot.com/o/pokeImg%2F${id}.svg?alt=media&token=d83cd3bd-6e30-4b0b-949d-b9f5f4960352`}
        alt="Pokemon"
        />
  

      <p>{name}</p>
      <p>{price}</p>
      <p>${stock}</p>
    </div>
  </Link>
  );
}
export default Item;