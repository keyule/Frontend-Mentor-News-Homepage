import React from 'react';
import logo from '../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <img src={logo} alt="W." className="h-10" />
      <nav>
        <ul className="flex space-x-16 text-Dark-grayish-blue font-medium hover:text-gray-900">
          <li><a href="#" className="">Home</a></li>
          <li><a href="#" className="">New</a></li>
          <li><a href="#" className="">Popular</a></li>
          <li><a href="#" className="">Trending</a></li>
          <li><a href="#" className="">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;