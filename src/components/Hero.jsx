import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-primary text-white overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        {/* Academic pattern placeholder */}
        <div className="w-full h-full" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            زاوية ابن تيمية العقلية
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
            منصة تعليمية رائدة تهدف إلى بناء عقلية إسلامية رصينة قادرة على مواجهة الشبهات المعاصرة وفهم التراث بعمق من خلال دراسات نقدية وعقدية متينة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#courses" className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg transform hover:-translate-y-1 text-lg">
              تصفح الدورات
            </a>
            <a href="#about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all text-lg">
              تعرف علينا
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/photos/photo_2026-06-16_19-37-32.jpg" alt="Islamic Architecture" className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
