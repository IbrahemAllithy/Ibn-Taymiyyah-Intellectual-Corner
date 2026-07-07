import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const TelegramFAB = () => {
  return (
    <a
      href="https://t.me/Schneizel1Bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:bg-[#0077b3] transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="تواصل معنا عبر تيليجرام"
    >
      <FaTelegramPlane className="text-3xl" />
      <span className="absolute left-16 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        تواصل معنا
      </span>
    </a>
  );
};

export default TelegramFAB;
