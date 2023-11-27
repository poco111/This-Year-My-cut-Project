import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_URL, SUPABASE_API_KEY } from '@constants/api';
console.log(SUPABASE_API_KEY, SUPABASE_API_URL);
const supabaseUrl = SUPABASE_API_URL || '';
const supabaseKey = SUPABASE_API_KEY || '';
console.log(supabaseUrl, supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
