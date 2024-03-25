import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wajrqdbpukfrgzsdqzmg.supabase.co';

const supabase = createClient(
  supabaseUrl,
  `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`
);

export default supabase;
