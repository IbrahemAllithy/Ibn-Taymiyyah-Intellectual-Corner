import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/photos/new_logo.png" alt="Logo" className="h-14 w-auto object-contain" />
          <span className="text-2xl font-bold text-primary font-arabic">زاوية ابن تيمية</span>
        </div>
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <a href="#home" className="text-gray-600 hover:text-secondary font-medium transition-colors">الرئيسية</a>
          <a href="#about" className="text-gray-600 hover:text-secondary font-medium transition-colors">عن المنصة</a>
          <a href="#courses" className="text-gray-600 hover:text-secondary font-medium transition-colors">الدورات</a>
          <a href="#features" className="text-gray-600 hover:text-secondary font-medium transition-colors">المميزات</a>
        </nav>
        <div>
          <a href="#courses" className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors shadow-md">
            استكشف الدورات
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
