import "./styles.css";
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <header>
      <img src="#" alt="" />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/category/rock">Roca</Link>
          </li>
          <li>
            <Link to="/category/grass">Planta</Link>
          </li>
          <li>
            <Link to="/category/fire">Fuego</Link>
          </li>
          <li>
            <Link to="/category/water">Agua</Link>
          </li>
        </ul>
      </nav>


      <div className="car"> <Icon path={mdiCartOutline} size={1} /> </div>
    </header>
  );
}
