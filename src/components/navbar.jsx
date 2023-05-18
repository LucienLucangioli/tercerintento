import React from 'react';
import NavbarItem from './navbar item';
import Searchbar from './Searchbar';

const Navbar = (props) => {

  const { nombre_logo, navbar_items, search_bar } = props
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
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trabajo
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Cupo Trans</a></li>
            <li><a className="dropdown-item" href="#">Contratatrans</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Emprendimientos</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Salud
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Opiniones y recomendaciones</a></li>
            <li><a className="dropdown-item" href="#">Hospitales</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Equipos Médicos</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Educación
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Finalizar Estudios</a></li>
            <li><a className="dropdown-item" href="#">Mocha Celis</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
     {search_bar && <Searchbar/>}
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
