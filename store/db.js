import { createClient } from '@supabase/supabase-js'
export const SUPABASE = createClient('https://ypcpzttjynqtrafqfjir.supabase.co', process.env.SUPABASE_KEY)
