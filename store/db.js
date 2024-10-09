import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRscmNtc2lldHd1cXp2ZHlicWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDA4NjUsImV4cCI6MjAxNDYxNjg2NX0.eCs600a6_XmNEzrqfGoge_r1EioCy4fpRlhVtP9qBfM'
export const SUPABASE = createClient('https://dlrcmsietwuqzvdybqdr.supabase.co', SUPABASE_KEY)
