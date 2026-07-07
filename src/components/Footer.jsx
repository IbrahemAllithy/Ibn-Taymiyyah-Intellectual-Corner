import React from 'react';
import { FaBookOpen, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FaBookOpen className="text-secondary text-3xl" />
              <span className="text-2xl font-bold text-white font-arabic">زاوية ابن تيمية</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              منصة تعليمية رائدة تهدف إلى بناء عقلية إسلامية رصينة قادرة على مواجهة الشبهات المعاصرة وفهم التراث بعمق.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <FaYoutube />
              </a>
              <a href="https://t.me/Schneizel1Bot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-colors">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
              روابط سريعة
              <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-secondary transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">عن المنصة</a></li>
              <li><a href="#courses" className="hover:text-secondary transition-colors">الدورات</a></li>
              <li><a href="#features" className="hover:text-secondary transition-colors">المميزات</a></li>
              <li><Link to="/admin/login" className="hover:text-secondary transition-colors">دخول الإدارة</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
              تواصل معنا
              <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaTelegramPlane className="text-secondary mt-1 text-xl" />
                <div>
                  <span className="block text-white font-bold mb-1">تيليجرام (الدعم والتسجيل)</span>
                  <a href="https://t.me/Schneizel1Bot" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary dir-ltr inline-block">
                    @Schneizel1Bot
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} زاوية ابن تيمية العقلية.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
