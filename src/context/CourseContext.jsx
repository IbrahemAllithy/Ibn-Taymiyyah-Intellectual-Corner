import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: coursesData } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
      const { data: bannersData } = await supabase.from('banners').select('*').order('created_at', { ascending: false });
      
      if (coursesData) setCourses(coursesData);
      if (bannersData) setBanners(bannersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCourse = async (id, updatedCourse) => {
    const { data, error } = await supabase.from('courses').update(updatedCourse).eq('id', id).select();
    if (data && data.length > 0) {
      setCourses(courses.map(c => c.id === id ? data[0] : c));
    }
  };

  const addCourse = async (newCourse) => {
    const { data, error } = await supabase.from('courses').insert([newCourse]).select();
    if (data && data.length > 0) {
      setCourses([data[0], ...courses]);
    }
  };

  const deleteCourse = async (id) => {
    const { error } = await supabase.from('courses').delete().eq('id', id);
    if (!error) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const addBanner = async (banner) => {
    const { data, error } = await supabase.from('banners').insert([banner]).select();
    if (data && data.length > 0) {
      setBanners([data[0], ...banners]);
    }
  };

  const toggleBanner = async (id) => {
    const banner = banners.find(b => b.id === id);
    if (!banner) return;
    const { data, error } = await supabase.from('banners').update({ is_active: !banner.is_active }).eq('id', id).select();
    if (data && data.length > 0) {
      setBanners(banners.map(b => b.id === id ? data[0] : b));
    }
  };

  return (
    <CourseContext.Provider value={{ courses, updateCourse, addCourse, deleteCourse, banners, addBanner, toggleBanner, loading, refreshData: fetchData }}>
      {children}
    </CourseContext.Provider>
  );
};
