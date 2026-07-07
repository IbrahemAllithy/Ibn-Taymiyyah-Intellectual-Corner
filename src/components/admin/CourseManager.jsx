import React, { useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { FaEdit, FaSave, FaTimes, FaTrash, FaPlus, FaImage } from 'react-icons/fa';

const CourseManager = () => {
  const { courses, updateCourse, addCourse, deleteCourse } = useContext(CourseContext);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    price: '',
    category: '',
    description: '',
    telegramLink: '',
    image: '',
    type: 'premium',
    rating: 5.0
  });

  const handleImageUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditing = (course) => {
    setEditingId(course.id);
    setEditForm({ ...course });
  };

  const handleSave = () => {
    updateCourse(editingId, editForm);
    setEditingId(null);
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    setIsAddModalOpen(false);
    setNewCourse({
      title: '', instructor: '', price: '', category: '', description: '', telegramLink: '', image: '', type: 'premium', rating: 5.0
    });
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="text-lg font-bold text-gray-800">إدارة الدورات</h3>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-primary hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
          >
            <FaPlus />
            <span>إضافة دورة جديدة</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="py-4 px-6 font-semibold">صورة</th>
                <th className="py-4 px-6 font-semibold min-w-[200px]">عنوان الدورة</th>
                <th className="py-4 px-6 font-semibold">السعر</th>
                <th className="py-4 px-6 font-semibold text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {courses.map(course => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 w-20">
                    <img src={course.image} alt="" className="w-12 h-12 object-cover rounded-md shadow-sm" />
                  </td>
                  <td className="py-4 px-6">
                    {editingId === course.id ? (
                      <input 
                        type="text" 
                        value={editForm.title} 
                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                        className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-primary"
                      />
                    ) : (
                      <div className="font-medium text-gray-800 line-clamp-2" title={course.title}>
                        {course.title}
                      </div>
                    )}
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
  
                  {/* Actions Column */}
                  <td className="py-4 px-6 text-center">
                    {editingId === course.id ? (
                      <div className="flex items-center justify-center gap-3">
                        <button onClick={handleSave} className="text-green-600 hover:text-green-800 transition-colors" title="حفظ">
                          <FaSave className="text-xl" />
                        </button>
                        <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600 transition-colors" title="إلغاء">
                          <FaTimes className="text-xl" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-4">
                        <button onClick={() => startEditing(course)} className="text-blue-600 hover:text-blue-800 transition-colors" title="تعديل">
                          <FaEdit className="text-lg" />
                        </button>
                        <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:text-red-700 transition-colors" title="حذف">
                          <FaTrash className="text-lg" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">إضافة دورة جديدة</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            <form onSubmit={handleAddCourse} className="p-6 overflow-y-auto space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">عنوان الدورة</label>
                <input required type="text" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary" placeholder="مثال: شرح صحيح البخاري..." />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">اسم الشيخ / المحاضر</label>
                  <input required type="text" value={newCourse.instructor} onChange={e => setNewCourse({...newCourse, instructor: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary" placeholder="مثال: د. غازي أحمد" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">السعر (أو "مجاني")</label>
                  <input required type="text" value={newCourse.price} onChange={e => setNewCourse({...newCourse, price: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary" placeholder="مثال: 150$ أو مجاني" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">التصنيف</label>
                  <input required type="text" value={newCourse.category} onChange={e => setNewCourse({...newCourse, category: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary" placeholder="مثال: عقيدة، حديث..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">رابط التيليجرام للاستفسار</label>
                  <input required type="url" value={newCourse.telegramLink} onChange={e => setNewCourse({...newCourse, telegramLink: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary dir-ltr text-left" placeholder="https://t.me/..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">صورة الدورة</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative cursor-pointer group">
                  {newCourse.image ? (
                    <img src={newCourse.image} alt="Preview" className="h-32 object-contain mb-2 rounded shadow-sm" />
                  ) : (
                    <FaImage className="text-4xl mb-3 text-gray-300 group-hover:text-primary transition-colors" />
                  )}
                  <span className="text-sm font-medium">{newCourse.image ? 'اضغط لتغيير الصورة' : 'اضغط لاختيار صورة الدورة من جهازك'}</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleImageUpload(e, (base64) => setNewCourse({...newCourse, image: base64}))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required={!newCourse.image}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">وصف الدورة التفصيلي</label>
                <textarea required rows="4" value={newCourse.description} onChange={e => setNewCourse({...newCourse, description: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primary" placeholder="اكتب وصف الدورة ومحتواها هنا..."></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-2 rounded-lg font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">إلغاء</button>
                <button type="submit" className="px-6 py-2 rounded-lg font-bold text-white bg-primary hover:bg-blue-900 transition-colors">إضافة الدورة</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseManager;
