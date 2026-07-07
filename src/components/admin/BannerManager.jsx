import React, { useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { FaPlus, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const BannerManager = () => {
  const { banners, addBanner, toggleBanner } = useContext(CourseContext);
  const [newBanner, setNewBanner] = useState({ title: '', message: '', isActive: true });
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newBanner.title && newBanner.message) {
      addBanner(newBanner);
      setNewBanner({ title: '', message: '', isActive: true });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">إدارة الإعلانات الترويجية</h3>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-900 transition-colors"
        >
          <FaPlus />
          <span>إضافة إعلان</span>
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">عنوان الإعلان (قصير)</label>
              <input 
                type="text" 
                required
                value={newBanner.title}
                onChange={(e) => setNewBanner({...newBanner, title: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                placeholder="مثال: خصم 20%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">نص الإعلان</label>
              <input 
                type="text" 
                required
                value={newBanner.message}
                onChange={(e) => setNewBanner({...newBanner, message: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-primary"
                placeholder="تفاصيل الإعلان تظهر هنا..."
              />
            </div>
          </div>
          <button type="submit" className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            حفظ الإعلان
          </button>
        </form>
      )}

      <div className="space-y-4">
        {banners.map(banner => (
          <div key={banner.id} className={`flex items-center justify-between p-4 rounded-xl border ${banner.isActive ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
            <div>
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                {banner.title}
                <span className={`text-xs px-2 py-1 rounded-full ${banner.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {banner.isActive ? 'نشط' : 'غير نشط'}
                </span>
              </h4>
              <p className="text-sm text-gray-600 mt-1">{banner.message}</p>
            </div>
            <button 
              onClick={() => toggleBanner(banner.id)}
              className={`text-3xl ${banner.isActive ? 'text-green-500' : 'text-gray-400'}`}
              title={banner.isActive ? 'إيقاف' : 'تفعيل'}
            >
              {banner.isActive ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerManager;
