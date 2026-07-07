import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "أحمد عبدالله",
      role: "طالب علم",
      text: "الدورات هنا غيرت نظرتي للكثير من المسائل العقدية التي كانت تشكل عليّ. المنهجية المتبعة فريدة من نوعها."
    },
    {
      name: "د. فاطمة سعيد",
      role: "باحثة أكاديمية",
      text: "العمق في الطرح والتحليل المعرفي في دورة أدلة القرآن كان مبهرًا حقًا، أنصح الجميع بالانضمام."
    },
    {
      name: "عمر خالد",
      role: "طالب جامعي",
      text: "المتابعة في المجموعات النقاشية وإجابة الأساتذة على استفساراتنا جعلت تجربة التعلم ممتعة وثرية."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">آراء طلابنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <FaQuoteRight className="text-3xl text-secondary mb-4 opacity-80" />
              <p className="text-gray-200 mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <span className="text-gray-400 text-sm">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
