import { Link, useNavigate } from 'react-router-dom';
import Badge  from 'react-bootstrap/Badge';
import { useState } from 'react';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">FoodAdda</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto mx-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/" onClick={handleNavCollapse}>Home</Link>
            </li>

          {(localStorage.getItem("authToken")) ? 
          <li className='nav-item'>
            <Link className="nav-link active fs-5" aria-current="page" to="/myOrder" onClick={handleNavCollapse}>My Orders</Link>
          </li> 
          : ""}
          </ul>
          {(!localStorage.getItem("authToken")) ?
          <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/login" onClick={handleNavCollapse}>Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser" onClick={handleNavCollapse}>SignUp</Link>
          </div>
          : 
          <div>
          <div className='btn bg-white text-success mx-1' onClick={()=> {setCartView(true)}}>
            My Cart {" "}
            <Badge pill bg="danger"> {data.length} </Badge>
          </div>
          {cartView ? <Modal onClose={()=> {setCartView(false)}}><Cart></Cart></Modal>: null}
          <div className='btn bg-white text-danger mx-1' onClick={handleLogout}>
            LogOut
          </div>
          </div>
          }
        </div>
      </div>
    </nav>
  );
}
