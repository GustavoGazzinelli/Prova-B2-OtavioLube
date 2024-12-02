
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iaediztgaihsxfeyglme.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZWRpenRnYWloc3hmZXlnbG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODgyMjcsImV4cCI6MjA0MjY2NDIyN30.uZkde2-0SFqQkXEbsYFgDDW4yTzzcy9oCEm-KCbdbNs"
export const supabase = createClient(supabaseUrl, supabaseKey)

