import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

const AdminLogin = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('بيانات الدخول غير صحيحة. (استخدم admin / admin123)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-arabic px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLock className="text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">تسجيل الدخول للإدارة</h2>
        </div>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-sm text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">اسم المستخدم</label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <FaUser />
              </span>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="admin"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">كلمة المرور</label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <FaLock />
              </span>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="admin123"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors">
            دخول
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/" className="text-primary hover:text-secondary text-sm">العودة للرئيسية</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
