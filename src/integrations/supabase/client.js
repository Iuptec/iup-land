import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hntoaqcvgdnaavzqxfvg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudG9hcWN2Z2RuYWF2enF4ZnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2Njg5OTAsImV4cCI6MjA4ODI0NDk5MH0.2vFoM7bixLThzUYUCr9Y_5wSQfEChAMGHzvdJ0mgXv4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
