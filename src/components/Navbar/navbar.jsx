import React from 'react';
import NavbarItem from './navbar item';
import Searchbar from './Searchbar';
import Dropdown from './dropdown';

const Navbar = (props) => {

  const { nombre_logo, navbar_items, search_bar, dropdown, dropdown_items, dropdown_name } = props
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{nombre_logo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navbar_items.map((nombre) => (
           <NavbarItem nombre_item={nombre}/>))}
           {dropdown && <Dropdown dropdown_name = {dropdown_name} dropdown_items = {dropdown_items}/>}
      </ul>
     {search_bar && <Searchbar/>}
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
