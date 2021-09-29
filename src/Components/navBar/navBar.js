import React from "react";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="easterEgg">
        <h5>Muttuals</h5>
      </div>
      <li className="navItem">
        <a className="navButton" href="#">
          <img src="./Multimedia/icons8-house-64.png" alt="Index" />
        </a>
      </li>
      <li className="navItem">
        \
        <a className="navButton" href="#">
          <img src="Multimedia/icons8-web-design-64.png" alt="Portfolio" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="#">
          <img src="Multimedia/icons8-test-account-64.png" alt="Nosotras" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="#">
          <img src="Multimedia/icons8-checkout-64.png" alt="Servicios" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="#">
          <img src="Multimedia/icons8-contact-64.png" alt="Contacto" />
        </a>
      </li>
    </nav>
  );
};

export default NavBar;
