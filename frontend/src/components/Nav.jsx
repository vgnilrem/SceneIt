import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import RegisterModal from './Register'; // import your modal

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // optional: close mobile menu when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-1">
                <img src='/sceneit.png' width={35} alt="SceneIt" />
                <span className="font-medium text-3xl">SceneIt</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200 font-normal"
                >
                  Log In
                </a>
                <button
                  onClick={openModal}
                  className="hover:text-secondary transition-colors duration-200 font-normal"
                >
                  Create an Account
                </button>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200 font-normal"
                >
                  Shows
                </a>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200 font-normal"
                >
                  Playlists
                </a>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                  placeholder="Search"
                  className="bg-primary border text-white placeholder-gray-300 rounded-full px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700">
              <div className="relative mb-4 px-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                  placeholder="Search"
                  className="bg-slate-600 text-white placeholder-gray-300 rounded-full px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                />
                <Search
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4"
                />
              </div>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-600 transition-all duration-200"
              >
                Log In
              </a>
              <button
                onClick={openModal}
                className="text-gray-300 block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-slate-600 transition-all duration-200"
              >
                Create an Account
              </button>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-600 transition-all duration-200"
              >
                Shows
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-600 transition-all duration-200"
              >
                Playlists
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Register Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Nav;