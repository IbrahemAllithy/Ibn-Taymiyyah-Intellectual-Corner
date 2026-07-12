import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import CourseCard from './CourseCard';
import { FaBullhorn, FaStar } from 'react-icons/fa';

const Announcements = () => {
  const { courses, banners, loading } = useContext(CourseContext);

  const activeBanners = banners.filter(b => b.is_active);
  const latestCourses = courses.slice(0, 3); // Get the 3 most recently added courses

  if (loading) {
    return <div className="py-12 text-center text-gray-500 font-arabic">جاري تحميل الإعلانات...</div>;
  }

  // If no banners and no courses, don't show the section
  if (activeBanners.length === 0 && latestCourses.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-blue-50 font-arabic relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">جديد المنصة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-3">
            <FaBullhorn className="text-secondary" /> الإعلانات وآخر التحديثات
          </h2>
        </div>

        {/* Banners Section */}
        {activeBanners.length > 0 && (
          <div className="mb-12 space-y-4 max-w-4xl mx-auto">
            {activeBanners.map(banner => (
              <div key={banner.id} className="bg-white rounded-2xl shadow-lg border-r-4 border-secondary p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                  {banner.image_url ? (
                    <img src={banner.image_url} alt={banner.title} className="w-full sm:w-32 h-32 object-cover rounded-xl shadow-sm flex-shrink-0" />
                  ) : (
                    <div className="bg-blue-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <FaStar className="text-2xl" />
                    </div>
                  )}
                  <div className="text-center sm:text-right flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{banner.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{banner.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Latest Courses Section */}
        {latestCourses.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b border-gray-200 pb-4 inline-block mx-auto w-full max-w-md">
              الدورات المضافة حديثاً
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;
