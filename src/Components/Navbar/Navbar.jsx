import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/freshcart-logo.svg';
import { UserContext } from '../Context/UserContext.jsx';
import { CartContext } from '../Context/CartContext.jsx';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navigate = useNavigate();
  let { userData, setUserData } = useContext(UserContext);
  let { cart } = useContext(CartContext);

  function handleLogout() {
    localStorage.removeItem('usertoken');
    setUserData(null);
    navigate('/login');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <> 
    <nav className='bg-gray-100 px-3 py-3 fixed top-0 left-0 w-full z-50'>
        <div className="container mx-auto flex flex-wrap items-center justify-between relative">
          <div className='flex items-center '>
            <img src={logo} width={200} className=' mr-4' alt="Freshcart Logo" />
          </div>

          <ul className='hidden lg:flex space-x-4 absolute left-1/2 transform -translate-x-1/2 p-2 rounded-lg'>
            {userData && (
              <>
                <li className='font-semibold p-2 text-md'><NavLink to="">Home</NavLink></li>
                <li className='font-semibold p-2 text-md'><NavLink to="products">Products</NavLink></li>
                <li className='font-semibold p-2 text-md'><NavLink to="wishlist">Wishlist</NavLink></li>
                <li className='font-semibold p-2 text-md'><NavLink to="categories">Categories</NavLink></li>
                <li className='font-semibold p-2 text-md'><NavLink to="brands">Brands</NavLink></li>
              </>
            )}
          </ul>
          
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='text-gray-600 text-3xl'>
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <div className='hidden lg:flex space-x-4'>
            <ul className='flex items-center'>
              {userData ? (
                <>
                  <li className='font-semibold p-2 text-md relative'>
                    <NavLink to="cart">
                      <i className='fa-solid fa-cart-shopping text-2xl text-main'></i>
                      {cart && cart.numOfCartItems > 0 && (
                        <span className='bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
                          {cart.numOfCartItems}
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className='font-semibold p-4 text-md cursor-pointer' onClick={handleLogout}>Logout</li>
                </>
              ) : (
                <>
                  <li className='font-semibold p-4 text-md'><NavLink to="register">Register</NavLink></li>
                  <li className='font-semibold p-4 text-md'><NavLink to="login">Login</NavLink></li>
                </>
              )}
            </ul>
          </div>
        </div>
         
        {isMenuOpen && (
          <div id="mobile-menu" className='lg:hidden flex flex-col items-center bg-gray-100'>
            <ul className='flex flex-col items-center'>
              {userData && (
                <>
                  <li className='font-semibold p-4 text-md'><NavLink to="home">Home</NavLink></li>
                  <li className='font-semibold p-4 text-md'><NavLink to="products">Products</NavLink></li>
                  <li className='font-semibold p-4 text-md'><NavLink to="categories">Categories</NavLink></li>
                  <li className='font-semibold p-4 text-md'><NavLink to="brands">Brands</NavLink></li>
                  <li className='font-semibold p-2 text-md relative'>
                    <NavLink to="cart">
                      <i className='fa-solid fa-cart-shopping text-2xl text-main'></i>
                      {cart && cart.numOfCartItems > 0 && (
                        <span className='bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
                          {cart.numOfCartItems}
                        </span>
                      )}
                    </NavLink>
                  </li>
                </>
              )}

              {userData ? (
                <li className='font-semibold p-4 text-md cursor-pointer' onClick={handleLogout}>Logout</li>
              ) : (
                <>
                  <li className='font-semibold p-4 text-md'><NavLink to="register">Register</NavLink></li>
                  <li className='font-semibold p-4 text-md'><NavLink to="login">Login</NavLink></li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
