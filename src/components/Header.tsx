import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-3xl font-bold">W.</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">New</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Popular</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Trending</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;