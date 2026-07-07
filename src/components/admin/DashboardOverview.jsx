import React, { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { FaBook, FaUsers, FaEye, FaDollarSign } from 'react-icons/fa';

const DashboardOverview = () => {
  const { courses } = useContext(CourseContext);

  const stats = [
    { title: 'إجمالي الدورات', value: courses.length, icon: <FaBook />, color: 'bg-blue-500' },
    { title: 'الطلاب المسجلين', value: '+1200', icon: <FaUsers />, color: 'bg-green-500' },
    { title: 'الزيارات اليومية', value: '450', icon: <FaEye />, color: 'bg-purple-500' },
    { title: 'الدورات المدفوعة', value: courses.filter(c => c.type === 'premium').length, icon: <FaDollarSign />, color: 'bg-yellow-500' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className={`${stat.color} text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-md`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
