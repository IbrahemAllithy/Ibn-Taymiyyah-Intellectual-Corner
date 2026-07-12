import React, { useContext, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { supabase } from '../../lib/supabase';
import { FaPlus, FaToggleOn, FaToggleOff, FaImage, FaSpinner } from 'react-icons/fa';

const BannerManager = () => {
  const { banners, addBanner, toggleBanner } = useContext(CourseContext);
  const [newBanner, setNewBanner] = useState({ title: '', message: '', image_url: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `banner_${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('course-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('course-images').getPublicUrl(filePath);
      setNewBanner({...newBanner, image_url: data.publicUrl});
    } catch (error) {
      console.error('Error uploading banner image:', error);
      alert('حدث خطأ أثناء رفع الصورة');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newBanner.title && newBanner.message) {
      addBanner(newBanner);
      setNewBanner({ title: '', message: '', image_url: '', is_active: true });
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">صورة الإعلان (اختياري)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors relative cursor-pointer group">
              {uploading ? (
                <div className="flex flex-col items-center">
                  <FaSpinner className="animate-spin text-xl text-primary mb-2" />
                  <span className="text-xs">جاري الرفع...</span>
                </div>
              ) : newBanner.image_url ? (
                <img src={newBanner.image_url} alt="Preview" className="h-20 object-contain mb-2 rounded shadow-sm" />
              ) : (
                <FaImage className="text-2xl mb-2 text-gray-300 group-hover:text-primary transition-colors" />
              )}
              
              {!uploading && (
                <>
                  <span className="text-xs font-medium">{newBanner.image_url ? 'اضغط لتغيير الصورة' : 'اضغط لاختيار صورة للإعلان'}</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </>
              )}
            </div>
          </div>
          <button type="submit" disabled={uploading} className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50">
            حفظ الإعلان
          </button>
        </form>
      )}

      <div className="space-y-4">
        {banners.map(banner => (
          <div key={banner.id} className={`flex items-center justify-between p-4 rounded-xl border ${banner.is_active ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
            <div>
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                {banner.title}
                <span className={`text-xs px-2 py-1 rounded-full ${banner.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {banner.is_active ? 'نشط' : 'غير نشط'}
                </span>
              </h4>
              <p className="text-sm text-gray-600 mt-1">{banner.message}</p>
            </div>
            <button 
              onClick={() => toggleBanner(banner.id)}
              className={`text-3xl ${banner.is_active ? 'text-green-500' : 'text-gray-400'}`}
              title={banner.is_active ? 'إيقاف' : 'تفعيل'}
            >
              {banner.is_active ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerManager;
