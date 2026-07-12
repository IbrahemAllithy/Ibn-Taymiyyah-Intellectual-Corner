import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Announcements from '../components/Announcements';
import About from '../components/About';
import CourseGrid from '../components/CourseGrid';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import TelegramFAB from '../components/TelegramFAB';

const LandingPage = () => {
  return (
    <div className="font-arabic scroll-smooth">
      <Header />
      
      <main>
        <Hero />
        <Announcements />
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
