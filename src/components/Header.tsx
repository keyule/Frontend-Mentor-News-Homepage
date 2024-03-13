import React, { useState }  from 'react';
import logo from '../assets/images/logo.svg';


const Header: React.FC = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5">
      <img src={logo} alt="W." className="h-10" />
      {/* Mobile Menu Button */}
      <button className="text-3xl md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'} {/* This is a simplistic placeholder, use an icon instead */}
      </button>
      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10 text-Dark-grayish-blue font-medium">
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Home</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">New</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Popular</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Trending</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Categories</a></li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute bg-white top-10 left-0 w-full p-5 md:hidden`}>
        <ul className="flex flex-col space-y-4 text-Dark-grayish-blue font-medium">
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Home</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">New</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Popular</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Trending</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
};



/* const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="W." className="h-10" />
      <nav>
        <ul className="flex space-x-10 text-Dark-grayish-blue font-medium">
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Home</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">New</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Popular</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Trending</a></li>
          <li><a href="#" className="hover:text-Soft-red transition-colors duration-200">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
};
 */
export default Header;