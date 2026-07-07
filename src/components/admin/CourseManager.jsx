import React, { useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const CourseManager = () => {
  const { courses, updateCourse } = useContext(CourseContext);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const startEditing = (course) => {
    setEditingId(course.id);
    setEditForm({ ...course });
  };

  const handleSave = () => {
    updateCourse(editingId, editForm);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">إدارة الدورات</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="py-4 px-6 font-semibold">عنوان الدورة</th>
              <th className="py-4 px-6 font-semibold">السعر</th>
              <th className="py-4 px-6 font-semibold">رابط تيليجرام</th>
              <th className="py-4 px-6 font-semibold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map(course => (
              <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-800 line-clamp-1" title={course.title}>
                    {course.title}
                  </div>
                </td>
                
                {/* Price Column */}
                <td className="py-4 px-6">
                  {editingId === course.id ? (
                    <input 
                      type="text" 
                      value={editForm.price} 
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      className="border border-gray-300 rounded px-2 py-1 w-20 focus:outline-primary"
                    />
                  ) : (
                    <span className={course.price === 'مجاني' ? 'text-green-600 font-bold' : ''}>
                      {course.price}
                    </span>
                  )}
                </td>

                {/* Telegram Link Column */}
                <td className="py-4 px-6">
                  {editingId === course.id ? (
                    <input 
                      type="text" 
                      value={editForm.telegramLink} 
                      onChange={(e) => setEditForm({...editForm, telegramLink: e.target.value})}
                      className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-primary dir-ltr text-left"
                    />
                  ) : (
                    <a href={course.telegramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dir-ltr inline-block line-clamp-1" title={course.telegramLink}>
                      {course.telegramLink}
                    </a>
                  )}
                </td>

                {/* Actions Column */}
                <td className="py-4 px-6 text-center">
                  {editingId === course.id ? (
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={handleSave} className="text-green-600 hover:text-green-800 transition-colors" title="حفظ">
                        <FaSave className="text-xl" />
                      </button>
                      <button onClick={handleCancel} className="text-red-500 hover:text-red-700 transition-colors" title="إلغاء">
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => startEditing(course)} className="text-blue-600 hover:text-blue-800 transition-colors" title="تعديل">
                      <FaEdit className="text-xl mx-auto" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManager;
