import { createClient } from '@supabase/supabase-js'

const URL = 'https://wsglfevulllwmooopsbw.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZ2xmZXZ1bGxsd21vb29wc2J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxOTYxNjUsImV4cCI6MTk5Mjc3MjE2NX0.6QF-22KfqRxJYO9Tl7nyvMbQgt1rSQx6gZ4keKaLR0s'

export const supabase = createClient(URL, API_KEY)