import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjrqirvtcrdzjijgghip.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qcnFpcnZ0Y3JkanppamdnaGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NTUwNTQsImV4cCI6MjA5OTQzMTA1NH0.SPoeIOzzPMbWusPmVu-MZxKScZTSsG_sljtljy4mnF8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
