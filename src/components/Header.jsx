import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/photos/new_logo.png" alt="Logo" className="h-10 lg:h-14 w-auto object-contain" />
          <span className="text-xl lg:text-2xl font-bold text-primary font-arabic whitespace-nowrap">زاوية ابن تيمية</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 space-x-reverse items-center">
          <a href="#home" className="text-gray-600 hover:text-secondary font-medium transition-colors">الرئيسية</a>
          <a href="#about" className="text-gray-600 hover:text-secondary font-medium transition-colors">عن المنصة</a>
          <a href="#courses" className="text-gray-600 hover:text-secondary font-medium transition-colors">الدورات</a>
          <a href="#features" className="text-gray-600 hover:text-secondary font-medium transition-colors">المميزات</a>
          <a href="#courses" className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md mr-4">
            استكشف الدورات
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary text-2xl focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 flex flex-col py-4 px-4 space-y-4 shadow-lg absolute w-full">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-secondary">الرئيسية</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-secondary">عن المنصة</a>
          <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-secondary">الدورات</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-secondary">المميزات</a>
          <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="bg-secondary text-white text-center px-6 py-3 rounded-full font-bold hover:bg-blue-700 shadow-md mt-2">
            استكشف الدورات
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
