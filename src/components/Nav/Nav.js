import { Link, Outlet } from 'react-router-dom';
import './Nav.css';
import pizzaNav from './homePhoto.jpg';

function Nav() {
  return (<>
    <div className="App">
      <header>
        <div className="header-image-container">
          <img src={pizzaNav} alt="Pizza" className="header-image" />
        </div>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <span className="navbar-brand" >Pizzeria</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pizzas">Pizzas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/drinks">Drinks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li>
                  <Link className="nav-link" to="/cart">🛒 Cart</Link>
                </li>
                  <Link className="nav-link" to="/number">☎️ Make your order: 1234-5678</Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
    <Outlet/>
  </>
  );
}

export default Nav;