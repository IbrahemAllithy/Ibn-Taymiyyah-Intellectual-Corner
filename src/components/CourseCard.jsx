import React from 'react';
import { FaStar, FaChalkboardTeacher, FaTelegramPlane } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300">
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
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2" title={course.title}>
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
            <FaChalkboardTeacher className="text-secondary" />
            <span>{course.instructor}</span>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold text-primary">
              {course.price === 'مجاني' ? <span className="text-green-600">مجاني</span> : course.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-bold text-gray-700">{course.rating}</span>
            </div>
          </div>
          
          <a 
            href={course.telegramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white py-3 rounded-lg font-bold transition-colors"
          >
            <FaTelegramPlane className="text-xl" />
            <span>التسجيل / الاستفسار</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
