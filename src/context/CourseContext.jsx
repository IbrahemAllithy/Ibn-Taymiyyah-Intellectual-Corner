import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "دراسة تحليلية لعقيدة الفخر الرازي - كتاب الأربعين نموذجا",
      instructor: "أستاذ المادة",
      price: "150$",
      rating: 4.8,
      category: "عقيدة",
      type: "premium",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2025-05-31_20-12-07.jpg",
      description: "دراسة الجانب العقدي الكلامي في فكر فخر الدين الرازي من الأهمية بمكان..."
    },
    {
      id: 2,
      title: "خريطة نظرية المعرفة الشاملة ، و تحقيق مواضيعها الهامة",
      instructor: "أستاذ المادة",
      price: "120$",
      rating: 4.9,
      category: "فلسفة ومعرفة",
      type: "premium",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2025-05-31_21-03-30.jpg",
      description: "دراسة و مقدمة مفصلة لمواضيع هذا العلم و الإحاطة بمسائله."
    },
    {
      id: 3,
      title: "أدلة القرآن الكريم العقلية: في ضوء نظرية المعرفة",
      instructor: "د. غازي أحمد",
      price: "مجاني",
      rating: 5.0,
      category: "تفسير وعقيدة",
      type: "free",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2025-05-31_21-08-51.jpg",
      description: "الكشف عن تضمن القرآن الكريم لبراهين عقلية يقينية تجيب عن الأسئلة الوجودية الكبرى."
    },
    {
      id: 4,
      title: "علم الكلام، شرح متن الوسطى للسنوسي المالكي",
      instructor: "أ. محمود سامح",
      price: "80$",
      rating: 4.7,
      category: "علم الكلام",
      type: "premium",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2026-05-25_21-06-27.jpg",
      description: "إطلاع الطالب على مسائل علم الكلام، وتصويرها له من خلال متن الوسطى."
    },
    {
      id: 5,
      title: "الحركة وأحكامها",
      instructor: "أستاذ المادة",
      price: "100$",
      rating: 4.6,
      category: "طبيعيات وإلهيات",
      type: "premium",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2026-05-25_21-07-15.jpg",
      description: "تُعدُّ الدورة مقدمة هامة في كثير من القضايا الإلهية سواء في وجود الله كدليل الحركة أو أفعال الواجب."
    },
    {
      id: 6,
      title: "علم الكلام، شرح متن الصغرى (أم البراهين) للسنوسي المالكي",
      instructor: "أستاذ المادة",
      price: "مجاني",
      rating: 4.8,
      category: "علم الكلام",
      type: "free",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2026-05-25_21-08-14.jpg",
      description: "إطلاع الطالب على مسائل علم الكلام، وتصويرها له، من خلال أم البراهين."
    },
    {
      id: 7,
      title: "النبوة وإعجاز القرآن في ضوء نظرية المعرفة، ورد شبهات الملاحدة عنها",
      instructor: "د. غازي أحمد",
      price: "140$",
      rating: 4.9,
      category: "عقيدة",
      type: "premium",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2026-06-15_19-00-39.jpg",
      description: "الهدف من هذه الدورة هو تعقل المعجزات بعامة وإعجاز القرآن البياني وغير البياني."
    },
    {
      id: 8,
      title: "مدخل مفصل إلى فلسفة العلوم",
      instructor: "أستاذ المادة",
      price: "مجاني",
      rating: 4.7,
      category: "فلسفة",
      type: "free",
      telegramLink: "https://t.me/Schneizel1Bot",
      image: "/photos/photo_2026-06-16_19-37-10.jpg",
      description: "معرفة ما هو هذا العلم و الإلمام بمواضيعه من الناحية المنهجية و المعرفية و المنطقية."
    }
  ]);

  const [banners, setBanners] = useState([]);

  const updateCourse = (id, updatedCourse) => {
    setCourses(courses.map(c => c.id === id ? updatedCourse : c));
  };

  const addBanner = (banner) => {
    setBanners([...banners, { ...banner, id: Date.now() }]);
  };

  const toggleBanner = (id) => {
    setBanners(banners.map(b => b.id === id ? { ...b, isActive: !b.isActive } : b));
  };

  return (
    <CourseContext.Provider value={{ courses, updateCourse, banners, addBanner, toggleBanner }}>
      {children}
    </CourseContext.Provider>
  );
};
