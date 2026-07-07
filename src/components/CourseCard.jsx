import React, { useState } from 'react';
import { FaStar, FaChalkboardTeacher, FaTelegramPlane, FaTimes } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Simplified Card View */}
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {course.category}
          </div>
          {course.type === 'free' && (
            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              مجاني
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow items-center justify-center text-center">
          <h3 className="text-xl font-bold text-primary mb-6 line-clamp-2" title={course.title}>
            {course.title}
          </h3>
          
          <button 
            className="w-full bg-blue-50 text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-bold transition-colors mt-auto border border-blue-100 shadow-sm"
          >
            عرض التفاصيل
          </button>
        </div>
      </div>

      {/* Modal for Full Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 flex-shrink-0">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <button 
                className="absolute top-4 left-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                {course.category}
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col overflow-y-auto text-right">
              <h2 className="text-2xl font-bold text-primary mb-4">{course.title}</h2>
              
              <div className="flex items-center gap-2 mb-6 text-gray-600 font-medium text-lg">
                <FaChalkboardTeacher className="text-secondary text-2xl" />
                <span>الشيخ: {course.instructor}</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 border-b pb-2">عن الدورة:</h4>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{course.description}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <span className="text-sm font-bold text-secondary bg-blue-50 px-4 py-2 rounded-full">
                    {course.price === 'مجاني' ? <span className="text-green-600">مجاني</span> : 'للاستفسار عن الرسوم'}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-2 rounded-full">
                    <FaStar />
                    <span className="font-bold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <a 
                  href={course.telegramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  <FaTelegramPlane className="text-xl" />
                  <span>التسجيل / الاستفسار</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
