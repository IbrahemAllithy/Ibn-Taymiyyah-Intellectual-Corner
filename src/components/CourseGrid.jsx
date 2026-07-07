import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import CourseCard from './CourseCard';

const CourseGrid = () => {
  const { courses } = useContext(CourseContext);
  
  const premiumCourses = courses.filter(course => course.type === 'premium');
  const freeCourses = courses.filter(course => course.type === 'free');

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Premium Courses */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">الدورات المتخصصة</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              برامج علمية مكثفة تأخذ بيدك من التأسيس إلى التأصيل في مختلف فروع المعرفة العقدية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {premiumCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Free Courses */}
        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">الدورات التأسيسية المجانية</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              دورات مجانية لطلاب العلم المبتدئين تضعهم على أول طريق التأصيل العقدي.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseGrid;
