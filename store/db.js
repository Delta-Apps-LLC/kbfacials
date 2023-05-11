import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwY3B6dHRqeW5xdHJhZnFmamlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3Nzg2MzcsImV4cCI6MTk5OTM1NDYzN30.H3gvypjwjQWZCF1zh5846hLvRbvEHxX6-kPHH3VUgzg"
export const SUPABASE = createClient('https://ypcpzttjynqtrafqfjir.supabase.co', SUPABASE_KEY)
