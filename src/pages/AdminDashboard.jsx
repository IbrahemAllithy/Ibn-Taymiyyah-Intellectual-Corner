import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';
import DashboardOverview from '../components/admin/DashboardOverview';
import CourseManager from '../components/admin/CourseManager';
import BannerManager from '../components/admin/BannerManager';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simple auth check
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">مرحباً بك في لوحة التحكم</h2>
        <p className="text-gray-600">هنا يمكنك إدارة محتوى المنصة، الدورات، والإعلانات.</p>
      </div>

      <DashboardOverview />
      
      <div id="courses">
        <CourseManager />
      </div>
      
      <div id="banners">
        <BannerManager />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
