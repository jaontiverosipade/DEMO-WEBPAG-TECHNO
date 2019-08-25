import React from 'react';
import { Link } from 'react-router-dom';
import TechnoLogo from '../assets/TechnoLogo.jpg';
import nintendo from '../assets/nintendo.png';



const Navigation = () => <header className="header">
<div className="container grid-container">
  <div className="logo-wrapper">
   <img src={TechnoLogo} width="70" alt="" />
   <a title="Ve a Nintendo" href="https://www.nintendo.com/es_LA/"><img src={nintendo} width="90" alt="" /></a>
   </div>
  <div className="navbar">
    <ul className="nav">
      <li className="nav-item"><Link to="/"><strong>Techno</strong></Link></li>
      <li className="nav-item"><Link to="/about"><strong>Acerca de Nosotros</strong></Link></li>
      <li className="nav-item"><Link to="/contact"><strong>Estamos en Contact</strong></Link></li>
      <li className="nav-item nav-menu">
      
      </li>
    </ul>
  </div>
</div>
</header>;

export default Navigation;