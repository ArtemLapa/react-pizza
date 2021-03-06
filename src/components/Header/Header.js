// import React from 'react';
import Logo from '../../assets/img/pizza-logo.svg';
import ButtonCart from '../ButtonCart/ButtonCart';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={Logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <ButtonCart />
        </div>
      </div>
    </div>
  );
}
export default Header;
