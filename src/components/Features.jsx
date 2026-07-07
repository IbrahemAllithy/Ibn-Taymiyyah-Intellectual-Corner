import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  const featuresList = [
    "محتوى علمي محكم ومراجع بدقة.",
    "أساتذة متخصصون ذوو كفاءة عالية.",
    "شهادات إتمام بعد اجتياز الاختبارات.",
    "مجموعات تفاعلية ومتابعة مستمرة.",
    "مرونة في أوقات التعلم وتوفر التسجيلات.",
    "أسعار رمزية ودعم للطلاب."
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">لماذا تختار منصتنا؟</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-600 mb-8 text-lg">
            نحن لا نقدم مجرد دورات، بل نصنع بيئة علمية متكاملة تساعدك على بناء قاعدة معرفية صلبة من خلال:
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresList.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium text-lg bg-gray-50 p-4 rounded-xl border border-gray-100">
              <FaCheckCircle className="text-secondary text-xl flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
