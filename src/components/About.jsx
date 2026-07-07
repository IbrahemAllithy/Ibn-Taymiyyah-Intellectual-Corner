import React from 'react';
import { FaGraduationCap, FaMosque, FaBrain } from 'react-icons/fa';

const About = () => {
  const pillars = [
    {
      icon: <FaMosque className="text-4xl text-secondary mb-4" />,
      title: "تأصيل شرعي",
      desc: "بناء معرفي متين يستند إلى نصوص الوحيين وفهم سلف الأمة."
    },
    {
      icon: <FaBrain className="text-4xl text-secondary mb-4" />,
      title: "بناء عقلي",
      desc: "تنمية مهارات التفكير الناقد والمحاكمة العقلية الصحيحة."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-secondary mb-4" />,
      title: "منهجية علمية",
      desc: "التدرج في طلب العلم وفق منهجيات علمية واضحة ومدروسة."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">رؤيتنا ومنهجنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نسعى في زاوية ابن تيمية العقلية إلى تقديم مادة علمية رصينة تجمع بين الأصالة والمعاصرة، لنقف سداً منيعاً أمام الشبهات الفكرية والعقدية.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-light p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-center">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
