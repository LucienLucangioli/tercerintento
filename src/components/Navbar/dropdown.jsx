import React from 'react';
import NavbarItem from './navbar item';

const Dropdown = (props) => {
    const { dropdown_items, dropdown_name } = props
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {dropdown_name}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {dropdown_items?.length > 0 && dropdown_items.map((nombre) => (
            <NavbarItem nombre_item={nombre}/>
          ) )}
        </ul>
        </li>
    );
}

export default Dropdown;
