import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjrqirvtcrdzjijgghip.supabase.co';
const supabaseAnonKey = 'sb_publishable_P0JJPr-65ePaiD2OcwslKQ_evSvKOoN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
