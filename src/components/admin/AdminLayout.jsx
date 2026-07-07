import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaBullhorn, FaSignOutAlt, FaCog } from 'react-icons/fa';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'لوحة التحكم', path: '/admin', icon: <FaHome /> },
    { name: 'إدارة الدورات', path: '#courses', icon: <FaBook /> },
    { name: 'إدارة الإعلانات', path: '#banners', icon: <FaBullhorn /> },
    { name: 'الإعدادات', path: '#settings', icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-arabic">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-blue-800 text-center">
          <h1 className="text-xl font-bold">زاوية ابن تيمية</h1>
          <p className="text-sm text-blue-300 mt-1">لوحة تحكم الإدارة</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item, idx) => (
            <a 
              key={idx}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${idx === 0 ? 'bg-secondary text-white' : 'hover:bg-blue-800 text-gray-200'}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-red-900/50 rounded-lg transition-colors"
          >
            <FaSignOutAlt />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mr-64">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-800">إدارة المنصة</h2>
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank" className="text-sm text-primary hover:text-secondary font-medium">
              معاينة الموقع
            </Link>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
              م
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
