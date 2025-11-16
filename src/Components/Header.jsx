import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from "../Assets/img/harry logo.png";
import hangingMonkey from "../Assets/img/Monkey.png"; // Import the hanging monkey image
import Button from './Button';
import SocialDualButton from './SocialDualButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-1 px-2 sm:px-6 transition-all duration-300 
      ${isScrolled ? 'bg-amber-100 shadow-md ' : 'bg-transparent'} z-50`}
      style={{ transition: 'background-color 0.3s ease' }}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logoimg} alt="Hilarious Harry Logo" className="w-32 h-8 sm:w-44 sm:h-12 lg:w-56 lg:h-14" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold text-xs lg:text-sm border-b-2 border-orange'
              : 'text-black font-bold text-xs lg:text-sm hover:text-orange'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mission"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold text-xs lg:text-sm border-b-2 border-orange'
              : 'text-black font-bold text-xs lg:text-sm hover:text-orange'
          }
        >
          Mission
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold text-xs lg:text-sm border-b-2 border-orange'
              : 'text-black font-bold text-xs lg:text-sm hover:text-orange'
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/tokenomics"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold text-xs lg:text-sm border-b-2 border-orange'
              : 'text-black font-bold text-xs lg:text-sm hover:text-orange'
          }
        >
          Tokenomics
        </NavLink>
      </nav>

      {/* Social Buttons and Buy Button */}
      <div className="hidden sm:flex space-x-3 items-center">
        <SocialDualButton />
        <Button text="Buy Hilarious Harry" />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-10 right-0 w-auto p-10 bg-slate-50 sm:hidden flex flex-col place-items-end space-y-4 py-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold border-b-2 border-orange'
              : 'text-black hover:text-orange'
          }
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/mission"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold border-b-2 border-orange'
              : 'text-black hover:text-orange'
          }
          onClick={toggleMenu}
        >
          Mission
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold border-b-2 border-orange'
              : 'text-black hover:text-orange'
          }
          onClick={toggleMenu}
        >
          About us
        </NavLink>
        <NavLink
          to="/tokenomics"
          className={({ isActive }) =>
            isActive
              ? 'text-orange font-bold border-b-2 border-orange'
              : 'text-black hover:text-orange'
          }
          onClick={toggleMenu}
        >
          Tokenomics
        </NavLink>
        <div className="flex flex-col space-y-3 items-center">
          <SocialDualButton />
          <Button text="Buy Hilarious Harry" />
        </div>
      </div>

      {/* Hanging Monkey Image */}
      <div className="absolute  right-0  top-10 md:top-24 lg:top-24 z-10 ">
        <img src={hangingMonkey} alt="Hanging Monkey" className="w-24 sm:w-56 lg:w-64" />
      </div>
    </header>
  );
};

export default Header;
