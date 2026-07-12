import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AdminLayout from '../components/admin/AdminLayout';
import DashboardOverview from '../components/admin/DashboardOverview';
import CourseManager from '../components/admin/CourseManager';
import BannerManager from '../components/admin/BannerManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check real Supabase auth session
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();

    // Listen for auth state changes (e.g., token expiry)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-arabic">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">جاري التحقق من صلاحياتك...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

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
