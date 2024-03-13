import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import closeIcon from '../assets/images/icon-menu-close.svg'; 
import menuIcon from '../assets/images/icon-menu.svg'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 300); 
    }
  };

  return (
    <header className="flex justify-between items-center p-5">
      <img src={logo} alt="W." className="h-10" />
      <button className={`${isMenuOpen ? 'hidden' : 'block'} md:hidden z-40`} onClick={toggleMenu}>
        <span className="sr-only">Menu</span>
        <img src={menuIcon} alt="Menu" className="h-8 w-8" />
      </button>
      <nav className="hidden md:block">
        <ul className="flex space-x-10 text-Dark-grayish-blue font-medium">
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Home</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">New</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Popular</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Trending</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Categories</a></li>
        </ul>
      </nav>
      <div className={`${isMenuOpen ? 'fixed inset-0' : 'hidden'} bg-black bg-opacity-50 w-full h-full z-20 transition-opacity duration-400 ease-in-out`}>
        <div className={`fixed top-0 right-0 bottom-0 bg-white z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-4/5 p-5 duration-400 ease-in-out`}>
          <button onClick={toggleMenu} className="absolute top-5 right-5">
            <img src={closeIcon} alt="Close" className="h-8 w-8" />
          </button>
          <nav className="mt-24 p-5">
            <ul className="flex flex-col space-y-10 text-black font-medium text-2xl">
              <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">New</a></li>
              <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Popular</a></li>
              <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Trending</a></li>
              <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Categories</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;