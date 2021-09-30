import React from "react";
import CartButton from "./CartButton/cartButton";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="easterEgg">
        <h5>Muttuals</h5>
      </div>
      <li className="navItem">
        <a className="navButton" href="Index">
          <img src="./Multimedia/icons8-house-64.png" alt="Index" />
        </a>
      </li>
      <li className="navItem">
        \
        <a className="navButton" href="Portfolio">
          <img src="Multimedia/icons8-web-design-64.png" alt="Portfolio" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="Nosotras">
          <img src="Multimedia/icons8-test-account-64.png" alt="Nosotras" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="Servicios">
          <img src="Multimedia/icons8-checkout-64.png" alt="Servicios" />
        </a>
      </li>
      <li className="navItem">
        <a className="navButton" href="Contacto">
          <img src="Multimedia/icons8-contact-64.png" alt="Contacto" />
        </a>
      </li>
      <CartButton />
    </nav>
  );
};

export default NavBar;
