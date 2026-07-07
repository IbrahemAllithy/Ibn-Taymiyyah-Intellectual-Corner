import React, { useContext } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import CourseGrid from '../components/CourseGrid';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import TelegramFAB from '../components/TelegramFAB';
import { CourseContext } from '../context/CourseContext';

const LandingPage = () => {
  const { banners } = useContext(CourseContext);
  const activeBanners = banners.filter(b => b.isActive);

  return (
    <div className="font-arabic scroll-smooth">
      {/* Promotional Banners */}
      {activeBanners.map(banner => (
        <div key={banner.id} className="bg-secondary text-white text-center py-2 px-4 shadow-md relative z-50">
          <p className="text-sm font-bold">
            <span className="bg-white text-secondary px-2 py-1 rounded mr-2 text-xs">{banner.title}</span>
            {banner.message}
          </p>
        </div>
      ))}

      <Header />
      
      <main>
        <Hero />
        <About />
        <CourseGrid />
        <Features />
        <Testimonials />
      </main>
      
      <Footer />
      <TelegramFAB />
    </div>
  );
};

export default LandingPage;
